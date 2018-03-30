import * as React from 'react';
import * as classNames from 'classnames';
import Ripple from '../Ripple';
import {ButtonProps} from './PropsType';

export default class Button extends React.PureComponent<ButtonProps, any> {
    public static defaultProps = {
        disableRipple: false,
        prefixCls: 'bm-Button',
        type: 'button',
        shape: '',
        theme: 'default'
    };

    handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const onClick = this.props.onClick;
        if (onClick) {
            onClick(e);
        }
    };
    render() {
        const { disableRipple, to, shape, flat, float, theme, size, block,
            isActive, disabled, className, children, prefixCls, type, target } = this.props;
        const styleClass = classNames(
            prefixCls,
            (float && `${prefixCls}-${float}`),
            `${prefixCls}-${theme}`,
            (size ? `${prefixCls}-${size}` : null),
            {
                [`${prefixCls}-block`]: block,
                'is-active': isActive,
                'is-disabled': disabled,
                'is-flat': flat,
                [`${prefixCls}-fab`]: shape === 'circle',
                [`${prefixCls}-float`]: !!float
            },
            className
        );
        const props = {
            className: styleClass,
            type: type,
            target: to && target,
            href: to
        };
        let ComponentProp = 'button';
        if (this.props.to) {
            ComponentProp = 'a';
        }
        return (
            <ComponentProp {...props} onClick={this.handleClick}>
                {children}
                {!disableRipple ? (<Ripple/>) : null}
            </ComponentProp>
        );
    }
}
