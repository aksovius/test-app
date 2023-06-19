import { Circle } from "./Circle";

/**
 * Clears the canvas.
 *
 * @param {CanvasRenderingContext2D} context - The canvas rendering context.
 */
export function clearCanvas(context: CanvasRenderingContext2D) {
    // Clears the entire canvas area
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}

/**
 * Draws a circle on the canvas.
 *
 * @param {Circle} circle - The circle object to be drawn.
 * @param {CanvasRenderingContext2D} context - The canvas rendering context.
 */
export function drawCircle(circle: Circle, context: CanvasRenderingContext2D) {
    // Begins a new path
    context.beginPath();

    // Draws the arc for the circle
    context.arc(circle.center.x, circle.center.y, circle.radius, 0, 2 * Math.PI, false);

    // Sets the fill style and fills the circle
    context.fillStyle = circle.color;
    context.fill();

    // Sets the line width and stroke style, then applies the stroke
    context.lineWidth = 1;
    context.strokeStyle = '#003300';
    context.stroke();
}
