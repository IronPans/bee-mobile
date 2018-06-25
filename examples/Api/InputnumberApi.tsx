import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface InputnumberApiProps extends BaseProps {
}

export default class InputnumberApi extends React.PureComponent<InputnumberApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-InputnumberApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import InputNumber from '../components/InputNumber';
import {Content} from '../components/Page';

interface InputNumberCaseProps extends BaseProps {
}

interface InputNumberCaseState {
    value: number;
}

export default class InputNumberCase extends React.PureComponent< InputNumberCaseProps, InputNumberCaseState> {
    handleChange = (event: any) => {
        console.log(event);
    };
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'InputNumberCase',
            className
        );
        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <InputNumber defaultValue={10} onChange={this.handleChange}/>
                </div>
                <div className="CasePanel">
                    <InputNumber step={5}/>
                </div>
                <div className="CasePanel">
                    <InputNumber step={0.1}/>
                </div>
                <div className="CasePanel">
                    <InputNumber min={0} max={10}/>
                </div>
                <div className="CasePanel">
                    <InputNumber type={2}/>
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
                attr: 'defaultValue',
                desc: '初始值',
                type: 'Number',
                default: '-',
            }, {
                attr: 'min',
                desc: '最小值',
                type: 'Number',
                default: 'Infinity',
            }, {
                attr: 'max',
                desc: '最大值',
                type: 'Number',
                default: 'Infinity',
            }, {
                attr: 'step',
                desc: '步长，可以为小数',
                type: 'Number',
                default: '1',
            }, {
                attr: 'type',
                desc: '类型，可选为2',
                type: 'Number',
                default: '-',
            }, {
                attr: 'value',
                desc: '当前值',
                type: 'Number',
                default: '-',
            }, {
                attr: 'onChange',
                desc: '变化回调',
                type: '(index: number) => void',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="InputNumber 数字输入框"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/inputnumber"
                    description="通过键盘，输入范围内的数值。"
                />
            </Content>
        );
    }
}
