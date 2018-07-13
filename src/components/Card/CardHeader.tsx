import * as React from 'react';
import * as classNames from 'classnames';
import {CardHeaderProps} from './PropsType';

export default class CardHeader extends React.PureComponent<CardHeaderProps, any> {
    static defaultProps = {
        prefixCls: 'bm-CardHeader',
    };

    render() {
        const {action, avatar, className, prefixCls, subTitle, title, ...other} = this.props;
        const styleClass = classNames(
            prefixCls,
            className,
        );
        return (
            <div className={styleClass} {...other}>
                {
                    avatar ? (<div className={`${prefixCls}-avatar`}>
                        {avatar}
                    </div>) : null}
                <div className={`${prefixCls}-content`}>
                    <div className={`${prefixCls}-title`}>{title}</div>
                    <div className={`${prefixCls}-subtitle`}>{subTitle}</div>
                </div>
                <div className={`${prefixCls}-action`}>
                    {action}
                </div>
            </div>
        );
    }
}
