import * as React from 'react';
import * as classNames from 'classnames';
import {EASINGS} from '../common/Easing';
import {getScrollParent, listen} from '../common/Dom';
import {getOtherProperties, getSize} from '../common/Utils';
import {BackTopProps, BackTopState} from './PropsType';

export default class BackTop extends React.PureComponent<BackTopProps, BackTopState> {
    static defaultProps: BackTopProps = {
        destination: 0,
        duration: 200,
        right: 30,
        bottom: 30,
        easing: 'linear',
        prefixCls: 'bm-BackTop',
    };
    startTime: any;
    scrollNode: any;
    startY: number = 0;
    node: any;
    scrollListener: any;
    state = {
        visible: false,
    };
    cancelRequestAnimate: any;

    componentDidMount() {
        this.scrollListener = listen(this.scrollNode, 'scroll', (e) => {
            const scrollTop = e.target.scrollTop ||
                document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > this.props.destination!) {
                this.setState({
                    visible: true,
                });
            } else {
                this.setState({
                    visible: false,
                });
            }
        });
    }

    componentWillUnmount() {
        if (this.scrollListener) {
            this.scrollListener();
            this.scrollListener = null;
        }
    }

    scroll = (e) => {
        if (this.cancelRequestAnimate) {
            window.cancelAnimationFrame(this.cancelRequestAnimate);
            this.cancelRequestAnimate = null;
        }
        const {destination, duration, easing, onScrollEnd}: any = this.props;
        const now = Date.now();
        const time = Math.min(1, (now - this.startTime) / duration);
        const timeFunction = EASINGS[easing](time);
        const scrollTop = timeFunction * (destination - this.startY) + this.startY;
        if (e === window) {
            window.scrollTo(0, scrollTop);
        } else {
            e.scrollTop = scrollTop;
        }
        if (scrollTop === destination) {
            if (this.cancelRequestAnimate) {
                window.cancelAnimationFrame(this.cancelRequestAnimate);
                this.cancelRequestAnimate = null;
            }
            if (onScrollEnd) {
                onScrollEnd();
            }
            return;
        }
        this.cancelRequestAnimate = window.requestAnimationFrame(this.scroll.bind(this, e));
    }

    handleClick = () => {
        this.startTime = Date.now();
        this.startY = this.scrollNode.scrollTop;
        if (this.scrollNode === window) {
            this.startY = document.documentElement.scrollTop || document.body.scrollTop;
        }
        this.scroll(this.scrollNode);
    }

    getRef = (node: any) => {
        this.node = node;
        const {scrollNode} = this.props;
        if (scrollNode) {
            this.scrollNode = scrollNode;
        } else {
            this.scrollNode = getScrollParent(this.node);
        }
        if (this.scrollNode.nodeType === 9) {
            this.scrollNode = window;
        }
    }

    render() {
        const {className, children, prefixCls, bottom, right, ...other} = this.props;
        const styleClass = classNames(
            prefixCls,
            className,
        );
        const styles = {
            right: getSize(right),
            bottom: getSize(bottom),
            display: this.state.visible ? 'block' : 'none',
        };
        const otherProps = getOtherProperties(other, ['destination', 'duration', 'easing', 'scrollNode', 'onScrollEnd']);
        return (
            <div className={styleClass} style={styles} ref={this.getRef} {...otherProps} onClick={this.handleClick}>
                {children}
            </div>
        );
    }
}
