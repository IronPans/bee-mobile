import * as React from 'react';
import * as classNames from 'classnames';
import Circle from './Circle';
import {getElementLeft, getElementTop} from '../common/RectUtils';
import {LockerProps, LockerState} from './PropsType';

export default class Locker extends React.PureComponent<LockerProps, LockerState> {
    static defaultProps = {
        prefixCls: 'bm-Locker',
        width: 300,
        height: 300,
        fillStyle: '#2196f3',
        strokeStyle: 'rgba(0,0,0,.12)',
    };

    state: LockerState = {
        x: 0,
        y: 0,
    };
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    dragging: boolean;
    isMobile: boolean;
    circles: Array<Circle> = [];
    value: Array<number> = [];
    requestAnimationFrameId: any;
    lastPoint: any;

    constructor(props: LockerProps) {
        super(props);
        this.isMobile = 'ontouchstart' in document;
    }

    componentDidMount() {
        const {width, height}: any = this.props;
        for (let i = 0; i < 9; i++) {
            const w = width / 3,
                h = height / 3,
                r = Math.min(w, h) / 5 * 3;
            const row = Math.floor(i / 3), col = i % 3;
            this.circles.push(new Circle(w / 2 + w * col, h / 2 + h * row, r / 2, false));
        }
        this.drawLocker();
    }

    componentWillUnmount() {
        if (this.requestAnimationFrameId) {
            cancelAnimationFrame(this.requestAnimationFrameId);
            this.requestAnimationFrameId = null;
        }
    }

    drawCircle({cx, cy, r, selected}: any) {
        const {fillStyle, strokeStyle}: any = this.props;
        if (this.ctx) {
            this.ctx.save();
            this.ctx.strokeStyle = strokeStyle;
            this.ctx.beginPath();
            this.ctx.fillStyle = '#fff';
            this.ctx.arc(cx, cy, r, 0, 2 * Math.PI, true);
            this.ctx.fill();
            this.ctx.beginPath();
            this.ctx.arc(cx, cy, r, 0, 2 * Math.PI, true);
            this.ctx.stroke();
            if (selected) {
                this.ctx.fillStyle = fillStyle;
                this.ctx.beginPath();
                this.ctx.arc(cx, cy, r / 2, 0, 2 * Math.PI, true);
                this.ctx.fill();
            }
            this.ctx.restore();
        }
    }

    drawLine({x1, y1, x2, y2}: any) {
        if (this.ctx) {
            this.ctx.save();
            this.ctx.strokeStyle = this.props.fillStyle!;
            this.ctx.beginPath();
            this.ctx.moveTo(x1, y1);
            this.ctx.lineTo(x2, y2);
            this.ctx.stroke();
            this.ctx.restore();
        }
    }

    drawLocker() {
        const {width, height}: any = this.props;
        this.ctx.clearRect(0, 0, width, height);
        this.ctx.fillStyle = '#fff';
        this.ctx.fillRect(0, 0, width, height);
        let num = 0;
        for (const index of this.value) {
            const nextCircle: any = this.circles[this.value[num + 1]];
            const circle = this.circles[index];
            if (nextCircle) {
                this.drawLine({
                    x1: circle.cx,
                    y1: circle.cy,
                    x2: nextCircle.cx,
                    y2: nextCircle.cy,
                });
            }
            num++;
        }
        if (this.value.length > 0) {
            const circle = this.circles[this.value[this.value.length - 1]];
            this.drawLine({
                x1: circle.cx,
                y1: circle.cy,
                x2: this.lastPoint.x,
                y2: this.lastPoint.y,
            });
        }
        for (const circle of this.circles) {
            this.drawCircle({...circle});
        }
        this.requestAnimationFrameId = requestAnimationFrame(() => {
            this.drawLocker();
        });
    }

