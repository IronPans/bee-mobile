import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';
import HighlightCode from '../../src/components/HighlightCode';

interface BreadcrumbApiProps extends BaseProps {
}

export default class BreadcrumbApi extends React.PureComponent<BreadcrumbApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-BreadcrumbApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Breadcrumb from '../components/Breadcrumb';
import {Content} from '../components/Page';
import Icon from '../components/Icon';

interface BreadcrumbCaseProps extends BaseProps {
}

export default class BreadcrumbCase extends React.Component< BreadcrumbCaseProps, {}> {
    static defaultProps: BreadcrumbCaseProps = {
        prefixCls: 'fy-BreadcrumbCase'
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls,
            className
        );
        const menus = [
            {name: 'Homepage', icon: (<Icon icon="home"/>)},
            {name: 'item 1'},
            {name: 'item 2'}
        ];
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Breadcrumb menus={menus}/>
                </div>
                <div className="CasePanel">
                    <Breadcrumb menus={menus} separator="|"/>
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
            'ApiContent', prefixCls, className,
        );
        const data = [{
            name: 'Breadcrumb',
            fields: this.getFields(),
            attributes: [{
                attr: 'menus',
                desc: '展示的数字值',
                type: 'Array<{title, icon}>',
                default: '-',
            }, {
                attr: 'separator',
                desc: '分隔符自定义',
                type: 'React.ReactNode | string',
                default: '/',
            }],
        }];
        const code = `export interface BreadcrumbItem &#123;{
    name?: React.ReactNode;
    icon?: React.ReactNode;
}`;
        return (
            <Content className={styleClass}>
                <PageView
                    title="Breadcrumb 面包屑导航"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/breadcrumb"
                    description="显示当前页面在系统层级结构中的位置，并能向上返回。"
                />
                <div className="padding-left-20 padding-right-20">
                    <h3>BreadcrumbItem</h3>
                    <div>
                        <HighlightCode>{code}</HighlightCode>
                    </div>
                </div>
            </Content>
        );
    }
}
