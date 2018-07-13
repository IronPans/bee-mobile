import * as React from 'react';
import * as classNames from 'classnames';
import {setTransitionDuration} from '../common/Dom';
import {TabsProps, TabsState} from './PropsType';

export default class Tabs extends React.PureComponent<TabsProps, TabsState> {
    static fnName: string = 'Tabs';
    static defaultProps: TabsProps = {
        activeIndex: 0,
        prefixCls: 'bm-Tabs',
        scrollable: false,
        position: 'top',
    };

    state: TabsState = {
        activeIndex: 0,
        x: 0,
        y: 0,
    };
    tabNode: any;
    dragging: boolean;
    touches: any = {};
    isMobile: boolean;

    componentDidMount() {
        this.isMobile = 'ontouchstart' in document;
        if (this.tabNode) {
            this.forceUpdate();
        }
    }

    componentWillReceiveProps(nextProps: TabsProps) {
        if ('activeIndex' in nextProps && this.props.activeIndex !== nextProps.activeIndex) {
            this.setState({
                activeIndex: nextProps.activeIndex!,
            }, () => {
                if (nextProps.centerMode) {
                    const {width, height, left, top} = this.getLineOffset();
                    const wrapperNode = this.tabNode.firstElementChild;
                    setTransitionDuration(wrapperNode, 300);
                    if (nextProps.position === 'left' || nextProps.position === 'right') {
                        const navHeight = this.tabNode.offsetHeight;
                        const wrapperHeight = wrapperNode.offsetHeight;
                        const offsetY = top + height / 2;
                        let diffHeight = offsetY - navHeight / 2;
                        if (diffHeight > 0) {
                            if ((wrapperHeight - top - height) <= navHeight / 2) {
                                diffHeight = wrapperHeight - navHeight;
                            }
                            this.setState({
                                y: -diffHeight,
                            });
                        }
                    } else {
                        const navWidth = this.tabNode.offsetWidth;
                        const wrapperWidth = wrapperNode.offsetWidth;
                        const offsetX = left + width / 2;
                        let diffWidth = offsetX - navWidth / 2;
                        if (diffWidth > 0) {
                            if ((wrapperWidth - left - width) <= navWidth / 2) {
                                diffWidth = wrapperWidth - navWidth;
                            }
                        } else {
                            diffWidth = 0;
                        }
                        this.setState({
                            x: -diffWidth,
                        });
                    }
                }
            });
        }
    }

    componentWillUnmount() {
        document.removeEventListener(this.isMobile ? 'touchmove' : 'mousemove', this.swipeMove);
        document.removeEventListener(this.isMobile ? 'touchend' : 'mouseup', this.swipeEnd);
    }

    handleChange = (activeIndex: number) => {
        this.setState({
            activeIndex,
        });
        if (this.props.onChange) {
            this.props.onChange(activeIndex);
        }
    }

    getLineOffset = () => {
        const index = this.state.activeIndex!;
        let width = 0, height = 0, left = 0, top = 0;
        if (this.tabNode) {
            const tabs = this.tabNode.querySelectorAll('.bm-Tab');
            for (let i = 0; i < tabs.length; i++) {
                if (i < index) {
                    left += tabs[i].offsetWidth;
                    top += tabs[i].offsetHeight;
                }
                if (i === index) {
                    width = tabs[i].offsetWidth;
                    height = tabs[i].offsetHeight;
                }
            }
        }
        return {
            width, left, height, top,
        };
    }

    getRef = (node: any) => {
        if (!node) {
            return;
        }
        this.tabNode = node;
        if (this.props.activeIndex! > 0) {
            this.setState({
                activeIndex: this.props.activeIndex!,
            });
        }
    }

    getPoint(e: any) {
        const touchEvent = this.isMobile ? e.changedTouches[0] : e;
        return {
            x: touchEvent.pageX || touchEvent.clientX,
            y: touchEvent.pageY || touchEvent.clientY,
        };
    }

    swipeStart = (event: any) => {
        const wrapperNode = this.tabNode.firstElementChild;
        this.touches.moveWith = wrapperNode.offsetWidth - this.tabNode.offsetWidth;
        this.touches.moveHeight = wrapperNode.offsetHeight - this.tabNode.offsetHeight;
        if (this.props.scrollable && this.touches.moveWith > 0) {
            setTransitionDuration(this.tabNode.firstElementChild, 0);
            event.stopPropagation();
            const {x, y} = this.getPoint(event);
            this.dragging = true;
            this.touches.startX = x;
            this.touches.startY = y;
            document.addEventListener(this.isMobile ? 'touchmove' : 'mousemove', this.swipeMove);
            document.addEventListener(this.isMobile ? 'touchend' : 'mouseup', this.swipeEnd);
        }
    }

    swipeMove = (event: any) => {
        event.stopPropagation();
        if (this.dragging) {
            const {x, y} = this.getPoint(event);
            const diffX = x - this.touches.startX + this.state.x!;
            const diffY = y - this.touches.startY + this.state.y!;
            this.setState({
                x: Math.max(Math.min(0, diffX), -this.touches.moveWith),
                y: Math.max(Math.min(0, diffY), -this.touches.moveHeight),
            });
            this.touches.startX = x;
            this.touches.startY = y;
        }
    }

    swipeEnd = (event: any) => {
        event.stopPropagation();
        this.dragging = false;
        document.removeEventListener(this.isMobile ? 'touchmove' : 'mousemove', this.swipeMove);
        document.removeEventListener(this.isMobile ? 'touchend' : 'mouseup', this.swipeEnd);
    }

    render() {
        const {children: childrenProp, className, prefixCls, position} = this.props;
        const styleClass = classNames(
            prefixCls,
            `${prefixCls}-${position}`,
            className,
        );
        let childIndex = -1;
        const children = React.Children.map(childrenProp, (child: React.ReactElement<any>) => {
            if (!React.isValidElement(child)) {
                return null;
            }
            childIndex += 1;
            const props: any = {...child.props};
            return React.cloneElement(child as React.ReactElement<any>, {
                index: childIndex,
                disabled: props.disabled,
                onChange: this.handleChange,
                activeIndex: this.state.activeIndex!,
            });
        });
        const wrapperStyle = {
            transform: `translate3d(${this.state.x}px, 0, 0)`,
        };
        const lineRect = this.getLineOffset();
        let lineStyle: any;
        if (position === 'left' || position === 'right') {
            lineStyle = {
                height: lineRect.height,
                top: lineRect.top,
            };
        } else {
            lineStyle = {
                width: lineRect.width,
                left: lineRect.left,
            };
        }
        return (
            <div className={styleClass}>
                <div
                    className={`${prefixCls}-nav`}
                    ref={this.getRef}
                    onMouseDown={this.isMobile ? () => false : this.swipeStart}
                    onTouchStart={this.isMobile ? this.swipeStart : () => false}
                >
                    <div className={`${prefixCls}-nav-wrapper`} style={wrapperStyle}>
                        {children}
                        <div className={`${prefixCls}-indicator`} style={lineStyle}/>
                    </div>
                </div>
            </div>
        );
    }
}
