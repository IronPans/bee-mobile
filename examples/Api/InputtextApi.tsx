import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface InputtextApiProps extends BaseProps {
}

export default class InputtextApi extends React.PureComponent<InputtextApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-InputtextApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Inputtext from '../components/Inputtext';
import Icon from '../components/Icon';
import Textarea from '../components/Textarea';
import {Content} from '../components/Page';

interface InputtextCaseProps extends BaseProps {
}

export default class InputtextCase extends React.PureComponent< InputtextCaseProps, any> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'InputtextCase',
            className
        );
        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <Inputtext placeholder="Search"/>
                </div>
                <div className="CasePanel">
                    <Inputtext placeholder="Large size" size="lg"/>
                    <Inputtext placeholder="Default size" className="margin-top-10"/>
                    <Inputtext placeholder="Small size" size="xs" className="margin-top-10"/>
                </div>
                <div className="CasePanel">
                    <Inputtext placeholder="Search" label="Name"/>
                </div>
                <div className="CasePanel">
                    <Inputtext placeholder="Search" label="Name" inline={true}/>
                </div>
                <div className="CasePanel">
                    <Inputtext animated={true} label="Name"/>
                </div>
                <div className="CasePanel">
                    <Inputtext placeholder="Money" startAdorn={<Icon icon="local_grocery_store"/>} endAdorn="$"/>
                </div>
                <div className="CasePanel">
                    <Textarea placeholder="Search"/>
                </div>
                <div className="CasePanel">
                    <Textarea animated={true} label="Name"/>
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
            name: 'Calendar',
            fields: this.getFields(),
            attributes: [{
                attr: 'autoFocus',
                desc: '是否自动获取焦点',
                type: 'Boolean',
                default: 'false',
            }, {
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
                attr: 'endAdorn',
                desc: '额外的右边',
                type: 'React.ReactNode',
                default: '-',
            }, {
                attr: 'id',
                desc: '设置id',
                type: 'String',
                default: '-',
            }, {
                attr: 'inline',
                desc: '是否内联',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'label',
                desc: 'label',
                type: 'React.ReactNode | String',
                default: '-',
            }, {
                attr: 'maxLength',
                desc: '最大字数',
                type: 'Number',
                default: '-',
            }, {
                attr: 'placeholder',
                desc: 'placeholder',
                type: 'String',
                default: '-',
            }, {
                attr: 'readOnly',
                desc: '是否只读',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'size',
                desc: '设置尺寸。可选值：lg | sm | xs',
                type: 'String',
                default: 'sm',
            }, {
                attr: 'startAdorn',
                desc: '额外的左边',
                type: 'React.ReactNode',
                default: '-',
            }, {
                attr: 'type',
                desc: 'input的类型',
                type: 'String',
                default: 'text',
            }, {
                attr: 'onChange',
                desc: 'change事件的回调',
                type: '(value: string): void',
                default: '-',
            }, {
                attr: 'onFocus',
                desc: 'focus事件的回调',
                type: 'Function',
                default: '-',
            }, {
                attr: 'onBlur',
                desc: 'blur事件的回调',
                type: 'Function',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Inputtext 输入框"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/inputtext"
                    description="输入框。"
                />
            </Content>
        );
    }
}
