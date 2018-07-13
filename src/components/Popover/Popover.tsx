import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';
import Portal from '../Portal/Portal';
import FadeInZoom from '../Transitions/FadeInZoom';
import {getOtherProperties} from '../common/Utils';
import {PopoverProps, PopoverState} from './PropsType';

export default class Popover extends React.PureComponent<PopoverProps, PopoverState> {
    static defaultProps: PopoverProps = {
        anchorEl: null,
        dir: 'bottom-right',
        prefixCls: 'bm-Popover',
        visible: false,
    };

    transitionEl: any;

    constructor(props: PopoverProps) {
        super(props);
        let visible = false;
        if (props.visible) {
            visible = true;
        }
        this.state = {
            visible,
        };
    }

    componentWillReceiveProps(nextProps: PopoverProps) {
        this.setElPositionStyle(ReactDOM.findDOMNode(this.transitionEl));
        if ('visible' in nextProps && this.props.visible !== nextProps.visible) {
            this.setState({
                visible: nextProps.visible,
            });
        }
    }

    componentWillUnmount() {
        if (this.transitionEl) {
            this.transitionEl = null;
        }
    }

    setElPositionStyle = (elem: any) => {
        if (elem && elem.style) {
            const position: any = this.getElPositionStyle(elem);
            elem.style.top = position.top + 'px';
            elem.style.left = position.left + 'px';
            elem.style.transformOrigin = position.transformOrigin;
        }
    }

    getElPositionStyle = (elem: any) => {
        const {anchorEl, dir} = this.props;
        if (anchorEl) {
            const rect = anchorEl.getBoundingClientRect();
            const width = anchorEl.offsetWidth, height = anchorEl.offsetHeight;
            let elemWidth = elem.offsetWidth;
            const offsetWidth = elemWidth - width;
            let left = 0, top = rect.top;
            switch (dir) {
                case 'top-left':
                    left = rect.left - offsetWidth;
                    break;
                case 'top-center':
                    left = rect.left - offsetWidth / 2;
                    elemWidth = elemWidth / 2;
                    break;
                case 'top-right':
                    left = rect.left;
                    elemWidth = 0;
                    break;
                case 'bottom-left':
                    top = rect.top + height;
                    left = rect.left - offsetWidth;
                    break;
                case 'bottom-center':
                    top = rect.top + height;
                    left = rect.left - offsetWidth / 2;
                    elemWidth = elemWidth / 2;
                    break;
                case 'bottom-right':
                    left = rect.left;
                    top = rect.top + height;
                    elemWidth = 0;
                    break;
            }
            return {left, top, transformOrigin: elemWidth + 'px 0 0'};
        }
    }

    handleClose = () => {
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    getPopoverRef = (node: any) => {
        this.transitionEl = ReactDOM.findDOMNode(node);
        this.setElPositionStyle(this.transitionEl);
    }

    render() {
        const {children, className, prefixCls, ...other} = this.props;
        const {visible} = this.state;
        const styleClass = classNames(
            prefixCls, className,
        );
        const otherProps = getOtherProperties(other, ['anchorEl', 'dir', 'onClose', 'visible']);
        return (
            <Portal visible={visible} mountNode={document.body}>
                <div className={styleClass} {...otherProps}>
                    <div className={`${prefixCls}-mask`} onClick={this.handleClose}/>
                    <FadeInZoom className={`${prefixCls}-inner`} in={visible} ref={this.getPopoverRef}>
                        {children}
                    </FadeInZoom>
                </div>
            </Portal>
        );
    }
}
