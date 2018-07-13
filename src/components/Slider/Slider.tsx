import * as React from 'react';
import * as classNames from 'classnames';
import {getOtherProperties, getTouchEvent} from '../common/Utils';
import {SliderProps, SliderState} from './PropsType';

export default class Slider extends React.PureComponent<SliderProps, SliderState> {
    static defaultProps: SliderProps = {
        disabled: false,
        min: 0,
        max: 100,
        prefixCls: 'bm-Slider',
        step: 1,
        value: 0,
        vertical: false,
    };
    state: SliderState = {
        isDragging: false,
        value: 0,
    };
    maxPercent: number = 100;
    slider: HTMLDivElement;
    touch: any = getTouchEvent();
    track: HTMLDivElement;
    thumb: HTMLDivElement;
    startOffset: any;
    currentOffset: any;

    componentDidMount() {
        this.pageInit();
    }

    pageInit() {
        const {min, max, value} = this.props;
        const percent = (value! - min!) / (max! - min!);
        const current = Math.floor(percent * this.slider.offsetWidth);
        this.currentOffset = {
            x: 0,
            y: this.slider.offsetHeight - this.thumb.offsetHeight,
        };
        if (!isNaN(current)) {
            this.setValue(current);
        }
    }

    getPoint(event: any) {
        event = event || window.event;
        const touchEvent = this.touch.mobile ? event.changedTouches[0] : event;
        return {
            pageX: touchEvent.pageX,
            pageY: touchEvent.pageY,
        };
    }

    setValue(value: any) {
        const {max, min, step, vertical} = this.props;
        const size: number = vertical ?
            (this.slider.offsetHeight - this.thumb.offsetHeight / 2) : this.slider.offsetWidth - this.thumb.offsetWidth / 2;
        let offset = vertical ? (this.currentOffset.y + value * step!) : (this.currentOffset.x + value * step!);
        if (offset >= size) {
            offset = size;
        } else if (offset < 0) {
            offset = 0;
        }
        const percent = offset / size * 100;
        const currentValue = Math.ceil((max! - min!) * percent / 100) + min!;
        if (vertical) {
            this.thumb.style.top = offset + 'px';
            this.track.style.top = percent + '%';
        } else {
            this.thumb.style.left = offset + 'px';
            this.track.style.right = (this.maxPercent - percent) + '%';
        }
        this.currentOffset = {
            x: offset,
            y: offset,
        };
        this.setState({
            value: currentValue,
        });
        if (this.props.onChange) {
            (this.props.onChange as (value: any) => void)(currentValue);
        }
    }

    getValue(event: any) {
        const point = this.getPoint(event);
        this.setValue(this.props.vertical! ?
            (point.pageY - this.startOffset.pageY) : (point.pageX - this.startOffset.pageX));
    }

    onTouchStart = (event: any) => {
        if (event.button || this.props.disabled) {
            return;
        }
        const point = this.getPoint(event);
        this.startOffset = {
            pageX: point.pageX,
            pageY: point.pageY,
        };
        this.setState({
            isDragging: true,
        });
        document.addEventListener(this.touch.touchmove, this.onTouchMove);
        document.addEventListener(this.touch.touchend, this.onTouchEnd);
    }

    onTouchMove = (event: any) => {
        if (this.state.isDragging) {
            const point = this.getPoint(event);
            this.getValue(event);
            this.startOffset = {
                pageX: point.pageX,
                pageY: point.pageY,
            };
        }
    }

    onTouchEnd = () => {
        document.removeEventListener(this.touch.touchmove, this.onTouchMove);
        document.removeEventListener(this.touch.touchend, this.onTouchEnd);
        this.setState({
            isDragging: false,
        });
    }

    getTrackRef = (node: any) => {
        if (node) {
            this.track = node;
            this.slider = node.parentNode;
            this.thumb = node.nextElementSibling;
        }
    }

    render() {
        const {className, end, prefixCls, disabled, start, vertical, ...other} = this.props;
        const isMobile = this.touch.mobile;
        const styleClass = classNames(
            prefixCls,
            {
                [`${prefixCls}-vertical`]: vertical,
                [`${prefixCls}-disabled`]: disabled,
            },
            className,
        );
        const otherProps = getOtherProperties(other, ['children', 'handleSize', 'onChange']);
        const activeBarClass = classNames(
            `${prefixCls}-bar`, `${prefixCls}-bar-active`,
        );
        const knobClass = classNames({
            [`${prefixCls}-knob`]: true,
            active: this.state.isDragging!,
        });
        return (
            <div className={styleClass} {...otherProps}>
                {start ? (<div className={`${prefixCls}-start`}>{start}</div>) : null}
                <div
                    className={`${prefixCls}-wrapper`}
                    onMouseDown={isMobile ? () => false : this.onTouchStart}
                    onTouchStart={isMobile ? this.onTouchStart : () => false}
                >
                    <div className={`${prefixCls}-bar`}/>
                    <div className={activeBarClass} ref={this.getTrackRef}/>
                    <div className={`${prefixCls}-knob-handle`}>
                        <div className={knobClass}/>
                    </div>
                </div>
                {end ? (<div className={`${prefixCls}-end`}>{end}</div>) : null}
            </div>
        );
    }
}
