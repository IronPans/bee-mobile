import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Timeline, {TimelineItem} from '../../src/components/Timeline';
import {Content} from '../../src/components/Page';

interface TimelineCaseProps extends BaseProps {
}

export default class TimelineCase extends React.PureComponent<TimelineCaseProps, {}> {
    static defaultProps: TimelineCaseProps = {
        prefixCls: 'bm-TimelineCase',
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls,
            className,
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Timeline>
                        <TimelineItem>
                            <div className="bm-Paper-4dp padding-10">
                               <span className="text-bold"> 8:00</span> File preparation
                            </div>
                        </TimelineItem>
                        <TimelineItem>
                            <div className="bm-Paper-4dp padding-10">
                                <p className="no-margin">
                                    <span className="text-bold">10:00</span> Webshop mockups discussions
                                </p>
                                <p className="no-margin">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit aliqua.
                                </p>
                            </div>
                        </TimelineItem>
                    </Timeline>
                </div>
            </Content>
        );
    }
}
