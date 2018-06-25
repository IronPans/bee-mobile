import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Icon from '../../src/components/Icon';

interface PhoneViewProps extends BaseProps {
    frameUrl?: string;
}

export default class PhoneView extends React.PureComponent<PhoneViewProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-PhoneView',
    };

    render() {
        const {className, frameUrl, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className,
        );
        return (
            <div className={styleClass}>
                <div className="device-header">
                    <div className="device-nav">
                        <span className="device-nav-dian">.....</span>
                        <div className="device-nav-line"/>
                        <Icon icon="battery_full" size="1x" className="device-battery" rotate="rotate-90"/>
                    </div>
                </div>
                <div className="device-container">
                    <iframe src={frameUrl} frameBorder="0" width="318" height="502"/>
                </div>
                <div className="device-footer"/>
            </div>
        );
    }
}
