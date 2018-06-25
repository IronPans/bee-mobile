import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import Segment from '../../src/components/Segment';

interface SegmentCaseProps extends BaseProps {
}

export default class SegmentCase extends React.PureComponent<SegmentCaseProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-SegmentCase',
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className,
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
}