    isPointSelect({x, y}: any) {
        let index = -1;
        let len = this.value.length;
        this.circles.forEach((circle: Circle, i: number) => {
            if (circle.cx + circle.r > x && circle.cx - circle.r < x &&
                circle.cy + circle.r > y && circle.cy - circle.r < y &&
                !circle.selected) {
                index = i;
                this.circles[i].selected = true;
                this.value.push(i);
            }
        });
        const selectedValue = [...this.value];
        while (len) {
            len--;
            const value = selectedValue[len], prevValue = selectedValue[len - 1];
            if (prevValue >= 0) {
                const row = Math.floor(value / 3), col = value % 3;
                const prevRow = Math.floor(prevValue / 3), prevCol = prevValue % 3;
                let newValue: any = -1;
                if (row === prevRow && Math.abs(col - prevCol) > 1) {
                    newValue = Math.max(value, prevValue) - 1;
                } else if (col === prevCol && Math.abs(row - prevRow) > 1) {
                    newValue = Math.max(value, prevValue) - 3;
                } else if (Math.abs(col - prevCol) > 1 && Math.abs(row - prevRow) > 1) {
                    newValue = 4;
                }
                if (newValue >= 0 && selectedValue.indexOf(newValue) === -1) {
                    selectedValue.splice(len, 0, newValue);
                    this.circles[newValue].selected = true;
                }
            }
        }
        if (this.value.length !== selectedValue.length) {
            this.value = selectedValue;
        }
        return index;
    }

    getPoint(event: any) {
        const touchEvent = this.isMobile ? event.changedTouches[0] : event;
        return {
            x: (touchEvent.pageX || touchEvent.clientX +
            (document.documentElement.scrollLeft || document.body.scrollLeft)) - getElementLeft(this.canvas),
            y: (touchEvent.pageY || touchEvent.clientY +
            (document.documentElement.scrollTop || document.body.scrollTop)) - getElementTop((this.canvas)),
        };
    }

    touchStart = (event: any) => {
        event.stopPropagation();
        this.dragging = true;
        this.lastPoint = this.getPoint(event);
        this.isPointSelect({...this.lastPoint});
        document.addEventListener(this.isMobile ? 'touchmove' : 'mousemove', this.touchMove);
        document.addEventListener(this.isMobile ? 'touchend' : 'mouseup', this.touchEnd);
    }

    touchMove = (event: any) => {
        event.stopPropagation();
        if (this.dragging) {
            this.lastPoint = this.getPoint(event);
            this.isPointSelect({...this.lastPoint});
        }
    }

    touchEnd = (event: any) => {
        event.stopPropagation();
        this.dragging = false;
        if (this.props.onDone) {
            (this.props.onDone as (event: any) => void)({
                points: [...this.value],
                clear: this.clear.bind(this),
                originalEvent: event,
            });
        }
        document.removeEventListener(this.isMobile ? 'touchmove' : 'mousemove', this.touchMove);
        document.removeEventListener(this.isMobile ? 'touchend' : 'mouseup', this.touchEnd);
    }

    getCanvasRef = (node: any) => {
        this.canvas = node;
        if (node) {
            this.ctx = this.canvas.getContext('2d')!;
        }
    }

    clear() {
        this.value = [];
        this.circles.forEach((circle: Circle) => {
            circle.selected = false;
        });
    }

    render() {
        const {className, prefixCls, width, height}: any = this.props;
        const styleClass = classNames(
            prefixCls, className,
        );
        const styles = {
            width, height,
        };
        const cWidth: any = width! - 2, cHeight: any = height! - 2;
        return (
            <div className={styleClass} style={styles}>
                <canvas ref={this.getCanvasRef} width={cWidth} height={cHeight}/>
                <div
                    className={`${prefixCls}-mask`}
                    onMouseDown={this.isMobile ? () => false : this.touchStart}
                    onTouchStart={this.isMobile ? this.touchStart : () => false}
                />
            </div>
        );
    }
}
