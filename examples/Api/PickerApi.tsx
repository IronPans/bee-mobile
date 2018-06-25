import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';
import HighlightCode from '../../src/components/HighlightCode/HighlightCode';

interface PickerApiProps extends BaseProps {
}

export default class PickerApi extends React.PureComponent<PickerApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-PickerApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Picker from '../components/Picker';
import {city} from './common/City';
import {Content} from '../components/Page';

interface PickerCaseProps extends BaseProps {
}

export default class PickerCase extends React.PureComponent< PickerCaseProps, {}> {

    handleChange = (event: any) => {
        console.log(event);
    };

    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'PickerCase', className
        );
        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <Picker data={city} onChange={this.handleChange}/>
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
            name: 'Picker',
            fields: this.getFields(),
            attributes: [{
                attr: 'disabled',
                desc: '是否禁用',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'data',
                desc: '数据源',
                type: 'Array< MPickerChild>',
                default: '-',
            }, {
                attr: 'format',
                desc: '分隔符，当设置value为字符串时起作用',
                type: 'String',
                default: '/',
            }, {
                attr: 'onChange',
                desc: '选中后的回调',
                type: '({event, value, data}) => void',
                default: '-',
            }, {
                attr: 'onValueChange',
                desc: '选中某一项时的回调。当异步获取数据时，可在这里加载数据',
                type: '({value, index}) => void',
                default: '-',
            }, {
                attr: 'value',
                desc: '值，格式是[value1, value2, value3], 对应数据源的相应级层value，也可以是value1/value2/value3',
                type: 'Array< any> | string',
                default: '-',
            }, {
                attr: 'visible',
                desc: '是否开启',
                type: 'Boolean',
                default: 'false',
            }],
        }];
        const code = `export interface PickerNode {
    label?: string;
    value?: any;
    children?: any[]
}`;
        return (
            <Content className={styleClass}>
                <PageView
                    title="Picker 选择器"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/Picker"
                    description="在一组预设数据中进行选择。"
                />
                <div className="padding-left-20 padding-right-20">
                    <h3>PickerNode</h3>
                    <p>数据类型</p>
                    <HighlightCode lang="typescript">
                        {code}
                    </HighlightCode>
                </div>
            </Content>
        );
    }
}
