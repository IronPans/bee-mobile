import * as React from 'react';
import * as classNames from 'classnames';
import Portal from '../Portal';
import {Fade} from '../Transitions';
import {ZoomIn} from '../Transitions';
import Button from '../Button';
import {getOtherProperties, setValueToNumber} from '../common/Utils';
import {ModalProps, ModalState} from './PropsType';

export default class Modal extends React.PureComponent<ModalProps, ModalState> {
    static defaultProps: ModalProps = {
        hideBackdrop: false,
        prefixCls: 'bm-Modal',
        visible: false
    };

    constructor(props: ModalProps) {
        super(props);
        let visible = false;
        if (props.visible) {
            visible = props.visible;
        }
        this.state = {visible};
    }

    componentWillReceiveProps(nextProps: ModalProps) {
        if ('visible' in nextProps && nextProps.visible !== this.props.visible) {
            this.setState({
                visible: nextProps.visible
            })
        }
    }

    handleClose = () => {
        (this.props.onClose as Function)();
    };

    handleBackdropClick = () => {
        if (this.props.hideBackdrop) {
            (this.props.onClose as Function)();
        }
    };

    render() {
        const {className, children, header, maxHeight, prefixCls, visible, ...other}: any = this.props;
        const styleClass = classNames(
            prefixCls,
            {
                [`${prefixCls}-max`]: maxHeight
            },
            className
        );
        const panelClass = classNames(
            `${prefixCls}-panel`,
            {
                'bm-Scroll': maxHeight
            }
        );
        const panelStyles = {
            maxHeight: setValueToNumber(maxHeight) + 'px'
        };
        const otherProps = getOtherProperties(other, ['hideBackdrop', 'onClose', 'onOpen']);
        return (
            <Portal mountNode={document.body} visible={visible}>
                <div className={styleClass}>
                    <Fade in={visible}>
                        <div className={`${prefixCls}-backdrop`} onClick={this.handleBackdropClick}/>
                    </Fade>
                    <ZoomIn in={visible}>
                        <div className={`${prefixCls}-content`} {...otherProps} key="Modal">
                            {header ? (<div className={`${prefixCls}-header`}>
                                {header}
                                <Button className={`${prefixCls}-close-x`} onClick={this.handleClose}><span/></Button>
                            </div>) : null}
                            <div className={panelClass} style={maxHeight ? panelStyles : {}}>
                                {children}
                            </div>
                        </div>
                    </ZoomIn>
                </div>
            </Portal>
        );
    }
}