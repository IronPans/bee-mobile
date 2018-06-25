import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface TextareaApiProps extends BaseProps {
}

export default class TextareaApi extends React.PureComponent<TextareaApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-TextareaApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Textarea from '../components/Textarea';
import {Content} from '../components/Page';

interface TextareaCaseProps extends BaseProps {
}

export default class TextareaCase extends React.PureComponent< TextareaCaseProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-TextareaCase'
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className
        );
        return (
            <Content className={styleClass}>
                <div className="padding-20">
                    <Textarea placeholder="请输入内容"/>
                </div>
            </Content>
        );
    }
}
`;
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
            name: 'Textarea',
            fields: this.getFields(),
            attributes: [{
                attr: 'defaultValue',
                desc: '初始化值',
                type: 'String',
                default: '-',
            }, {
                attr: 'disabled',
                desc: '是否禁用',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'label',
                desc: '描述文本',
                type: 'React.ReactNode | string',
                default: '-',
            }, {
                attr: 'maxLength',
                desc: '最大长度',
                type: 'Number',
                default: '-',
            }, {
                attr: 'maxHeight',
                desc: '最大高度',
                type: 'Number',
                default: '-',
            }, {
                attr: 'placeholder',
                desc: '占位内容',
                type: 'String',
                default: '-',
            }, {
                attr: 'readOnly',
                desc: '是否只读',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'value',
                desc: '当前值',
                type: 'String',
                default: '-',
            }, {
                attr: 'onChange',
                desc: 'change事件的回调',
                type: '(value: string, event: any) => {}',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Textarea 多行输入框"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/textarea"
                    description="多行输入框组件。"
                />
            </Content>
        );
    }
}
