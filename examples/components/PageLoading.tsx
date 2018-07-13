import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';

interface PageLoadingProps extends BaseProps {
}

export default class PageLoading extends React.PureComponent<PageLoadingProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-PageLoading',
    };

    render() {
        const {className, children, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className,
        );
        return (
            <div className={styleClass}>
                {children}
            </div>
        );
    }
}
