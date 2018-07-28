import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface DatetimePickerApiProps extends BaseProps {
}

export default class DatetimePickerApi extends React.PureComponent<DatetimePickerApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-DatetimePickerApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import DatetimePicker from '../../src/components/DatetimePicker';
import {Content} from '../../src/components/Page';

interface DatetimePickerCaseProps extends BaseProps {
}

interface DatetimePickerCaseState {
    visible?: boolean;
}

export default class DatetimePickerCase extends React.PureComponent< DatetimePickerCaseProps, DatetimePickerCaseState> {
    state: DatetimePickerCaseState = {
        visible: false,
    };

    handleClose = () => {
        this.setState({
            visible: false,
        });
    }

    handleChange = (event: any) => {
        const ev = event;
    }

    handleOpen = () => {
        this.setState({
            visible: true,
        });
    }

    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'DatetimePickerCase',
            className,
        );
        const {visible} = this.state;
        return (
            <Content className={styleClass}>
                <section className="CasePanel">
                    <DatetimePicker
                        visible={visible}
                        minDate="2010/1/1"
                        onOpen={this.handleOpen}
                        onOk={this.handleChange}
                        onClose={this.handleClose}
                    />
                </section>
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
            name: 'Badge',
            fields: this.getFields(),
            attributes: [{
                attr: 'defaultValue',
                desc: '默认日期。',
                type: 'Date | string',
                default: '当前日期',
            }, {
                attr: 'minDate',
                desc: '设置最小年份。',
                type: 'Date | string',
                default: '2000/1/1',
            }, {
                attr: 'maxDate',
                desc: '设置最大年份。',
                type: 'Date | string',
                default: '2020/1/1',
            }, {
                attr: 'visible',
                desc: '是否显示',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'onOk',
                desc: '点击选中时执行的回调。',
                type: '(value: string) => void',
                default: 'noop',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="DatetimePicker 日期选择器"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/datetimePicker"
                    description="用于选择日期或者时间。"
                />
            </Content>
        );
    }
}
