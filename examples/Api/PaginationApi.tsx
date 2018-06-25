import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface PaginationApiProps extends BaseProps {
}

export default class PaginationApi extends React.PureComponent<PaginationApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-PaginationApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Pagination from '../components/Pagination';
import {Content} from '../components/Page';

interface PaginationCaseProps extends BaseProps {
}

export default class PaginationCase extends React.PureComponent< PaginationCaseProps, any> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'PaginationCase',
            className
        );
        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <Pagination total={50} pageSize={10}/>
                </div>
                <div className="CasePanel">
                    <Pagination shape="circle" total={50} pageSize={10}/>
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
            name: 'Pagination',
            fields: this.getFields(),
            attributes: [{
                attr: 'maxPage',
                desc: '最大页码',
                type: 'number',
                default: '5',
            }, {
                attr: 'pageSize',
                desc: '每页条数',
                type: 'number',
                default: '10',
            }, {
                attr: 'shape',
                desc: '按钮形状，可选"circle"',
                type: 'String',
                default: '-',
            }, {
                attr: 'total',
                desc: '数据总数',
                type: 'number',
                default: '-',
            }, {
                attr: 'value',
                desc: '当前页数',
                type: 'number',
                default: '1',
            }, {
                attr: 'onPageChange',
                desc: '页码改变的回调',
                type: '(value) => void',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Pagination 分页"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/pagination"
                    description="采用分页的形式分隔长列表，每次只加载一个页面。"
                />
            </Content>
        );
    }
}
