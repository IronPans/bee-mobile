import * as React from 'react';
import * as classNames from 'classnames';
import {ButtonGroupProps} from './PropsType';

export default class ButtonGroup extends React.PureComponent<ButtonGroupProps, {}> {
    static defaultProps = {
        dir: 'horizontal',
        prefixCls: 'bm-Button-group',
    };
    render() {
        const {dir, children, className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls,
            `${prefixCls}-${dir}`,
            className,
        );
        return (
            <div className={styleClass}>
                {children}
            </div>
        );
    }
}
