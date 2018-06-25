import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';
import SearchBar from '../../src/components/SearchBar/SearchBar';

interface SearchBarApiProps extends BaseProps {
}

export default class SearchBarApi extends React.PureComponent<SearchBarApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-SearchBarApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import SearchBar from '../components/SearchBar';
import {Content} from '../components/Page';

interface SearchBarCaseProps extends BaseProps {
}

export default class SearchBarCase extends React.PureComponent< SearchBarCaseProps, any> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'SearchBarCase',
            className
        );
        return (
            <Content className={styleClass} {...other}>
                <section className="CasePanel">
                    <SearchBar/>
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
            name: 'SearchBar',
            fields: this.getFields(),
            attributes: [{
                attr: 'autoFocus',
                desc: '是否自动获取焦点',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'cancelText',
                desc: 'cancel按钮。',
                type: 'React.ReactNode',
                default: '取消',
            }, {
                attr: 'defaultValue',
                desc: '初始化值。',
                type: 'String',
                default: '-',
            }, {
                attr: 'disabled',
                desc: '是否禁用',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'maxLength',
                desc: '最大长度',
                type: 'Number',
                default: '-',
            }, {
                attr: 'placeholder',
                desc: 'placeholder',
                type: 'String',
                default: '输入关键字...',
            }, {
                attr: 'onCancel',
                desc: '点击取消按钮的回调',
                type: 'Function',
                default: '-',
            }, {
                attr: 'onChange',
                desc: 'change事件的回调',
                type: '(value: string) => void',
                default: '-',
            }, {
                attr: 'onSubmit',
                desc: '点击enter键的回调',
                type: '(value: string) => void',
                default: '-',
            }, {
                attr: 'onFocus',
                desc: 'focus事件的回调。',
                type: 'Function',
                default: '-',
            }, {
                attr: 'onBlur',
                desc: 'blur事件的回调。',
                type: 'Function',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="SearchBar 搜索框"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/searchBar"
                    description="搜索框，可显示搜索结果列表。。"
                />
            </Content>
        );
    }
}
