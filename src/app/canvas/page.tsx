'use client'
import styles from './canvas.module.css'
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { clearCanvas, drawCircle } from './tools';
import { Circle } from './Circle';

export default function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [circles, setCircles] = useState<Circle[]>([]);

    const drawAllCircles = useCallback((data = circles) => {
        const context = canvasRef.current?.getContext('2d');
        if (context) {
            clearCanvas(context)
            data.forEach(circle => {
                drawCircle(circle, context);
            });
        }
    }, [circles])

    // Initial render
    useEffect(() => {
        if (canvasRef.current) {
            const colors = ['red', 'green', 'blue'];
            const newCircles = colors.map((color, index) => {
                const circle = new Circle(canvasRef, { x: 100 + index * 60, y: 100 }, 50, color);
                return circle;
            });
            drawAllCircles(newCircles);
            setCircles(newCircles);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Event listeners
    useEffect(() => {
        let selected: Circle | null = null;
        const handleMouseDown = (event: MouseEvent) => {
            console.log(`Mouse down at ${event.clientX}, ${event.clientY}`);
            let smallestDistance = Infinity;
            const x: number = event.offsetX;
            const y: number = event.offsetY
            circles.forEach(circle => {
                const distance: number = Math.hypot(circle.center.x - x, circle.center.y - y);
                if (distance < smallestDistance && distance < circle.radius) {
                    smallestDistance = distance;
                    selected = circle;
                }
            })
        }

        const handleMouseMove = (event: MouseEvent,) => {
            if (selected) {
                selected.center.x = event.offsetX;
                selected.center.y = event.offsetY;
                drawAllCircles();

            }
        }
        const handleMouseUp = () => {
            selected = null;
        }
        const canvas = canvasRef.current;  // React refs are mutable and the value could have changed by the time the cleanup function runs.
        // Add event listeners
        if (canvas) {
            canvas.addEventListener('mousedown', handleMouseDown);
            canvas.addEventListener('mouseup', handleMouseUp);
            canvas.addEventListener('mousemove', handleMouseMove);

        }
        // Cleanup
        return () => {
            if (canvas) {
                canvas.removeEventListener('mousedown', handleMouseDown);
                canvas.removeEventListener('mouseup', handleMouseUp);
                canvas.removeEventListener('mousemove', handleMouseMove);
            }
        }
    }, [circles, drawAllCircles])

    return <canvas id="canvas" ref={canvasRef} className={styles.canvas}>
    </canvas>
}