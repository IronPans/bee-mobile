import * as React from 'react';
import * as classNames from 'classnames';
import {getOtherProperties} from '../common/Utils';
import {ProgressProps, ProgressState} from './PropsType';

export default class Progress extends React.PureComponent<ProgressProps, ProgressState> {
    static defaultProps = {
        completeColor: '#26a69a',
        loading: false,
        showValue: false,
        striped: false,
        animated: false,
        prefixCls: 'bm-Progress',
    };

    constructor(props: ProgressProps) {
        super(props);
        let value = 0;
        if (props.value! > 0) {
            value = props.value!;
        }
        this.state = {
            value,
        };
    }

    componentWillReceiveProps(nextProps: ProgressProps) {
        if ('value' in nextProps && this.props.value !== nextProps.value) {
            this.setState({
                value: nextProps.value!,
            }, () => {
                if (this.props.onComplete && nextProps.value === 100) {
                    (this.props.onComplete as () => void)();
                }
            });
        }
    }

    render() {
        const {animated, className, completeColor, children, height, loading,
            showValue, striped, width, prefixCls, ...other}: any = this.props;
        let barColor = this.props.barColor;
        const styleClass = classNames(
            prefixCls,
            {
                [`${prefixCls}-striped`]: striped,
                [`${prefixCls}-animated`]: animated,
            },
            className,
        );
        const value: any = this.state.value;
        if (value >= 100) {
            barColor = completeColor;
        }
        const barStyle = {
            width: value + '%',
            background: barColor,
        };
        const styles = {width, height};
        const otherProps = getOtherProperties(other, ['onComplete']);
        return (
            <div className={styleClass} style={styles} {...otherProps}>
                {loading ? (<span className={`${prefixCls}-bar-infinite`}/>) : (<div className={`${prefixCls}-inner`}>
                    <div className={`${prefixCls}-bar`} style={barStyle}>
                        {children}
                        {showValue ?
                            <span className={`${prefixCls}-text`}>{value + '%'}</span> : null}
                    </div>
                </div>)}
            </div>
        );
    }
}
