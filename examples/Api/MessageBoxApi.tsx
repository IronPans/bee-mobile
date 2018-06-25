import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';
import MessageBox from '../../src/components/MessageBox';

interface MessageBoxApiProps extends BaseProps {
}

export default class MessageBoxApi extends React.PureComponent<MessageBoxApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-MessageBoxApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Button from '../components/Button';
import MessageBox from '../components/MessageBox';
import Spin from '../components/Spin';
import Progress from '../components/Progress';
import {Content} from '../components/Page';

interface MessageBoxCaseProps extends BaseProps {
}

export default class MessageBoxCase extends React.PureComponent< MessageBoxCaseProps, any> {
    handleOpenAlert() {
        MessageBox.alert({
            title: '提示',
            message: '这是一个Alert提示框!'
        });
    }
    handleOpenConfirm() {
        MessageBox.confirm({
            title: '提示',
            message: '这是一个Confirm提示框!'
        });
    }
    handleOpenPrompt() {
        MessageBox.prompt({
            title: '提示',
            message: '这是一个Prompt提示框!'
        });
    }
    handleOpenPreloader = () => {
        MessageBox.show({
            message: (<div className="Row Row-column justify-center">
                <p>loading...</p>
                <Spin/>
            </div>),
            hideBackdrop: true
        })
    };
    handleOpenInfinite = () => {
        MessageBox.show({
            message: (<div className="Row Row-column justify-center">
                <p>loading...</p>
                <Progress loading={true}/>
            </div>),
            hideBackdrop: true
        })
    };
    render() {
        const styleClass = classNames(
            'MessageBoxCase'
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Button block onClick={this.handleOpenAlert.bind(this)}>打开 alert 提示框</Button>
                    <Button block onClick={this.handleOpenConfirm.bind(this)}>打开 confirm 提示框</Button>
                    <Button block onClick={this.handleOpenPrompt.bind(this)}>打开 prompt 提示框</Button>
                </div>
                <div className="CasePanel">
                    <Button block onClick={this.handleOpenPreloader}>Preloader</Button>
                    <Button block onClick={this.handleOpenInfinite}>Infinite</Button>
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
            name: 'MessageBox.show()',
            fields: this.getFields(),
            attributes: [{
                attr: 'delay',
                desc: '自动消失的延迟时间',
                type: 'Number',
                default: '0',
            }, {
                attr: 'hideBackdrop',
                desc: '点击遮罩是否关闭',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'inputType',
                desc: '当type为prompt时，设置input的type',
                type: 'String',
                default: 'text',
            }, {
                attr: 'message',
                desc: '提示内容',
                type: 'React.ReactNode | String',
                default: '-',
            }, {
                attr: 'placeholder',
                desc: 'input的placeholder',
                type: 'String',
                default: '-',
            }, {
                attr: 'showConfirmButton',
                desc: '是否显示确认按钮',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'showCancelButton',
                desc: '是否显示取消按钮',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'title',
                desc: '标题',
                type: 'React.ReactNode | String',
                default: '-',
            }, {
                attr: 'type',
                desc: 'input的类型',
                type: 'String',
                default: 'text',
            }, {
                attr: 'onClose',
                desc: '关闭的回调函数',
                type: 'Function',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="MessageBox 对话框"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/messageBox"
                    description="对话框。"
                />
                <div className="padding-left-20 padding-right-20">
                    <h3>MessageBox.alert()</h3>
                    <p>Alert</p>
                </div>
                <div className="padding-left-20 padding-right-20">
                    <h3>MessageBox.confirm()</h3>
                    <p>Confirm</p>
                </div>
                <div className="padding-left-20 padding-right-20">
                    <h3>MessageBox.prompt()</h3>
                    <p>Prompt</p>
                </div>
                <div className="padding-left-20 padding-right-20">
                    <h3>MessageBox.close()</h3>
                    <p>Close</p>
                </div>
            </Content>
        );
    }
}
