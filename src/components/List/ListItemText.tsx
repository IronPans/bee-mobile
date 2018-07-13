import * as React from 'react';
import * as classNames from 'classnames';
import {ListItemTextProps} from './PropsType';

export default class ListItemText extends React.PureComponent<ListItemTextProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-List-item-text',
    };
    render() {
        const { children, className, prefixCls } = this.props;
        const styleClass = classNames(
            prefixCls,
            className,
        );
        return (
            <div className={styleClass}>
                {children}
            </div>
        );
    }
}
