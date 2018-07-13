import * as React from 'react';
import * as classNames from 'classnames';
import {CardContentProps} from './PropsType';

export default class CardContent extends React.PureComponent<CardContentProps, any> {
    static defaultProps = {
        prefixCls: 'bm-CardContent',
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
