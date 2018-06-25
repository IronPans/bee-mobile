import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';
import HighlightCode from '../../src/components/HighlightCode/HighlightCode';

interface ChipApiProps extends BaseProps {
}

export default class ChipApi extends React.PureComponent<ChipApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-ChipApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import {Content} from '../components/Page';
import Chip, {ChipNode, ChipGroup} from '../components/Chip';
import Avatar from '../components/Avatar';

interface ChipCaseProps extends BaseProps {
}

export default class ChipCase extends React.PureComponent< ChipCaseProps, any> {
    chipData: Array<ChipNode> = [
        {
            label: 'CSS',
            value: 'CSS'
        },
        {
            label: 'Javascript',
            value: 'Javascript'
        }
    ];
    handleDelete = (event: any) => {
        console.log(event);
    };
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'ChipCase', className
        );
        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <Chip active={true} label="Javascript"/>
                    <Chip avatar={
                        <Avatar src="assets/images/users/1.jpg"/>
                    } label="Javascript"/>
                    <Chip avatar={
                        <Avatar src="assets/images/users/1.jpg"/>
                    } label="Javascript" onDelete={this.handleDelete}/>
                </div>
                <div className="CasePanel">
                    <ChipGroup data={this.chipData} placeholder="Love"/>
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
            name: 'Chip',
            fields: this.getFields(),
            attributes: [{
                attr: 'avatar',
                desc: '展示的数字值',
                type: 'number',
                default: '-',
            }, {
                attr: 'active',
                desc: '是否激活',
                type: 'boolean',
                default: 'false',
            }, {
                attr: 'label',
                desc: '文本描述',
                type: 'React.ReactNode | String',
                default: '-',
            }, {
                attr: 'close',
                desc: '是否显示删除按钮',
                type: 'boolean',
                default: 'false',
            }, {
                attr: 'value',
                desc: '设置数据值',
                type: 'any',
                default: '-',
            }, {
                attr: 'onClick',
                desc: 'click事件的回调函数',
                type: '({label, value}) => void',
                default: '-',
            }, {
                attr: 'onDelete',
                desc: '删除的回调函数',
                type: '({label, value}) => void',
                default: '-',
            }],
        }, {
            name: 'ChipGroup',
            fields: this.getFields(),
            attributes: [{
                attr: 'data',
                desc: '导航菜单组',
                type: 'Array< ChipNode>',
                default: '-',
            }, {
                attr: 'placeholder',
                desc: '表单提示，同时也是输入框的开关',
                type: 'String',
                default: '-',
            }, {
                attr: 'onClick',
                desc: 'click事件的回调函数',
                type: '({label, value}) => void',
                default: '-',
            }, {
                attr: 'onDelete',
                desc: '删除的回调函数',
                type: '({label, value}) => void',
                default: '-',
            }],
        }];
        const code = `export interface ChipNode {
    avatar?: React.ReactNode;
    label?: string;
    value?: any;
}`;
        return (
            <Content className={styleClass}>
                <PageView
                    title="Chip 面包屑导航"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/chip"
                    description="面包屑导航。"
                />
                <div className="padding-left-20 padding-right-20">
                    <h3>ChipNode</h3>
                    <p>数据类型</p>
                    <HighlightCode lang="typescript">
                        {code}
                    </HighlightCode>
                </div>
            </Content>
        );
    }
}
