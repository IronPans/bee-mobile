import * as React from 'react';
import * as classNames from 'classnames';
import {getOtherProperties, getRect, getTouchEvent} from '../common/Utils';
import {addClass, css} from '../common/Dom';
import {RippleProps, RippleState} from './PropsType';

export default class Ripple extends React.PureComponent<RippleProps, RippleState> {
    static defaultProps: RippleProps = {
        centerMode: false,
        hidden: true,
        prefixCls: 'bm-Ripple',
    };

    touchEvent: any;
    rippleNode: any;
    now: any = new Date();
    seed: number = 0;
    state: RippleState = {
        children: [],
    };

    constructor(props: RippleProps) {
        super(props);
        this.touchEvent = getTouchEvent();
    }

    componentDidMount() {
        if (this.rippleNode) {
            this.rippleNode.parentNode.addEventListener(this.touchEvent.touchstart, this.handleTouchStart);
        }
    }

    componentWillUnmount() {
        if (this.rippleNode) {
            this.rippleNode.parentNode.removeEventListener(this.touchEvent.touchstart, this.handleTouchStart);
        }
        this.rippleNode = null;
        this.touchEvent = null;
    }

    getUuid = () => {
        return `Ripple-${this.now}_${this.seed++}`;
    }

    getRef = (node: any) => {
        this.rippleNode = node;
    }

    getPoint(event: any) {
        event = event || window.event;
        return this.touchEvent.mobile ? event.changedTouches[0] : event;
    }

    ripple = (event: any, element: any) => {
        const touchEvent = this.getPoint(event);
        const {centerMode, prefixCls, size: sizeProps} = this.props;
        let x = touchEvent.pageX ||
            document.documentElement.scrollLeft + document.body.scrollLeft + touchEvent.clientX;
        let y = touchEvent.pageY ||
            document.documentElement.scrollTop + document.body.scrollTop + touchEvent.clientY;
        const parentNode = this.rippleNode.parentNode;
        const {offsetWidth, offsetHeight} = parentNode;
        const scale = sizeProps === 'sm' ? 2 : 1;
        const size = Math.max(offsetWidth, offsetHeight) * 2;
        const rect = getRect(parentNode);
        if (!centerMode) {
            x = x - rect.left - size / 2;
            y = y - rect.top - size / 2;
        } else {
            x = y = -size / 4;
        }
        if (sizeProps === 'sm') {
            x = y = 0;
        }
        css(element, {
            width: size / scale + 'px',
            height: size / scale + 'px',
            top: y + 'px',
            left: x + 'px',
        });
        addClass(element, `${prefixCls!}-Effect`);
    }

    handleTouchStart = (event: any) => {
        const children: any = [...this.state.children!];
        const {prefixCls} = this.props;
        children.push(this.getUuid());
        this.setState({children}, () => {
            const activeIndex = children.length - 1;
            const rippleChild = this.rippleNode.querySelectorAll(`.${prefixCls!}`);
            if (rippleChild[activeIndex]) {
                this.ripple(event, rippleChild[activeIndex]);
            }
        });
    }

    handleAnimationEnd = (key: string) => {
        const children: any = (this.state.children as Array<string>).filter((child) => {
            return key !== child;
        });
        this.setState({children});
    }

    render() {
        const {className, children, hidden, prefixCls, ...other} = this.props;
        const styleClass = classNames(
            prefixCls, className,
        );
        const groupClass = classNames(
            `${prefixCls}-group`,
            {
                [`${prefixCls}-hidden`]: hidden,
            },
        );
        const styles = {
            backgroundColor: this.props.rippleColor!,
        };
        const otherProps = getOtherProperties(other, ['centerMode']);
        return (
            <div className={groupClass} ref={this.getRef}>
                {
                    (this.state.children as Array<string>).map((child: any) => {
                        return (<div
                            key={child}
                            className={styleClass}
                            style={styles}
                            {...otherProps}
                            onAnimationEnd={this.handleAnimationEnd.bind(this, child)}
                        >
                            {children}
                        </div>);
                    })
                }
            </div>
        );
    }
}
