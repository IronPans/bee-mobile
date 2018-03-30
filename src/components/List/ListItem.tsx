import * as React from 'react';
import * as classNames from 'classnames';
import Ripple from '../Ripple';
import {ListItemProps} from './PropsType';

export default class ListItem extends React.PureComponent<ListItemProps, any> {
    static defaultProps = {
        disableRipple: false
    };

    handleClick = (event: any) => {
        event.stopPropagation();
        if (this.props.onClick) {
            (this.props.onClick as Function)(event);
        }
    };

    render() {
        const {children, className, disableRipple, index, onClick, ...other} = this.props;
        const styleClass = classNames(
            'List-item',
            className
        );
        return (
            <li className={styleClass} onClick={this.handleClick} {...other}>
                <div className="List-item-btn">
                    {children}
                    {!disableRipple ? (<Ripple/>) : null}
                </div>
            </li>
        );
    }
}