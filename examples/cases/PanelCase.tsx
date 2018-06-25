import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Panel, {PanelHeader, PanelContent} from '../../src/components/Panel';
import {Content} from '../../src/components/Page';

interface PanelCaseProps extends BaseProps {
}

export default class PanelCase extends React.PureComponent<PanelCaseProps, any> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'PanelCase',
            className,
        );
        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <Panel>
                        <PanelHeader>
                            Panel
                        </PanelHeader>
                        <PanelContent>
                            Without any change in default mark-up.
                        </PanelContent>
                    </Panel>
                </div>
                <div className="CasePanel">
                    <Panel tool={true}>
                        <PanelHeader>
                            Panel
                        </PanelHeader>
                        <PanelContent>
                            Without any change in default mark-up.
                        </PanelContent>
                    </Panel>
                </div>
            </Content>
        );
    }
}
