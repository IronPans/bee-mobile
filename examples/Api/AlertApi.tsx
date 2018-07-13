import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface AlertApiProps extends BaseProps {
}

export default class AlertApi extends React.PureComponent<AlertApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-AlertApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import Alert from '../../src/components/Alert';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';

interface AlertCaseProps extends BaseProps {
}

export default class AlertCase extends React.PureComponent< AlertCaseProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-AlertCase'
    };
    render() {
        const {className, children, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Alert title="A Info Alert"></Alert>
                    <Alert className="margin-top-10" type="success" title="A Success Alert"></Alert>
                    <Alert className="margin-top-10" type="warning" title="A Warning Alert"></Alert>
                    <Alert className="margin-top-10" type="error" title="A Error Alert"></Alert>
                </div>
                <div className="CasePanel">
                    <Alert showIcon title="A Info Alert"></Alert>
                    <Alert showIcon className="margin-top-10" type="success" title="A Success Alert"></Alert>
                    <Alert showIcon className="margin-top-10" type="warning" title="A Warning Alert"></Alert>
                    <Alert showIcon className="margin-top-10" type="error" title="A Error Alert"></Alert>
                </div>
                <div className="CasePanel">
                    <Alert showIcon closable title="A Info Alert"></Alert>
                </div>
                <div className="CasePanel">
                    <Alert title="A Info Alert" desc="Alert Description.Alert Description.Alert Description.Alert Description."/>
                    <Alert className="margin-top-10" type="success" title="A Success Alert"
                    desc="Alert Description.Alert Description.Alert Description.Alert Description."></Alert>
                    <Alert className="margin-top-10" type="warning" title="A Warning Alert"
                    desc="Alert Description.Alert Description.Alert Description.Alert Description."></Alert>
                    <Alert className="margin-top-10" type="error" title="A Error Alert"
                    desc="Alert Description.Alert Description.Alert Description.Alert Description."></Alert>
                </div>
                <div className="CasePanel">
                    <Alert showIcon title="A Info Alert" desc="Alert Description.Alert Description.Alert Description.Alert Description."></Alert>
                    <Alert showIcon className="margin-top-10" type="success"
                    title="A Success Alert" desc="Alert Description.Alert Description.Alert Description.Alert Description."></Alert>
                    <Alert showIcon className="margin-top-10" type="warning"
                    title="A Warning Alert" desc="Alert Description.Alert Description.Alert Description.Alert Description."></Alert>
                    <Alert showIcon className="margin-top-10" type="error"
                    title="A Error Alert" desc="Alert Description.Alert Description.Alert Description.Alert Description."></Alert>
                </div>
            </Content>
        );
    }
}`;
    }

    getFields() {
        return [{
            field: 'attr',
            header: '属性',
        }, {
            field: 'desc',
            header: '说明',
        }, {
            field: 'type',
            header: '类型',
        }, {
            field: 'default',
            header: '默认值',
        }];
    }

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className,
            'ApiContent',
        );
        const data = [{
            name: 'Alert',
            fields: this.getFields(),
            attributes: [{
                attr: 'title',
                desc: '警告提示内容',
                type: 'String | React.ReactNode',
                default: '无',
            }, {
                attr: 'desc',
                desc: '警告提示辅助性文字介绍',
                type: 'String | React.ReactNode',
                default: '',
            }, {
                attr: 'showIcon',
                desc: '是否显示图标',
                type: 'Boolean',
                default: false,
            }, {
                attr: 'closable',
                desc: '是否可关闭',
                type: 'Boolean',
                default: false,
            }, {
                attr: 'type',
                desc: '警告提示样式，可选值为info、success、warning、error',
                type: 'String',
                default: 'info',
            }, {
                attr: 'icon',
                desc: '自定义图标',
                type: 'String',
                default: '',
            }, {
                attr: 'banner',
                desc: '设置顶部公告',
                type: 'Boolean',
                default: false,
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    data={data}
                    app="适用平台：WEB"
                    title="Alert 警告提示"
                    code={this.getCode()}
                    frameUrl="#/components/alert"
                    description="呈现一些警告信息，可手动关闭。"
                />
            </Content>
        );
    }
}
