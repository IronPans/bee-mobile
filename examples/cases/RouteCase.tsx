import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';

interface RouteCaseProps extends BaseProps {
}

interface RouteCaseState {
}

export default class RouteCase extends React.Component<RouteCaseProps, RouteCaseState> {
    static defaultProps: RouteCaseProps = {
        prefixCls: 'rf-RouteCase',
    };

    constructor(props: RouteCaseProps) {
        super(props);
    }

    render() {
        const {children, className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls,
            className,
        );
        return (
            <div className={styleClass}>
                {children}
            </div>
        );
    }
}
