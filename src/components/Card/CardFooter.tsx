import * as React from 'react';
import * as classNames from 'classnames';
import {CardFooterProps} from './PropsType';

export default class CardFooter extends React.PureComponent<CardFooterProps, any> {
    static defaultProps = {
        prefixCls: 'bm-CardFooter',
    };

    render() {
        const {action, className, children, prefixCls, ...other} = this.props;
        const styleClass = classNames(
            prefixCls,
            {
                [`${prefixCls}-action`]: action,
            },
            className,
        );
        return (
            <div className={styleClass} {...other}>
                {children}
            </div>
        );
    }
}
