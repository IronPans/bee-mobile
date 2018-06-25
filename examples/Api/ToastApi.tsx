import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface ToastApiProps extends BaseProps {
}

export default class ToastApi extends React.PureComponent<ToastApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-ToastApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Button from '../components/Button';
import Toast from '../components/Toast';
import {Content} from '../components/Page';

interface ToastCaseProps extends BaseProps {
    messages?: Array< object>
}

interface ToastCaseState {
    messages: Array< object>
}

export default class ToastCase extends React.PureComponent<ToastCaseProps, ToastCaseState> {
    state: ToastCaseState = {
        messages: []
    };
    handleClick = () => {
        Toast.show({
            message: '提示信息'
        });
    };

    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'ToastCase',
            className
        );
        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <Button onClick={this.handleClick}>点击弹出 Toast</Button>
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
            name: 'Toast.show()',
            fields: this.getFields(),
            attributes: [{
                attr: 'avatar',
                desc: '设置额外信息',
                type: 'React.ReactNode',
                default: '-',
            }, {
                attr: 'delay',
                desc: '自动消失的延迟时间。若为0则不会自动消失',
                type: 'Number',
                default: '2500',
            }, {
                attr: 'message',
                desc: '文字描述',
                type: 'React.ReactNode | string',
                default: '-',
            }, {
                attr: 'position',
                desc: '设置位置。可选值： top | center | bottom',
                type: 'String',
                default: 'center',
            }, {
                attr: 'type',
                desc: '设置主题。可选值：info | success | warning | error',
                type: 'String',
                default: '-',
            }, {
                attr: 'onClose',
                desc: '关闭的回调',
                type: 'Function',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Toast 消息提示框"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/toast"
                    description="简短的消息提示框，支持自定义位置、持续时间和样式。。"
                />
                <div className="padding-left-20 padding-right-20">
                    <h3>Toast.info()</h3>
                    <p>info提示框</p>
                </div>
                <div className="padding-left-20 padding-right-20">
                    <h3>Toast.success()</h3>
                    <p>success提示框</p>
                </div>
                <div className="padding-left-20 padding-right-20">
                    <h3>Toast.warning()</h3>
                    <p>warning提示框</p>
                </div>
                <div className="padding-left-20 padding-right-20">
                    <h3>Toast.error()</h3>
                    <p>error提示框</p>
                </div>
                <div className="padding-left-20 padding-right-20">
                    <h3>Toast.close()</h3>
                    <p>关闭方法</p>
                </div>
            </Content>
        );
    }
}
