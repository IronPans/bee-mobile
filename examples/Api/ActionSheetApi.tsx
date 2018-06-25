import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';
import ActionSheet from '../../src/components/ActionSheet';
import HighlightCode from '../../src/components/HighlightCode';

interface ActionSheetApiProps extends BaseProps {
}

export default class ActionSheetApi extends React.PureComponent<ActionSheetApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-ActionSheetApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import ActionSheet from '../components/ActionSheet'
import {Content} from '../components/Page';
import Button from '../components/Button';

interface ActionSheetCaseProps extends BaseProps {
}

export default class ActionSheetCase extends React.PureComponent< ActionSheetCaseProps, {}> {

    handleClick = () => {
        ActionSheet.show({
            buttons: [
                {
                    text: '拍照'
                }, {
                    text: '从相册中选择'
                }
            ],
            cancel: true,
            title: 'Message'
        })
    };

    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'ActionSheetCase', className
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Button theme="primary" onClick={this.handleClick}>Show Action Sheet</Button>
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
            name: 'ActionSheet.show()',
            fields: this.getFields(),
            attributes: [{
                attr: 'buttons',
                desc: '按钮组',
                type: 'Array< ActionSheetButton>',
                default: '-',
            }, {
                attr: 'cancel',
                desc: '是否显示取消按钮',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'cancelText',
                desc: '自定义取消按钮的文字',
                type: 'String',
                default: 'cancel',
            }, {
                attr: 'element',
                desc: '设置自定义元素',
                type: 'React.ReactNode | string',
                default: '-',
            }, {
                attr: 'title',
                desc: '头部描述',
                type: 'String',
                default: '-',
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
                    title="ActionSheet 动作面板"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/actionSheet"
                    description="从底部弹出的模态框。"
                />
                <div className="padding-left-20 padding-right-20">
                    <h3>ActionSheet.close()</h3>
                    <p>关闭方法</p>
                </div>
                <div className="padding-left-20 padding-right-20">
                    <h3>ActionSheetButton</h3>
                    <div>
                        <HighlightCode>
export interface ActionSheetButton &#123;<br/>
    color?: string; <br/>
    disabled?: boolean;<br/>
    onClick?: Function;<br/>
    style?: object;<br/>
    text?: React.ReactNode | string;<br/>
&#125;
                        </HighlightCode>
                    </div>
                </div>
            </Content>
        );
    }
}
