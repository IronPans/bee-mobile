import * as React from 'react';
import * as classNames from 'classnames';
import {CardProps} from './PropsType';

export default class Card extends React.PureComponent<CardProps, any> {
    static defaultProps = {
        dir: 'vertical',
        prefixCls: 'bm-Card',
    };
    render() {
        const {className, children, dir, prefixCls, ...other} = this.props;
        const styleClass = classNames(
            prefixCls,
            `${prefixCls}-${dir}`,
            className,
        );
        return (
            <div className={styleClass} {...other}>
                {children}
            </div>
        );
    }
}
