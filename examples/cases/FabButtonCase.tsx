import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import FabButton from '../../src/components/FabButton';
import Icon from '../../src/components/Icon/Icon';
import {Content} from '../../src/components/Page';

interface FabButtonCaseProps extends BaseProps {
}

export default class FabButtonCase extends React.PureComponent<FabButtonCaseProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-FabButtonCase',
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className,
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <FabButton reverse={true} icon={(<Icon icon="add"/>)}>
                        <Icon icon="thumb_up"/>
                        <Icon icon="face"/>
                        <Icon icon="mail"/>
                    </FabButton>
                    <FabButton type="circle" position="center" icon={(<Icon icon="add"/>)}>
                        <Icon icon="accessible"/>
                        <Icon icon="face"/>
                        <Icon icon="thumb_up"/>
                        <Icon icon="mail"/>
                    </FabButton>
                </div>
            </Content>
        );
    }
}
