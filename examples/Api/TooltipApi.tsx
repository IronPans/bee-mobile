import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface TooltipApiProps extends BaseProps {
}

export default class TooltipApi extends React.PureComponent<TooltipApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-TooltipApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import Tooltip from '../components/Tooltip';
import Button from '../components/Button';
import {BaseProps} from '../components/common/BaseProps';
import {Content} from '../components/Page';

interface TooltipCaseProp extends BaseProps {
}

export default class TooltipCase extends React.PureComponent< TooltipCaseProp, {}> {
    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'TooltipCase',
            className
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Tooltip title="文本提示">
                        <Button theme="primary">Bottom</Button>
                    </Tooltip>

                    <Tooltip title="文本提示" dir="right">
                        <Button theme="primary">Right</Button>
                    </Tooltip>


                    <Tooltip title="文本提示" dir="left">
                        <Button theme="primary">Left</Button>
                    </Tooltip>


                    <Tooltip title="文本提示" dir="top">
                        <Button theme="primary">Top</Button>
                    </Tooltip>
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
            name: 'Tooltip',
            fields: this.getFields(),
            attributes: [{
                attr: 'delay',
                desc: '自动消失的时间',
                type: 'Number',
                default: '1000',
            }, {
                attr: 'dir',
                desc: '设置位置。可选值：top | right | bottom | left',
                type: 'String',
                default: 'bottom',
            }, {
                attr: 'title',
                desc: '提示内容',
                type: 'String',
                default: '-',
            }, {
                attr: 'onOpen',
                desc: '打开时触发的回调',
                type: 'Function',
                default: '-',
            }, {
                attr: 'onClose',
                desc: '关闭时触发的回调',
                type: 'Function',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Tooltip 提示框"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/tooltip"
                    description="提示框。"
                />
            </Content>
        );
    }
}
