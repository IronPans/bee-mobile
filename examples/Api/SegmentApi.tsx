import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';
import Segment from '../../src/components/Segment';

interface SegmentApiProps extends BaseProps {
}

export default class SegmentApi extends React.PureComponent<SegmentApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-SegmentApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import Segment from '../../src/components/Segment';

interface SegmentCaseProps extends BaseProps {
}

export default class SegmentCase extends React.PureComponent< SegmentCaseProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-SegmentCase'
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Segment value={['Segment1', 'Segment2', 'Segment3']}/>
                </div>
                <div className="CasePanel">
                    <Segment activeIndex={1} value={['Segment1', 'Segment2', 'Segment3']}/>
                </div>
                <div className="CasePanel">
                    <Segment activeIndex={1} disabled={true} value={['Segment1', 'Segment2', 'Segment3']}/>
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
            name: 'Segment',
            fields: this.getFields(),
            attributes: [{
                attr: 'activeIndex',
                desc: '选中项在数组中的索引',
                type: 'Number',
                default: '0',
            }, {
                attr: 'disabled',
                desc: '是否启用',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'value',
                desc: '选项数组,值是字符串',
                type: 'Array< string>',
                default: '[]',
            }, {
                attr: 'onChange',
                desc: '回调函数, 其中index是选中项索引, value是选中的值.',
                type: '(index, value): void',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Segment 分段器"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/segment"
                    description="由至少 2 个分段控件组成，用作不同视图的显示"
                />
            </Content>
        );
    }
}
