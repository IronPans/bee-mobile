import * as React from 'react';
import * as classNames from 'classnames';
import Switch from '../../src/components/Switch';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';

interface Props extends BaseProps {}

export default class SwitchCase extends React.PureComponent<Props, {}> {
    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'SwitchCase',
            className,
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Switch>
                        Off
                    </Switch>
                    <Switch defaultChecked={true}>
                        On
                    </Switch>
                    <Switch disabled={true}>
                        Disabled off
                    </Switch>
                    <Switch disabled={true} defaultChecked={true}>
                        Disabled on
                    </Switch>
                </div>
            </Content>
        );
    }
}
