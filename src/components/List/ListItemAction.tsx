import * as React from 'react';
import * as classNames from 'classnames';
import {ListItemActionProps} from './PropsType';

export default class ListItemAction extends React.PureComponent<ListItemActionProps, any> {
    static defaultProps = {
        prefixCls: 'bm-ListItemAction',
    };

    render() {
        const {className, children, prefixCls, ...other} = this.props;
        const styleClass = classNames(
            prefixCls,
            className,
        );
        return (
            <div className={styleClass} {...other}>
                {children}
            </div>
        );
    }
}
