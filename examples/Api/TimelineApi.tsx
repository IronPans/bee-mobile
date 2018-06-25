import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface TimelineApiProps extends BaseProps {
}

export default class TimelineApi extends React.PureComponent<TimelineApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-TimelineApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Timeline, {TimelineItem} from '../components/Timeline';
import {Content} from '../components/Page';

interface TimelineCaseProps extends BaseProps {
}

export default class TimelineCase extends React.PureComponent< TimelineCaseProps, {}> {
    static defaultProps: TimelineCaseProps = {
        prefixCls: 'bm-TimelineCase'
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls,
            className
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Timeline>
                        <TimelineItem title='2018-03-10'>
                            content
                        </TimelineItem>
                        <TimelineItem title='2018-03-10'>
                            content
                        </TimelineItem>
                    </Timeline>
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
            name: 'Timeline',
            fields: this.getFields(),
            attributes: [{
                attr: 'title',
                desc: '设置标题',
                type: 'React.ReactNode',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Timeline 时间轴"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/timeline"
                    description="制作出垂直时间轴效果。"
                />
                <div className="padding-left-20 padding-right-20">
                    <h3>TimelineItem</h3>
                    <p>时间子项</p>
                </div>
            </Content>
        );
    }
}
