import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface AutocompleteApiProps extends BaseProps {
}

export default class AutocompleteApi extends React.PureComponent<AutocompleteApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-AutocompleteApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Autocomplete from '../components/Autocomplete';
import {Content} from '../components/Page';

interface AutocompleteCaseProps extends BaseProps {
}

export default class AutocompleteCase extends React.PureComponent< AutocompleteCaseProps, any> {
    render() {
        const suggestions = [
            { label: 'Afghanistan' },
            { label: 'Aland Islands' },
            { label: 'Albania' },
            { label: 'Algeria' },
            { label: 'American Samoa' },
            { label: 'Andorra' },
            { label: 'Angola' },
            { label: 'Anguilla' },
            { label: 'Antarctica' },
            { label: 'Antigua and Barbuda' },
            { label: 'Argentina' },
            { label: 'Armenia' },
            { label: 'Aruba' },
            { label: 'Australia' },
            { label: 'Austria' },
            { label: 'Azerbaijan' },
            { label: 'Bahamas' },
            { label: 'Bahrain' },
            { label: 'Bangladesh' },
            { label: 'Barbados' },
            { label: 'Belarus' },
            { label: 'Belgium' },
            { label: 'Belize' },
            { label: 'Benin' },
            { label: 'Bermuda' },
            { label: 'Bhutan' },
            { label: 'Bolivia, Plurinational State of' },
            { label: 'Bonaire, Sint Eustatius and Saba' },
            { label: 'Bosnia and Herzegovina' },
            { label: 'Botswana' },
            { label: 'Bouvet Island' },
            { label: 'Brazil' },
            { label: 'British Indian Ocean Territory' },
            { label: 'Brunei Darussalam' },
        ];
        const {className} = this.props;
        const styleClass = classNames(
            'AutocompleteCase',
            className
        );
        return (
            <Content className={styleClass}>
                <section className="CasePanel">
                    <Autocomplete maxHeight="300px" count={-1} data={suggestions}/>
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
            name: 'Autocomplete',
            fields: this.getFields(),
            attributes: [{
                attr: 'data',
                desc: '数据源',
                type: 'Array',
                default: '-',
            }, {
                attr: 'count',
                desc: '显示多少条。当设为-1时，表示显示所有',
                type: 'Number',
                default: '5',
            }, {
                attr: 'inline',
                desc: '是否内联',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'maxHeight',
                desc: '当设置maxHeight时，会自动出现滚动条',
                type: 'Number | String',
                default: '-',
            }, {
                attr: 'startAdorn',
                desc: '额外的左边',
                type: 'React.ReactNode',
                default: '-',
            }, {
                attr: 'onChange',
                desc: 'change 事件触发的回调函数',
                type: '(value: string) => void',
                default: 'noop',
            }, {
                attr: 'onSelect',
                desc: '选择建议项的回调函数',
                type: '(value: any) => void',
                default: 'noop',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    data={data}
                    app="适用平台：WEB"
                    title="Autocomplete 自动完成"
                    code={this.getCode()}
                    frameUrl="#/components/autocomplete"
                    description="输入框自动完成。"
                />
            </Content>
        );
    }
}
