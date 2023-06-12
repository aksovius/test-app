'use client'
import styles from './canvas.module.css'
import React, { useEffect, useRef, useState } from 'react';

class Circle {
    canvas: React.RefObject<HTMLCanvasElement>;
    context: CanvasRenderingContext2D | null;
    center: {x: number, y: number}
    radius: number
    devicePixelRatio: number;
    isDragEnabled: boolean;
    color: string;
    redrawAll: Function;
    constructor(
        canvas: React.RefObject<HTMLCanvasElement>,
        center: { x: number, y: number } = {x: 50, y: 50},
        radius: number = 50,
        color: string = 'green',
        redrawAll: Function
    ) {
        this.canvas = canvas;
        this.context = this.canvas.current ? this.canvas.current.getContext('2d') : null;
        this.center = center
        this.radius = radius
        this.devicePixelRatio = window.devicePixelRatio || 1;
        this.isDragEnabled = false;
        this.color = color;
        this.redrawAll = redrawAll;
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

    addEvent = () => {
        if (this.canvas.current) {
            this.canvas.current.addEventListener('mousedown', this.__handleMouseDown);
            this.canvas.current.addEventListener('mouseup', this.__handleMouseUp);
            this.canvas.current.addEventListener('mousemove', this.__handleMouseMove);
            this.canvas.current.addEventListener('mouseleave', this.__handleMouseLeave);
            window.addEventListener('resize', this.__handleResize);
        }
    }

    removeEvent = () => {
        if (this.canvas && this.canvas.current) {
            this.canvas.current.removeEventListener('mousedown', this.__handleMouseDown);
            this.canvas.current.removeEventListener('mouseup', this.__handleMouseUp);
            this.canvas.current.removeEventListener('mousemove', this.__handleMouseMove);
            this.canvas.current.removeEventListener('mouseleave', this.__handleMouseLeave);
            window.removeEventListener('resize', this.__handleResize);
        }
    }
    __handleResize = () => {
        
    }

    __handleMouseDown = (event: MouseEvent) => {
        // handle the mousedown event
        this.isDragEnabled = true;
    }

    __handleMouseUp = (event: MouseEvent) => {
        // handle the mouseup event
        this.isDragEnabled = false;
    }

    __handleMouseMove = (event: MouseEvent) => {
        // handle the mousemove event
        if (this.isDragEnabled) {
            this.center.x = event.offsetX;
            this.center.y = event.offsetY;
            
        }
    }

    __handleMouseLeave = (event: MouseEvent) => {
        // handle the mouseleave event
    }
}



function clear(context: CanvasRenderingContext2D) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}
function draw (circle: Circle, context: CanvasRenderingContext2D)  {
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

    // A function to draw all circles on the canvas
    const drawAllCircles = () => {
        const context = canvasRef.current?.getContext('2d');
        if (context) {
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            circles.forEach(circle => {
                circle.draw();
            });
        }
    }

    useEffect(() => {
        if (canvasRef.current) {
            const colors = ['red', 'green', 'blue'];
            const newCircles = colors.map((color, index) => {
                const circle = new Circle(canvasRef, {x:100 + index * 60, y:100}, 50, color);
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
    useEffect(drawAllCircles, [circles]);


    
    
    return <canvas id="canvas" ref={canvasRef} className={styles.canvas}>
    </canvas>
}