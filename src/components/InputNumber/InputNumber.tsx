import * as React from 'react';
import * as classNames from 'classnames';
import {InputNumberProps, InputNumberState} from './PropsType';

export default class InputNumber extends React.PureComponent<InputNumberProps, InputNumberState> {
    static defaultProps = {
        prefixCls: 'bm-InputNumber',
        step: 1,
        type: 1,
        value: 0,
    };
    count: number;

    constructor(props: InputNumberProps) {
        super(props);
        let value = 0;
        const step = props.step!.toString().split('.');
        this.count = step[1] ? step[1].length : 0;
        if (typeof props.defaultValue === 'number') {
            value = props.defaultValue!;
        }
        this.state = {
            value,
        };
    }

    componentWillReceiveProps(nextProps: InputNumberProps) {
        if ('value' in nextProps && this.props.value !== nextProps.value) {
            this.setValue(0, nextProps.value);
        }
    }

    setValue(add: number = 0, value?: number) {
        const {min, max, step}: any = this.props;
        let currentValue = value! + add * step!;
        if (currentValue < min!) {
            currentValue = min!;
        } else if (currentValue > max!) {
            currentValue = max!;
        }
        currentValue = Number(currentValue.toFixed(this.count));
        this.setState({
            value: currentValue,
        });
        return currentValue;
    }

    spin(add: number, event: Event) {
        const {onChange, value} = this.props;
        const currentValue = this.setValue(add, value);
        if (onChange) {
            onChange({
                value: currentValue,
                originalEvent: event,
            });
        }

    }

    handleKeyDown = (event: any) => {
        if (event.which === 38) {
            this.spin(1, event);
            event.preventDefault();
        } else if (event.which === 40) {
            this.spin(-1, event);
            event.preventDefault();
        }
    }

    handleKeyPress = (event: any) => {
        const keyPattern: RegExp = /[0-9\+\-]/;
        if (!keyPattern.test(String.fromCharCode(event.charCode)) &&
            event.keyCode !== 9 && event.keyCode !== 8 && event.keyCode !== 37 &&
            event.keyCode !== 39 && event.keyCode !== 46) {
            event.preventDefault();
        }
    }

    handleChange = (event: any) => {
        const inputElem: any = event.target;
        const {onChange} = this.props;
        this.setState({
            value: Number(inputElem.value),
        });
        if (onChange) {
            onChange({
                value: this.state.value,
                originalEvent: event,
            });
        }
    }

    render() {
        const {className, min, max, prefixCls, style, type} = this.props;
        const styleClass = classNames(
            prefixCls,
            {
                [`${prefixCls}-2`]: type === 2,
            },
            className,
        );
        const {value} = this.state;
        const minusStyleClass = classNames(
            `${prefixCls}-minus`,
            {
                'is-disabled': (min!) <= (value!),
            },
        );
        const addStyleClass = classNames(
            `${prefixCls}-add`,
            {
                'is-disabled': (max!) >= (value!),
            },
        );
        const arrowStyle: any = {
            pointerEvents: 'none',
            display: 'block',
            fill: 'rgb(117, 117, 117)',
        };
        return (
            <div className={styleClass} style={style}>
                {type !== 2 ? (<button className={minusStyleClass} onClick={this.spin.bind(this, -1)}/>) : null}
                <input
                    type="text"
                    value={value}
                    onKeyDown={this.handleKeyDown}
                    onKeyPress={this.handleKeyPress}
                    onChange={this.handleChange}
                />
                {type !== 2 ? (<button className={addStyleClass} onClick={this.spin.bind(this, 1)}/>) : null}
                {type === 2 ? (<div className={`${prefixCls}-step`}>
                    <span onClick={this.spin.bind(this, 1)} className="bm-rotate-180">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" style={arrowStyle}>
                        <g><path d="M7 10l5 5 5-5z"/></g></svg>
                    </span>
                    <span onClick={this.spin.bind(this, -1)}>
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" style={arrowStyle}>
                        <g><path d="M7 10l5 5 5-5z"/></g></svg>
                    </span>
                </div>) : null}
            </div>
        );
    }
}
