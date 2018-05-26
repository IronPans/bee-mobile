import * as React from 'react';
import * as classNames from 'classnames';
import {EASINGS} from '../common/Easing';
import {getScrollParent, listen} from '../common/Dom';
import {getOtherProperties, getSize} from "../common/Utils";
import {BackTopProps, BackTopState} from './PropsType';

export default class BackTop extends React.PureComponent<BackTopProps, BackTopState> {
    static defaultProps: BackTopProps = {
        destination: 0,
        duration: 200,
        right: 30,
        bottom: 30,
        easing: 'linear',
        prefixCls: 'bm-BackTop'
    };
    startTime: any;
    scrollNode: any;
    startY: number = 0;
    node: any;
    scrollListener: any;
    state = {
        visible: false
    }

    componentDidMount() {
        this.scrollListener = listen(this.scrollNode, 'scroll', (e) => {
            const scrollTop = e.target.scrollTop;
            if (scrollTop > this.props.destination!) {
                this.setState({
                    visible: true
                })
            } else {
                this.setState({
                    visible: false
                })
            }
        });
    }

    componentWillUnmount() {
        if (this.scrollListener) {
            this.scrollListener();
            this.scrollListener = null;
        }
    }

    scroll = () => {
        const {destination, duration, easing, onScrollEnd}: any = this.props;
        let now = Date.now();
        let time = Math.min(1, (now - this.startTime) / duration);
        let timeFunction = EASINGS[easing](time);
        this.scrollNode.scrollTop = timeFunction * (destination - this.startY) + this.startY;
        if (this.scrollNode.scrollTop === destination) {
            if (onScrollEnd) {
                onScrollEnd();
            }
            return;
        }
        window.requestAnimationFrame(this.scroll);
    };

    handleClick = () => {
        this.startTime = Date.now();
        this.startY = this.scrollNode.scrollTop;
        this.scroll();
    };

    getRef = (node: any) => {
        this.node = node;
        const {scrollNode} = this.props;
        if (scrollNode) {
            this.scrollNode = scrollNode;
        } else {
            this.scrollNode = getScrollParent(this.node);
        }
    };

    render() {
        const {className, children, prefixCls, bottom, right, ...other} = this.props;
        const styleClass = classNames(
            prefixCls,
            className
        );
        const styles = {
            right: getSize(right),
            bottom: getSize(bottom),
            display: this.state.visible ? 'block' : 'none'
        }
        const otherProps = getOtherProperties(other, ['destination', 'duration', 'easing', 'scrollNode', 'onScrollEnd']);
        return (
            <div className={styleClass} style={styles} ref={this.getRef} {...otherProps} onClick={this.handleClick}>
                {children}
            </div>
        );
    }
}