import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';
import ButtonGroup from '../../src/components/Button/ButtonGroup';

interface ButtonApiProps extends BaseProps {
}

export default class ButtonApi extends React.PureComponent<ButtonApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-ButtonApi',
    };

    getCode() {
        return `import * as React from 'react';
import Button, { ButtonGroup } from '../components/Button';
import Icon from '../components/Icon';
import {Content} from '../components/Page';

export default class ButtonCase extends React.PureComponent {
    render() {
        return (
            < Content className="ButtonCase'>
                <div className="CasePanel">
                    <Button>Default</Button>
                    <Button theme="primary">Primary</Button>
                    <Button theme="info">Info</Button>
                    <Button theme="success">Success</Button>
                    <Button theme="warning">Warning</Button>
                    <Button theme="danger">Danger</Button>
                </div>
                <div className="CasePanel">
                    <Button theme="primary" block={true}>Block Button</Button>
                </div>
                <div className="CasePanel">
                    <Button theme="primary" size="lg">LARGE</Button>
                    <Button theme="primary">MEDIUM</Button>
                    <Button theme="primary" size="sm">SMALL</Button>
                </div>
                <div className="CasePanel">
                    <Button disabled={true}>Disabled</Button>
                    <Button theme="primary" disabled={true}>Disabled</Button>
                </div>
                <div className="CasePanel">
                    <Button theme="primary">
                        <Icon icon="tag_faces"/>
                        Block Button
                    </Button>
                </div>
                <div className="CasePanel">
                    <Button theme="primary" size="lg" shape="circle">
                        <Icon icon="tag_faces" size="2x"/>
                    </Button>
                    <Button theme="primary" shape="circle">
                        <Icon icon="tag_faces"/>
                    </Button>
                </div>
                <div className="CasePanel">
                    <Button theme="primary">
                        <Icon icon="tag_faces"/>
                        Block Button
                    </Button>
                </div>
                <div className="CasePanel">
                    <Button flat={true}>Default</Button>
                    <Button theme="primary" flat={true}>Primary</Button>
                    <Button theme="info" flat={true}>Info</Button>
                    <Button theme="success" flat={true}>Success</Button>
                    <Button theme="warning" flat={true}>Warning</Button>
                    <Button theme="danger" flat={true}>Danger</Button>
                </div>
                <div className="CasePanel">
                    <ButtonGroup>
                        <Button theme="primary">Button</Button>
                        <Button theme="primary">Button</Button>
                        <Button theme="primary">Button</Button>
                    </ButtonGroup>
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
            name: 'ButtonGroup',
            fields: this.getFields(),
            attributes: [{
                attr: 'dir',
                desc: '按钮组排列方向',
                type: 'horizontal | vertical',
                default: 'horizontal',
            }],
        }, {
            name: 'Button',
            fields: this.getFields(),
            attributes: [{
                attr: 'block',
                desc: '以块元素显示',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'disabled',
                desc: '是否禁用',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'flat',
                desc: '幽灵属性，使按钮背景透明',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'float',
                desc: '设置浮动。可选值： top-left | top-right | bottom-left | bottom-right',
                type: 'String',
                default: '-',
            }, {
                attr: 'htmlType',
                desc: '设置 button 原生的 type 值，可选值请参考 HTML 标准',
                type: 'String',
                default: 'button',
            }, {
                attr: 'shape',
                desc: '设置按钮形状，可选值为 circle 或者不设',
                type: 'String',
                default: '-',
            }, {
                attr: 'size',
                desc: '按钮尺寸，可选值：lg 或 sm，也可不设',
                type: 'String',
                default: '-',
            }, {
                attr: 'to',
                desc: '当设置链接时，会以a标签显示',
                type: 'String',
                default: '-',
            }, {
                attr: 'type',
                desc: '设置按钮类型，可选值：\'default\' | \'primary\' | \'info\' | \'success\' | \'warning\' | \'danger\'，也可不选',
                type: 'String',
                default: 'default',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Button 按钮"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/button"
                    description="按钮用于开始一个即时操作。"
                />
                <div className="padding-left-20 padding-right-20">
                    <h3>ButtonGroup</h3>
                    <p>按钮组</p>
                </div>
            </Content>
        );
    }
}
