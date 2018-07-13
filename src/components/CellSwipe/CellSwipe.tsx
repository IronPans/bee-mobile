import * as React from 'react';
import * as classNames from 'classnames';
import {CellSwipeProps, CellSwipeState} from './PropsType';
import {getTouchEvent} from '../common/Utils';

export default class CellSwipe extends React.PureComponent<CellSwipeProps, CellSwipeState> {
    static defaultProps = {
        prefixCls: 'bm-CellSwipe',
    };
    leftSlotElem: any;
    rightSlotElem: any;
    pageX: number;
    isDragging: boolean;
    wrapperStyle: any = {
        transitionDuration: 0,
    };

    state = {
        left: 0,
    };

    touchEvent = getTouchEvent();

    componentWillUnmount() {
        this.unBindDocumentlistener();
    }

    swipeStart = (e) => {
        this.isDragging = true;
        this.wrapperStyle = {
            ...this.wrapperStyle,
            transitionDuration: 0,
        };
        this.pageX = e.changedTouches ? e.changedTouches[0].pageX : e.pageX;
        document.body.addEventListener(this.touchEvent.touchmove, this.swipeMove);
        document.body.addEventListener(this.touchEvent.touchend, this.swipeEnd);
    }

    swipeMove = (e) => {
        if (this.isDragging) {
            const rightWidth = this.rightSlotElem.offsetWidth,
                leftWidth = this.leftSlotElem.offsetWidth;
            const pageX = e.changedTouches ? e.changedTouches[0].pageX : e.pageX;
            const diffX = pageX - this.pageX;
            let {left}: any = this.state;
            left = left + diffX;
            if (left <= 0 && Math.abs(left) >= rightWidth) {
                left = -rightWidth;
            } else if (left > 0 && left >= leftWidth) {
                left = leftWidth;
            }
            this.pageX = pageX;
            this.setState({
                left,
            });
        }
    }

    swipeEnd = () => {
        if (!this.isDragging) {
            return;
        }
        const rightWidth = this.rightSlotElem.offsetWidth,
            leftWidth = this.leftSlotElem.offsetWidth;
        const {left}: any = this.state;
        this.wrapperStyle = {
            ...this.wrapperStyle,
            transitionDuration: '300ms',
        };
        const halfWidth = (left < 0 ? rightWidth : leftWidth) / 2;
        if (Math.abs(left) > halfWidth && (left < 0 || left > 0)) {
            this.setState({
                left: left < 0 ? -rightWidth : leftWidth,
            });
        } else if (Math.abs(left) < halfWidth) {
            this.setState({
                left: 0,
            });
        }
        this.isDragging = false;
        this.unBindDocumentlistener();
    }

    getLeftSlotRef = (node) => {
        this.leftSlotElem = node;
    }

    getRightSlotRef = (node) => {
        this.rightSlotElem = node;
    }

    close = () => {
        this.wrapperStyle = {
            ...this.wrapperStyle,
            transitionDuration: '300ms',
        };
        this.setState({
            left: 0,
        });
    }

    unBindDocumentlistener() {
        document.body.removeEventListener(this.touchEvent.touchmove, this.swipeMove);
        document.body.removeEventListener(this.touchEvent.touchend, this.swipeEnd);
    }

    render() {
        const {className, children, leftSlot, rightSlot, prefixCls, to} = this.props;

        const styleClass = classNames(
            prefixCls,
            className,
        );
        const {left} = this.state;
        this.wrapperStyle = {
            ...this.wrapperStyle,
            transform: `translate3d(${left}px, 0, 0)`,
        };
        const ComponentProp = to ? 'a' : 'div';
        return (
            <div className={styleClass}>
                <div
                    className={`${prefixCls}-wrapper`}
                    onTouchStart={this.touchEvent.mobile ? this.swipeStart : () => false}
                    onMouseDown={!this.touchEvent.mobile ? this.swipeStart : () => false}
                    style={this.wrapperStyle}
                >
                    <div className={`${prefixCls}-left`} ref={this.getLeftSlotRef}>
                        {leftSlot}
                    </div>
                    <ComponentProp className={`${prefixCls}-content`}>
                        {children}
                        {left ? <div className={`${prefixCls}-mask`} onClick={this.close}/> : null}
                    </ComponentProp>
                    <div className={`${prefixCls}-right`} ref={this.getRightSlotRef}>
                        {rightSlot}
                    </div>
                </div>
            </div>
        );
    }
}
