'use client'
import styles from './canvas.module.css'
import React, { useCallback, useEffect, useRef, useState } from 'react';

class Circle {
    canvas: React.RefObject<HTMLCanvasElement>;
    context: CanvasRenderingContext2D | null;
    center: { x: number, y: number }
    radius: number
    devicePixelRatio: number;
    isDragEnabled: boolean;
    color: string;
    dataset: any;
    setNewDataset: any;

    constructor(
        canvas: React.RefObject<HTMLCanvasElement>,
        center: { x: number, y: number } = { x: 50, y: 50 },
        radius: number = 50,
        color: string = 'green',
        setNewDataset: any
    ) {
        this.canvas = canvas;
        this.context = this.canvas.current ? this.canvas.current.getContext('2d') : null;
        this.center = center
        this.radius = radius
        this.devicePixelRatio = window.devicePixelRatio || 1;
        this.isDragEnabled = false;
        this.color = color;
        this.setNewDataset = setNewDataset;
        if (this.context && this.canvas.current) {
            const canvas = this.canvas.current;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * this.devicePixelRatio;
            canvas.height = rect.height * this.devicePixelRatio;
            this.context.scale(this.devicePixelRatio, this.devicePixelRatio);
        }
    }


    draw = () => {
        if (this.context) {
            this.context.beginPath();
            this.context.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI, false);
            this.context.fillStyle = this.color;
            this.context.fill();
            this.context.lineWidth = 1;
            this.context.strokeStyle = '#003300';
            this.context.stroke();
        }
    }

    clear = () => {
        if (this.context && this.canvas.current) {
            this.context.clearRect(0, 0, this.canvas.current.width, this.canvas.current.height);
        }
    }
    isMouseInCircle = (x: number, y: number): boolean => {
        // Calculate the distance between the mouse pointer and the center of the circle
        const dist = Math.hypot(this.center.x - x, this.center.y - y);

        // If the distance is less than or equal to the radius, then the mouse is inside the circle
        return dist <= this.radius;
    }

    addEvent = () => {
        // if (this.canvas.current) {
        //     this.canvas.current.addEventListener('mousedown', this.__handleMouseDown);
        //     this.canvas.current.addEventListener('mouseup', this.__handleMouseUp);
        //     this.canvas.current.addEventListener('mousemove', this.__handleMouseMove);
        //     this.canvas.current.addEventListener('mouseleave', this.__handleMouseLeave);
        //     window.addEventListener('resize', this.__handleResize);
        // }
    }

    removeEvent = () => {
        // if (this.canvas && this.canvas.current) {
        //     this.canvas.current.removeEventListener('mousedown', this.__handleMouseDown);
        //     this.canvas.current.removeEventListener('mouseup', this.__handleMouseUp);
        //     this.canvas.current.removeEventListener('mousemove', this.__handleMouseMove);
        //     this.canvas.current.removeEventListener('mouseleave', this.__handleMouseLeave);
        //     window.removeEventListener('resize', this.__handleResize);
        // }
    }
    __handleResize = () => {

    }

    __handleMouseDown = (event: MouseEvent) => {
        // handle the mousedown event
        if (this.isMouseInCircle(event.offsetX, event.offsetY)) {
            this.isDragEnabled = true;
            this.setNewDataset({ x: event.offsetX, y: event.offsetY })
        }

    }

    __handleMouseUp = (event: MouseEvent) => {
        // handle the mouseup event
        this.isDragEnabled = false;

    }

    __handleMouseMove = (event: MouseEvent) => {
        // handle the mousemove event
        // if (this.isDragEnabled) {
        //     this.center.x = event.offsetX;
        //     this.center.y = event.offsetY;
        //     this.setNewDataset({x: event.offsetX, y: event.offsetY})

        // }
    }

    __handleMouseLeave = (event: MouseEvent) => {
        // handle the mouseleave event
    }
}



function clear(context: CanvasRenderingContext2D) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}
function draw(circle: Circle, context: CanvasRenderingContext2D) {
    context.beginPath();
    context.arc(circle.center.x, circle.center.y, circle.radius, 0, 2 * Math.PI, false);
    context.fillStyle = circle.color;
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = '#003300';
    context.stroke();
}
export default function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [circles, setCircles] = useState<Circle[]>([]);
    const [dataset, setDataset] = useState<any>({});
    // A function to draw all circles on the canvas
    const drawAllCircles = useCallback(() => {

        const context = canvasRef.current?.getContext('2d');
        if (context) {
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            circles.forEach(circle => {
                circle.draw();
            });
        }
    }, [circles])
    useEffect(() => {
        let selected = null;
        const handleMouseDown = (event: any) => {
            console.log('mousedown')
            let smallestDistance = Infinity;
            const x = event.offsetX;
            const y = event.offsetY
            console.log(smallestDistance)
            circles.forEach(circle => {
                const distance = Math.hypot(circle.center.x - x, circle.center.y - y);
                console.log('distance :>> ', distance);
                if (distance < smallestDistance && distance < circle.radius) {
                    smallestDistance = distance;
                    selected = circle;
                }
            })



        }

        const handleMouseMove = (event: any,) => {
            if (selected) {
                selected.center.x = event.offsetX;
                selected.center.y = event.offsetY;
                drawAllCircles();

            }
        }
        const handleMouseUp = (event: any) => {
            selected = null;
        }

        if (canvasRef.current) {
            canvasRef.current.addEventListener('mousedown', handleMouseDown);
            canvasRef.current.addEventListener('mouseup', handleMouseUp);
            canvasRef.current.addEventListener('mousemove', handleMouseMove);

        }

        return () => {
            if (canvasRef.current) {
                canvasRef.current.removeEventListener('mousedown', handleMouseDown);
                canvasRef.current.removeEventListener('mouseup', handleMouseUp);
                canvasRef.current.removeEventListener('mousemove', handleMouseMove);
            }
        }
    }, [circles, dataset, drawAllCircles])
    useEffect(() => {
        if (canvasRef.current) {
            const colors = ['red', 'green', 'blue'];
            const newCircles = colors.map((color, index) => {
                const circle = new Circle(canvasRef, { x: 100 + index * 60, y: 100 }, 50, color, setDataset);
                circle.addEvent();
                return circle;
            });
            setCircles(newCircles);
        }

        return () => {
            circles.forEach((circle) => {
                circle.removeEvent();
            });
        }
    }, []);

    // Whenever circles' states change, redraw all circles
    useEffect(drawAllCircles, [dataset, circles]);




    return <canvas id="canvas" ref={canvasRef} className={styles.canvas}>
    </canvas>
}