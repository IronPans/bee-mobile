import * as React from 'react';
import * as classNames from 'classnames';
import {getOtherProperties} from '../common/Utils';
import {ContentProps, ContentState} from './PropsType';

export default class Content extends React.PureComponent<ContentProps, ContentState> {
    static defaultProps: ContentProps = {
        infiniteScroll: false,
        prefixCls: 'bm-Content',
        pullToRefresh: false,
    };
    preloaderHeight: number;
    startXY: any;
    scrollElem: HTMLDivElement;
    state: ContentState = {
        loading: false,
        scrollTop: 0,
        transitions: false,
        x: 0,
        y: 0,
    };

    handleTouchStart = (event: any) => {
        if (!this.props.pullToRefresh) {
            return;
        }
        if (this.scrollElem && this.scrollElem.scrollTop > 0) {
            return;
        }
        const touch = event.changedTouches[0];
        this.startXY = {
            pageX: touch.pageX,
            pageY: touch.pageY,
        };
        if (this.props.onPullStart) {
            (this.props.onPullStart as () => void)();
        }
        document.addEventListener('touchmove', this.handleTouchMove);
        document.addEventListener('touchend', this.handleTouchEnd);
    }

    handleTouchMove = (event: any) => {
        const touch = event.changedTouches[0];
        this.setState({
            y: this.state.y + touch.pageY - this.startXY.pageY,
        });
        this.startXY = {
            pageX: touch.pageX,
            pageY: touch.pageY,
        };
        if (this.props.onPullMove) {
            (this.props.onPullMove as () => void)();
        }
    }

    handleTouchEnd = () => {
        const {y} = this.state;
        if (this.props.onPullEnd) {
            (this.props.onPullEnd as () => void)();
        }
        if ((y!) < this.preloaderHeight) {
            this.setState({
                transitions: true,
                x: 0,
                y: 0,
            });
        } else if (this.preloaderHeight < y!) {
            this.setState({
                loading: true,
                y: this.preloaderHeight,
                states: 'refreshing',
                transitions: true,
            });
        }
        document.removeEventListener('touchmove', this.handleTouchMove);
        document.removeEventListener('touchend', this.handleTouchEnd);
    }

    handleTransitionEnd = () => {
        if (this.props.pullToRefresh && this.props.onRefresh) {
            (this.props.onRefresh as (event: any) => void)(this);
        }
    }

    handleScroll = (event: any) => {
        const scroller = event.target;
        const scrollTop = scroller.scrollTop;
        if (this.props.pullToRefresh) {
            this.setState({scrollTop});
        }
        if (this.props.infiniteScroll) {
            const scrollHeight = scroller.scrollHeight - this.scrollElem.offsetHeight;
            if (scrollHeight <= scrollTop) {
                if (this.props.onInfinite) {
                    (this.props.onInfinite as (event: any) => void)(this);
                }
            }
        }
        if (this.props.onContentScroll) {
            (this.props.onContentScroll as (event: any) => void)(event);
        }
    }

    getRef = (node: any) => {
        if (node) {
            this.scrollElem = node;
        }
    }

    reset() {
        this.setState({
            loading: false,
            transitions: false,
            states: '',
            x: 0,
            y: 0,
        });
    }

    done() {
        this.reset();
    }

    getPreloaderRef = (node: any) => {
        if (node) {
            this.preloaderHeight = node.offsetHeight;
        }
    }

    render() {
        const {
            children, className, prefixCls, preloader,
            pullToRefresh, style, ...other,
        } = this.props;
        const {states, transitions}: any = this.state;
        const styleClass = classNames(
            prefixCls, (states ? `${prefixCls}-${states}` : ''),
            {
                'bm-transitions': transitions,
            },
            className,
        );
        const preloaderElem = preloader ?
            preloader : (
                <div className={`${prefixCls}-preloader`} ref={this.getPreloaderRef}>
                    <div className={`${prefixCls}-preloader-loading`}/>
                    <div className={`${prefixCls}-preloader-arrow`}/>
                </div>);
        const styles = {
            transform: `translate3d(0, ${this.state.y}px, 0)`,
            ...style,
        };
        const otherProps = getOtherProperties(other,
            ['height', 'infiniteScroll', 'onInfinite', 'onContentScroll', 'onPullStart', 'onPullMove', 'onPullEnd', 'onRefresh', 'width']);
        return (
            <div
                ref={this.getRef}
                className={styleClass}
                style={styles}
                onScroll={this.handleScroll}
                {...otherProps}
                onTransitionEnd={this.handleTransitionEnd}
                onTouchStart={this.handleTouchStart}
            >
                {pullToRefresh ? preloaderElem : null}
                {children}
            </div>
        );
    }
}
