import * as React from 'react';
import * as classNames from 'classnames';
import {ListItemActionProps} from './PropsType';

export default class ListItemAction extends React.PureComponent<ListItemActionProps, any> {
    render() {
        const {className, children, ...other} = this.props;
        const styleClass = classNames(
            'ListItemAction',
            className
        );
        return (
            <div className={styleClass} {...other}>
                {children}
            </div>
        );
    }
}