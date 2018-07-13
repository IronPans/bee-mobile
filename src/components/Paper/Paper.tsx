import * as React from 'react';
import * as classNames from 'classnames';
import {PaperProps} from './PropsType';

export default class Paper extends React.PureComponent<PaperProps, any> {
    static defaultProps: PaperProps = {
        depth: 1,
        prefixCls: 'bm-Paper',
    };

    render() {
        const {className, children, depth, prefixCls, ...other} = this.props;
        const dp = depth ? `${prefixCls}-${depth}dp` : 'no-shadow';
        const styleClass = classNames(
            prefixCls, dp, className,
        );
        return (
            <div className={styleClass} {...other}>
                {children}
            </div>
        );
    }
}
