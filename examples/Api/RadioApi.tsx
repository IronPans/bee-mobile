import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface RadioApiProps extends BaseProps {
}

export default class RadioApi extends React.PureComponent<RadioApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-RadioApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import Radio from '../components/Radio';
import {BaseProps} from '../components/common/BaseProps';
import {Content} from '../components/Page';

interface Props extends BaseProps {}

export default class RadioCase extends React.PureComponent< Props, {}> {
    state = {
        value: ''
    };
    radios = [
        {
            value: 'Movie',
            label: 'Movie'
        }, {
            value: 'Food',
            label: 'Food'
        }, {
            value: 'Game',
            label: 'Game'
        }
    ];

    handleChange = (event: any) => {
        this.setState({
            value: event.value,
        });
    }
    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'RadioCase',
            className
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    {
                        this.radios.map((radio, i) => {
                            return (
                                <Radio key={i} name="love" value={radio.value} checked={radio.value === this.state.value}
                                       onChange={this.handleChange.bind(this)}>
                                    {radio.label}
                                </Radio>
                            );
                        })
                    }
                    <div className="margin-top-10">
                        当前选中值：{this.state.value}
                    </div>
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
            name: 'Radio',
            fields: this.getFields(),
            attributes: [{
                attr: 'checked',
                desc: '指定当前是否选中',
                type: 'Boolean',
                default: '-',
            }, {
                attr: 'defaultChecked',
                desc: '初始是否选中',
                type: 'Boolean',
                default: '-',
            }, {
                attr: 'disabled',
                desc: '是否禁用',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'name',
                desc: 'name',
                type: 'String',
                default: '-',
            }, {
                attr: 'onChange',
                desc: 'change 事件触发的回调函数',
                type: '({checked, value}, event) => void',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Radio 单选框"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/radio"
                    description="单选框。"
                />
            </Content>
        );
    }
}
