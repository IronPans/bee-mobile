import * as React from 'react';
import * as classNames from 'classnames';
import Icon from '../Icon';
import {getOtherProperties} from '../common/Utils';
import Ripple from '../Ripple';
import {RateProps, RateState} from './PropsType';

export default class Rate extends React.PureComponent<RateProps, RateState> {
    static defaultProps: RateProps = {
        allowHalf: false,
        count: 5,
        defaultValue: 0,
        readOnly: false,
        disableRipple: true,
        prefixCls: 'bm-Rate',
    };

    constructor(props: RateProps) {
        super(props);
        let value = 0;
        if (props.defaultValue! > 0) {
            value = props.defaultValue!;
        }
        this.state = {
            value,
        };
    }

    componentWillReceiveProps(nextProps: RateProps) {
        if ('value' in nextProps && this.props.value !== nextProps.value) {
            this.setState({
                value: nextProps.value!,
            });
        }
    }

    getRange(len: number, start: number = 0, step: number = 1) {
        const range: any = [];
        for (let i = start; i < len; i += step) {
            range.push(i);
        }
        return range;
    }

    isIn(value: number) {
        const ex = this.state.value - value;
        return ex > 0 && ex < 1;
    }

    handleClick(value: number, half: boolean, event: any) {
        event.stopPropagation();
        const {allowHalf, onChange, readOnly}: any = this.props;
        let _value: any = 0;
        if (!readOnly) {
            _value = value + 1;
            if (half && allowHalf) {
                _value -= 0.5;
            }
            this.setState({
                value: _value,
            });
            if (onChange) {
                onChange(_value);
            }
        }
    }

    render() {
        const {
            allowHalf, className, template,
            count, disableRipple, prefixCls, ...other,
        } = this.props;
        const styleClass = classNames(prefixCls, className);
        const {value} = this.state;
        const otherProps = getOtherProperties(other,
            ['defaultValue', 'value', 'readOnly', 'onChange']);
        const component = template ? template : (<Icon icon="star"/>);
        const children = (v: number, i: number) => {
            const isActive = v < value;
            const halfClass = classNames(
                {
                    [`${prefixCls}-active`]: isActive,
                },
                `${prefixCls}-half`,
            );
            const styles = {
                opacity: this.isIn(v) ? 1 : 0,
            };
            const iconClass = classNames(
                {
                    [`${prefixCls}-active`]: allowHalf ? (!this.isIn(v) && isActive) : isActive,
                },
            );
            return (
                <div key={i} className={`${prefixCls}-item`}>
                    {allowHalf ? (<div
                        className={halfClass}
                        style={styles}
                        onClick={this.handleClick.bind(this, i, true)}
                    >
                        {component}
                    </div>) : null}
                    <div
                        className={iconClass}
                        onClick={this.handleClick.bind(this, i, false)}
                    >
                        {component}
                        {!disableRipple ? (
                            <Ripple centerMode={true} hidden={false}/>) : null}
                    </div>
                </div>
            );
        };
        return (
            <div className={styleClass} {...otherProps}>
                {
                    this.getRange(count!).map((v: any, i: number) => {
                        return children(v, i);
                    })
                }
            </div>
        );
    }
}
