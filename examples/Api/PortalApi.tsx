import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';

interface PortalApiProps extends BaseProps {
}

interface PortalApiState {
}

export default class PortalApi extends React.Component<PortalApiProps, PortalApiState> {
    static defaultProps: PortalApiProps = {
        prefixCls: 'rf-PortalApi',
    };

    constructor(props: PortalApiProps) {
        super(props);
    }

    render() {
        const {children, className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls,
            className,
        );
        return (
            <Content className={styleClass}>
                {children}
            </Content>
        );
    }
}
