import * as React from 'react';
import * as classNames from 'classnames';
import EventListener from 'react-event-listener';
import {getTouchEvent} from '../common/Utils';
import {TooltipProps, TooltipState} from './PropsType';

export default class Tooltip extends React.PureComponent<TooltipProps, TooltipState> {
    static defaultProps: TooltipProps = {
        delay: 0,
        dir: 'bottom',
        title: '',
        prefixCls: 'bm-Tooltip',
    };
    state: TooltipState = {
        tooltipStyle: {},
        open: false,
    };
    tooltip: any;
    er: any = '';
    timeoutId: any;
    touchEvent: any = getTouchEvent();

    componentDidMount() {
        this.updateTooltipState();
    }

    close() {
        this.setState({
            open: false,
        });
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    show() {
        this.setState({
            open: true,
        });
        if (this.props.onOpen) {
            this.props.onOpen();
        }
    }

    updateTooltipState() {
        const {dir} = this.props;
        if (this.tooltip) {
            const rect = this.er.getBoundingClientRect();
            if (!this.er.style.position) {
                this.er.style.position = 'relative';
            }
            let top = rect.height / 2 - this.tooltip.offsetHeight / 2;
            let left = rect.width / 2 - this.tooltip.offsetWidth / 2;
            switch (dir) {
                case 'left':
                    left = -this.tooltip.offsetWidth;
                    break;
                case 'right':
                    left = rect.width;
                    break;
                case 'top':
                    top = -this.tooltip.offsetHeight;
                    break;
                case 'bottom':
                    top = rect.height;
                    break;
            }
            this.setState({
                tooltipStyle: {top, left},
            });
        }
    }

    handleTouchStart = () => {
        if (!this.state.open) {
            if (this.timeoutId) {
                this.close();
                clearTimeout(this.timeoutId);
            }
            this.show();
        } else {
            this.handleTouchEnd();
        }
    }

    handleTouchEnd = () => {
        this.timeoutId = setTimeout(() => {
            this.close();
            this.timeoutId = null;
        }, this.props.delay);
    }

    handleResize = () => {
        this.touchEvent = getTouchEvent();
        this.updateTooltipState();
    }

    render() {
        const {children, className, dir, prefixCls, title, ...other} = this.props;
        const styleClass = classNames(
            `${prefixCls}-content`,
            `${prefixCls}-${dir}`,
            (this.state.open && `${prefixCls}-active`),
        );
        const groupStyle = classNames(
            prefixCls, className,
        );
        return (
            <EventListener target="window" onResize={this.handleResize}>
                <div
                    ref={(node) => {
                        this.er = node;
                    }}
                    className={groupStyle}
                    onClick={this.handleTouchStart}
                >
                    {children}
                    <div
                        className={styleClass}
                        {...other}
                        ref={node => {
                            this.tooltip = node;
                        }}
                        style={this.state.tooltipStyle}
                    >
                        {title}
                    </div>
                </div>
            </EventListener>
        );
    }
}
