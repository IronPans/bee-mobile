import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface SwitchApiProps extends BaseProps {
}

export default class SwitchApi extends React.PureComponent<SwitchApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-SwitchApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import Switch from '../components/Switch';
import {BaseProps} from '../components/common/BaseProps';
import {Content} from '../components/Page';

interface Props extends BaseProps {}

export default class SwitchCase extends React.PureComponent< Props, {}> {
    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'SwitchCase',
            className
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
            name: 'Switch',
            fields: this.getFields(),
            attributes: [{
                attr: 'checked',
                desc: '当前值',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'defaultChecked',
                desc: '是否默认选中',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'disabled',
                desc: '是否不可修改',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'name',
                desc: 'switch的name',
                type: 'String',
                default: '-',
            }, {
                attr: 'onChange',
                desc: 'change 事件触发的回调函数',
                type: '(checked: boolean): void',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Switch 滑动开关"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/switch"
                    description="开关切换单个设置选项的状态。"
                />
            </Content>
        );
    }
}
