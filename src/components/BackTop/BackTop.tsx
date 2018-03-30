import * as React from 'react';
import * as classNames from 'classnames';
import {EASINGS} from '../common/Easing';
import {getScrollParent} from '../common/Dom';
import {getOtherProperties} from "../common/Utils";
import {BackTopProps} from './PropsType';

export default class BackTop extends React.PureComponent<BackTopProps, any> {
    static defaultProps: BackTopProps = {
        destination: 0,
        duration: 200,
        easing: 'linear',
        prefixCls: 'bm-BackTop'
    };
    startTime: any;
    scrollNode: any;
    startY: number = 0;
    node: any;

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
        const {scrollNode} = this.props;
        if (scrollNode) {
            this.scrollNode = scrollNode;
        } else {
            this.scrollNode = getScrollParent(this.node);
        }
        this.startTime = Date.now();
        this.startY = this.scrollNode.scrollTop;
        this.scroll();
    };

    getRef = (node: any) => {
        this.node = node;
    };

    render() {
        const {className, children, prefixCls, ...other} = this.props;
        const styleClass = classNames(
            prefixCls,
            className
        );
        const otherProps = getOtherProperties(other, ['destination', 'duration', 'easing', 'scrollNode', 'onScrollEnd']);
        return (
            <div className={styleClass} ref={this.getRef} {...otherProps} onClick={this.handleClick}>
                {children}
            </div>
        );
    }
}