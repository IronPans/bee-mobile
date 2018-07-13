import * as React from 'react';
import * as classNames from 'classnames';
import {TableColumnProps} from './PropsType';

export default class TableColumn extends React.PureComponent<TableColumnProps, any> {
    static fnName: string = 'TableColumn';
    static defaultProps = {
        prefixCls: 'bm-TableColumn',
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
