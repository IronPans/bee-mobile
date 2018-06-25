import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';

interface RouteApiProps extends BaseProps {
}

interface RouteApiState {
}

export default class RouteApi extends React.Component<RouteApiProps, RouteApiState> {
    static defaultProps: RouteApiProps = {
        prefixCls: 'rf-RouteApi',
    };

    constructor(props: RouteApiProps) {
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
