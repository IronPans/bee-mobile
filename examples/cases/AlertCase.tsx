import * as React from 'react';
import * as classNames from 'classnames';
import Alert from '../../src/components/Alert';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';

interface AlertCaseProps extends BaseProps {
}

export default class AlertCase extends React.PureComponent<AlertCaseProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-AlertCase',
    };

    render() {
        const {className, children, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className,
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Alert title="A Info Alert"/>
                    <Alert className="margin-top-10" type="success" title="A Success Alert"/>
                    <Alert className="margin-top-10" type="warning" title="A Warning Alert"/>
                    <Alert className="margin-top-10" type="error" title="A Error Alert"/>
                </div>
                <div className="CasePanel">
                    <Alert showIcon={true} title="A Info Alert"/>
                    <Alert showIcon={true} className="margin-top-10" type="success" title="A Success Alert"/>
                    <Alert showIcon={true} className="margin-top-10" type="warning" title="A Warning Alert"/>
                    <Alert showIcon={true} className="margin-top-10" type="error" title="A Error Alert"/>
                </div>
                <div className="CasePanel">
                    <Alert showIcon={true} closable={true} title="A Info Alert"/>
                </div>
                <div className="CasePanel">
                    <Alert
                        title="A Info Alert"
                        desc="Alert Description.Alert Description.Alert Description.Alert Description."
                    />
                    <Alert
                        className="margin-top-10"
                        type="success"
                        title="A Success Alert"
                        desc="Alert Description.Alert Description.Alert Description.Alert Description."
                    />
                    <Alert
                        className="margin-top-10"
                        type="warning"
                        title="A Warning Alert"
                        desc="Alert Description.Alert Description.Alert Description.Alert Description."
                    />
                    <Alert
                        className="margin-top-10"
                        type="error"
                        title="A Error Alert"
                        desc="Alert Description.Alert Description.Alert Description.Alert Description."
                    />
                </div>
                <div className="CasePanel">
                    <Alert
                        showIcon={true}
                        title="A Info Alert"
                        desc="Alert Description.Alert Description.Alert Description.Alert Description."
                    />
                    <Alert
                        showIcon={true}
                        className="margin-top-10"
                        type="success"
                        title="A Success Alert"
                        desc="Alert Description.Alert Description.Alert Description.Alert Description."
                    />
                    <Alert
                        showIcon={true}
                        className="margin-top-10"
                        type="warning"
                        title="A Warning Alert"
                        desc="Alert Description.Alert Description.Alert Description.Alert Description."
                    />
                    <Alert
                        showIcon={true}
                        className="margin-top-10"
                        type="error"
                        title="A Error Alert"
                        desc="Alert Description.Alert Description.Alert Description.Alert Description."
                    />
                </div>
                <div className="CasePanel">
                    <Alert showIcon={true} banner={true} title="A Info Alert"/>
                </div>
            </Content>
        );
    }
}
