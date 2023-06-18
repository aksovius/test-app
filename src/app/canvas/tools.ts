import { Circle } from "./Circle";

export function clearCanvas(context: CanvasRenderingContext2D) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}
export function drawCircle(circle: Circle, context: CanvasRenderingContext2D) {
    context.beginPath();
    context.arc(circle.center.x, circle.center.y, circle.radius, 0, 2 * Math.PI, false);
    context.fillStyle = circle.color;
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = '#003300';
    context.stroke();
}