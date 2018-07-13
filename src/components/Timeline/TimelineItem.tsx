import * as React from 'react';
import * as classNames from 'classnames';
import {TimelineItemProps} from './PropsType';

export default class TimelineItem extends React.PureComponent<TimelineItemProps, {}> {
    static defaultProps: TimelineItemProps = {
        prefixCls: 'bm-TimelineItem',
    };

    render() {
        const {children, className, prefixCls, title} = this.props;
        const styleClass = classNames(
            prefixCls,
            className,
        );
        return (
            <div className={styleClass}>
                <div className={`${prefixCls}-line`}/>
                <div className={`${prefixCls}-body`}>
                    {title ? (<div className={`${prefixCls}-title`}>{title}</div>) : null}
                    <div className={`${prefixCls}-inner`}>{children}</div>
                </div>
            </div>
        );
    }
}
