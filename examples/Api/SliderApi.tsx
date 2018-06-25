import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface SliderApiProps extends BaseProps {
}

export default class SliderApi extends React.PureComponent<SliderApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-SliderApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Slider from '../components/Slider';
import {Content} from '../components/Page';

interface SliderCaseProps extends BaseProps {
}

export default class SliderCase extends React.PureComponent< SliderCaseProps, any> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'SliderCase',
            className
        );
        return (
            <Content className={styleClass} {...other}>
                <section className="padding-20">
                    <Slider start="0" end="100"/>
                    <Slider className="padding-20" value={50} disabled={true}/>
                </section>
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
            name: 'Slider',
            fields: this.getFields(),
            attributes: [{
                attr: 'disabled',
                desc: '是否禁用',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'end',
                desc: '前置文本',
                type: 'React.ReactNode | string',
                default: '-',
            }, {
                attr: 'max',
                desc: '最大值',
                type: 'Number',
                default: '100',
            }, {
                attr: 'min',
                desc: '最小值',
                type: 'Number',
                default: '0',
            }, {
                attr: 'start',
                desc: '后置文本',
                type: 'React.ReactNode | string',
                default: '-',
            }, {
                attr: 'step',
                desc: '步长',
                type: 'Number',
                default: '1',
            }, {
                attr: 'vertical',
                desc: '以垂直模式显示',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'value',
                desc: '设置当前值',
                type: 'Number',
                default: '0',
            }, {
                attr: 'onChange',
                desc: '值改变的函数',
                type: '(index: number) => void',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Slider 滑动输入条"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/slider"
                    description="滑动型输入器，展示当前值和可选范围。"
                />
            </Content>
        );
    }
}
