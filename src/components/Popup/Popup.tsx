import * as React from 'react';
import * as classNames from 'classnames';
import Portal from '../Portal';
import {FadeInUp, MoveInRight} from '../Transitions';
import {getOtherProperties} from '../common/Utils';
import {PopupProps} from './PropsType';

export default class Popup extends React.PureComponent<PopupProps, any> {
    static defaultProps: PopupProps = {
        direction: 'up',
        prefixCls: 'bm-Popup',
        visible: false,
    };

    componentWillReceiveProps(nextProps: PopupProps) {
        if ('visible' in nextProps && nextProps.visible !== this.props.visible) {
            if (nextProps.visible) {
                if (nextProps.onOpen) {
                    (nextProps.onOpen as () => void)();
                }
            } else {
                if (nextProps.onClose) {
                    (nextProps.onClose as () => void)();
                }
            }
        }
    }

    render() {
        const { className, children, direction, prefixCls, visible, ...other} = this.props;
        const styleClass = classNames(
            prefixCls,
            className,
        );
        const otherProps = getOtherProperties(other, ['onClose', 'onOpen']);
        const Component = direction === 'up' ? FadeInUp : MoveInRight;
        return (
            <Portal mountNode={document.body} visible={visible}>
                <div className={styleClass} {...otherProps}>
                    <Component in={visible}>
                        <div className={`${prefixCls}-panel`} key="Popup-panel">
                            {children}
                        </div>
                    </Component>
                </div>
            </Portal>
        );
    }
}
