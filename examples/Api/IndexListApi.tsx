import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface IndexListApiProps extends BaseProps {
}

export default class IndexListApi extends React.PureComponent<IndexListApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-IndexListApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import {Content} from '../components/Page';
import IndexList, {IndexSection} from '../components/IndexList';

interface IndexListCaseProps extends BaseProps {
}

export default class IndexListCase extends React.Component< IndexListCaseProps, any> {
    static defaultProps: IndexListCaseProps = {
        prefixCls: 'bm-IndexListCase'
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls,
            className
        );
        return (
            <Content className={styleClass}>
                <IndexList>
                    <IndexSection index="A">
                        <span>a</span>
                        <span>a</span>
                        <span>a</span>
                    </IndexSection>
                    <IndexSection index="B">
                        <span>b</span>
                        <span>a</span>
                        <span>a</span>
                        <span>a</span>
                    </IndexSection>
                    <IndexSection index="C">
                        <span>b</span>
                        <span>a</span>
                        <span>a</span>
                        <span>a</span>
                    </IndexSection>
                    <IndexSection index="D">
                        <span>b</span>
                        <span>a</span>
                        <span>a</span>
                        <span>a</span>
                    </IndexSection>
                    <IndexSection index="E">
                        <span>b</span>
                        <span>a</span>
                        <span>a</span>
                        <span>a</span>
                    </IndexSection>
                </IndexList>
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
            name: 'IndexSection',
            fields: this.getFields(),
            attributes: [{
                attr: 'index',
                desc: '索引值。必需。',
                type: 'String',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="IndexList 索引列表"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/indexList"
                    description="索引列表，可由右侧索引导航快速定位到相应的内容。"
                />
                <div className="padding-left-20 padding-right-20">
                    <h3>IndexList</h3>
                    <p>索引列表组</p>
                </div>
            </Content>
        );
    }
}
