import * as React from 'react';
import * as classNames from 'classnames';
import {BadgeProps} from './PropsType';

export default class Badge extends React.PureComponent<BadgeProps, {}> {
    static defaultProps = {
        count: 0,
        dot: false,
        fixed: true,
        max: 99,
        prefixCls: 'bm-Badge',
        status: 'error',
    };

    componentWillReceiveProps(nextProps: BadgeProps) {
        if ('count' in nextProps && this.props.count !== nextProps.count) {
            this.forceUpdate();
        }
    }

    render() {
        const {className, children, count,
            fixed, dot, notify, max, prefixCls, shape, status, text, ...other}: any = this.props;
        const styleClass = classNames(
            prefixCls,
            {
                [`${prefixCls}-sr-only`]: !children,
                [`${prefixCls}-fixed`]: fixed,
            },
            className,
        );
        const supStyleClass = classNames(
            `${prefixCls}-count`,
            {
                [`${prefixCls}-dot`]: dot,
                [`${prefixCls}-notify`]: notify,
                [`${prefixCls}-circle`]: shape === 'circle',
            },
            `${prefixCls}-${status}`,
        );
        const currentCount: any = count > max ? (max + '+') : count;
        return (
            <span className={styleClass} {...other}>
                {children}
                <span className={supStyleClass}>
                    {text ? text : (<span className={`${prefixCls}-count-inner`}>
                        {(dot || count === 0) ? null : currentCount}
                    </span>)}
                </span>
            </span>
        );
    }
}
