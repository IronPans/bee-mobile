import * as React from 'react';
import * as classNames from 'classnames';
import {IconProps} from './PropsType';

export default class Icon extends React.PureComponent<IconProps, {}> {
    static defaultProps = {
        icon: '',
        prefixCls: 'bm-Icon',
    };

    handleClick = (event: any) => {
        if (this.props.onClick) {
            this.props.onClick(event);
        }
    }

    render() {
        const {children, spin, icon, size, rotate, className, prefixCls, ...other} = this.props;
        const styleClass = classNames(
            prefixCls,
            'material-icons',
            (size ? `${prefixCls}-${size}` : ''),
            (rotate ? `${prefixCls}-${rotate}` : ''),
            (spin ? `${prefixCls}-spin` : ''),
            className,
        );
        return (
            <i className={styleClass} {...other} onClick={this.handleClick}>{icon}</i>
        );
    }
}
