import * as React from 'react';
import * as classNames from 'classnames';
import {ListItemTextProps} from './PropsType';

export default class ListItemText extends React.PureComponent<ListItemTextProps, {}> {
    render() {
        const { children, className } = this.props;
        const styleClass = classNames(
            'List-item-text',
            className
        );
        return (
            <div className={styleClass}>
                {children}
            </div>
        );
    }
}