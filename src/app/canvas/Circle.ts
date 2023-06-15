export class Circle {
    canvas: React.RefObject<HTMLCanvasElement>;
    context: CanvasRenderingContext2D | null;
    center: { x: number, y: number }
    radius: number
    devicePixelRatio: number;
    color: string;
   
    constructor(
        canvas: React.RefObject<HTMLCanvasElement>,
        center: { x: number, y: number } = { x: 50, y: 50 },
        radius: number = 50,
        color: string = 'green',
    ) {
        this.canvas = canvas;
        this.context = this.canvas.current ? this.canvas.current.getContext('2d') : null;
        this.center = center
        this.radius = radius
        this.devicePixelRatio = window.devicePixelRatio || 1;
        this.color = color;
       
        if (this.context && this.canvas.current) {
            const canvas = this.canvas.current;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * this.devicePixelRatio;
            canvas.height = rect.height * this.devicePixelRatio;
            this.context.scale(this.devicePixelRatio, this.devicePixelRatio);
        }
    }


}