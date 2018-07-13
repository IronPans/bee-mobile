import * as React from 'react';
import * as classNames from 'classnames';
import Ripple from '../Ripple';
import {ListItemProps} from './PropsType';

export default class ListItem extends React.PureComponent<ListItemProps, any> {
    static defaultProps = {
        prefixCls: 'bm-List-item',
        disableRipple: false,
    };

    handleClick = (event: any) => {
        event.stopPropagation();
        if (this.props.onClick) {
            (this.props.onClick as (event: any) => void)(event);
        }
    }

    render() {
        const {avatarRight, children, className, disableRipple, index, onClick, prefixCls, ...other} = this.props;
        const styleClass = classNames(
            prefixCls,
            avatarRight ? `${prefixCls}-avatar-right` : '',
            className,
        );
        return (
            <li className={styleClass} onClick={this.handleClick} {...other}>
                <div className={`${prefixCls}-btn`}>
                    {children}
                    {!disableRipple ? (<Ripple/>) : null}
                </div>
            </li>
        );
    }
}
