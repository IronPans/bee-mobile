import * as React from 'react';
import * as classNames from 'classnames';
import {TimelineProps} from './PropsType';

export default class Timeline extends React.PureComponent<TimelineProps, any> {
    static defaultProps: TimelineProps = {
        prefixCls: 'bm-Timeline',
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
