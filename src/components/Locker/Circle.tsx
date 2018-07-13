export default class Circle {
    cx: number;
    cy: number;
    r: number;
    selected: boolean;
    constructor(cx: number, cy: number, r: number, selected: boolean) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.selected = selected;
    }
}
