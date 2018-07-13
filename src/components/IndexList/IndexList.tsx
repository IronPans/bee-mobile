import * as React from 'react';
import * as classNames from 'classnames';
import {hasClass} from '../common/Dom';
import {IndexListProps, IndexListState} from './PropsType';

export default class IndexList extends React.Component<IndexListProps, IndexListState> {
    static defaultProps: IndexListProps = {
        prefixCls: 'bm-IndexList',
    };
    letters: string = 'ABCDEFGHIJKLMNOPQRSUVWXYZ';
    navNode: any;
    isMobile: boolean;
    dragging: boolean;
    touches: any = {
        startY: 0,
    };
    scrollNode: any;
    state: IndexListState = {
        scrollTop: 0,
    };

    constructor(props: IndexListProps) {
        super(props);
        this.isMobile = 'ontouchstart' in document;
    }

    splitLetter() {
        return this.letters.split('');
    }

    getRef = (node: any) => {
        this.navNode = node;
    }

    getScrollRef = (node: any) => {
        this.scrollNode = node;
    }

    getPoint(e: any) {
        const touchEvent = this.isMobile ? e.changedTouches[0] : e;
        return {
            x: touchEvent.pageX || touchEvent.clientX,
            y: touchEvent.pageY || touchEvent.clientY,
        };
    }

    getOffsetTop(element: any, condition: (event: any) => void) {
        let actualTop = element.offsetTop;
        let current = element.offsetParent;
        while (current !== null && condition(current)) {
            actualTop += current.offsetTop;
            current = current.offsetParent;
        }
        return actualTop;
    }

    scrollTo(event: any) {
        let index = '';
        const {prefixCls}: any = this.props;
        if (hasClass(event.target, `${prefixCls}-nav-item`)) {
            index = event.target.getAttribute('data-index');
            this.setState({
                current: index,
            });
            const target = this.scrollNode.querySelector(`[data-index=${index}]`);
            let top = 0;
            if (target) {
                top = this.getOffsetTop(target, (parent: any) => {
                    return !hasClass(parent, `${prefixCls}-content`);
                });
                this.scrollNode.scrollTop = top;
            }
        }
    }

    swipeStart = (event: any) => {
        const scrollHeight = this.scrollNode.scrollHeight - this.scrollNode.offsetHeight;
        if (scrollHeight > 0) {
            const {y} = this.getPoint(event);
            this.dragging = true;
            this.scrollTo(event);
            this.touches.startY = y;
            document.addEventListener(this.isMobile ? 'touchmove' : 'mousemove', this.swipeMove);
            document.addEventListener(this.isMobile ? 'touchend' : 'mouseup', this.swipeEnd);
        }
    }

    swipeMove = (event: any) => {
        event.stopPropagation();
        if (this.dragging) {
            this.scrollTo(event);
            const {y} = this.getPoint(event);
            const diffY = y - this.touches.startY + this.state.scrollTop!;
            this.setState({
                scrollTop: Math.max(Math.min(0, diffY), -this.touches.moveHeight),
            });
            this.touches.startY = y;
        }
    }

    swipeEnd = (event: any) => {
        event.stopPropagation();
        this.dragging = false;
        this.setState({
            current: this.state.current!,
        });
        document.removeEventListener(this.isMobile ? 'touchmove' : 'mousemove', this.swipeMove);
        document.removeEventListener(this.isMobile ? 'touchend' : 'mouseup', this.swipeEnd);
    }

    render() {
        const {children, className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className,
        );
        return (
            <div className={styleClass}>
                <div className={`${prefixCls}-content`} ref={this.getScrollRef}>
                    <ul>{children}</ul>
                </div>
                <div
                    className={`${prefixCls}-nav`}
                    ref={this.getRef}
                    onMouseDown={this.isMobile ? () => false : this.swipeStart}
                    onTouchStart={this.isMobile ? this.swipeStart : () => false}
                >
                    <ul>
                        {
                            this.splitLetter().map((letter: string, index: number) => {
                                return (
                                    <li
                                        className={`${prefixCls}-nav-item`}
                                        data-index={letter}
                                        key={index}
                                    >
                                        {letter}
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                {this.dragging ? (<span className={`${prefixCls}-current`}>{this.state.current}</span>) : null}
            </div>
        );
    }
}
