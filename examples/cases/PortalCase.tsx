import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';

interface PortalCaseProps extends BaseProps {
}

interface PortalCaseState {
}

export default class PortalCase extends React.Component<PortalCaseProps, PortalCaseState> {
    static defaultProps: PortalCaseProps = {
        prefixCls: 'rf-PortalCase',
    };

    constructor(props: PortalCaseProps) {
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
