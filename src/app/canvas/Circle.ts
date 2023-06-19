/**
 * Circle class for handling canvas based circles.
 */
export class Circle {
    canvas: React.RefObject<HTMLCanvasElement>; // Reference to canvas element
    context: CanvasRenderingContext2D | null; // Canvas rendering context
    center: { x: number, y: number }; // Center of the circle
    radius: number; // Radius of the circle
    devicePixelRatio: number; // Device pixel ratio
    color: string; // Color of the circle

    /**
     * Constructor for Circle class.
     * 
     * @param {React.RefObject<HTMLCanvasElement>} canvas - Reference to the canvas element
     * @param {{x: number, y: number}} center - Center point of the circle
     * @param {number} radius - Radius of the circle
     * @param {string} color - Color of the circle
     */
    constructor(
        canvas: React.RefObject<HTMLCanvasElement>,
        center: { x: number, y: number } = { x: 50, y: 50 },
        radius: number = 50,
        color: string = 'green',
    ) {
        this.canvas = canvas;
        this.context = this.canvas.current ? this.canvas.current.getContext('2d') : null; // Set context
        this.center = center // Set center
        this.radius = radius // Set radius
        this.devicePixelRatio = window.devicePixelRatio || 1; // Set device pixel ratio
        this.color = color; // Set color

        // If context exists and canvas current is defined, set canvas width and height 
        // based on devicePixelRatio and scale the context accordingly
        if (this.context && this.canvas.current) {
            const canvas = this.canvas.current;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * this.devicePixelRatio;
            canvas.height = rect.height * this.devicePixelRatio;
            this.context.scale(this.devicePixelRatio, this.devicePixelRatio);
        }
    }
}
