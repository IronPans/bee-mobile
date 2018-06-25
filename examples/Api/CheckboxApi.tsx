import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface CheckboxApiProps extends BaseProps {
}

export default class CheckboxApi extends React.PureComponent<CheckboxApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-CheckboxApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import Checkbox from '../components/Checkbox';
import {BaseProps} from '../components/common/BaseProps';
import {Content} from '../components/Page';

interface CheckboxProps extends BaseProps {
}

export default class CheckboxCase extends React.PureComponent< CheckboxProps, {}> {
    state = {
        value: []
    };
    checkboxs = [
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
        const value = event.value;
        let selectedValue: any = [...this.state.value];
        if (event.checked) {
            selectedValue.push(value);
        } else {
            selectedValue = selectedValue.filter((v: any) => {
                return v !== value;
            })
        }
        this.setState({
            value: selectedValue
        });
    };

    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'CheckboxCase', className
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    {
                        this.checkboxs.map((radio, i) => {
                            return (
                                <Checkbox key={i} value={radio.value} onChange={this.handleChange.bind(this)}>
                                    {radio.label}
                                </Checkbox>
                            );
                        })
                    }
                    <div className="margin-top-10">
                        当前选中值：
                        {
                            this.state.value.map((value: string) => {
                                return (<span className="padding-left-10">{value}</span>)
                            })
                        }
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
        const data: any = [{
            name: 'Checkbox',
            fields: this.getFields(),
            attributes: [
                {
                    attr: 'checked',
                    desc: '指定当前是否选中',
                    type: 'Boolean',
                    default: '-',
                },
                {
                    attr: 'defaultChecked',
                    desc: '初始是否选中',
                    type: 'Boolean',
                    default: '-',
                },
                {
                    attr: 'disabled',
                    desc: '是否禁用',
                    type: 'Boolean',
                    default: 'false',
                },
                {
                    attr: 'onChange',
                    desc: 'change 事件触发的回调函数',
                    type: '({checked, value}, event) => void',
                    default: '-',
                },
            ],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Checkbox 复选框"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/checkbox"
                    description="复选框。"
                />
            </Content>
        );
    }
}
