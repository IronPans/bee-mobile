import * as React from 'react';
import * as classNames from 'classnames';
import {getOtherProperties} from '../common/Utils';
import {InputtextProps, InputtextState} from './PropsType';

export default class Inputtext extends React.PureComponent<InputtextProps, InputtextState> {
    static defaultProps: InputtextProps = {
        disabled: false,
        inline: false,
        prefixCls: 'bm-Inputtext',
        readOnly: false,
        size: 'sm',
        type: 'text',
    };

    constructor(props: InputtextProps) {
        super(props);
        let value = '', focus = false;
        if (props.defaultValue) {
            value = props.defaultValue;
        }
        if (props.autoFocus) {
            focus = props.autoFocus;
        }
        this.state = {
            value,
            focus,
        };
    }

    componentWillReceiveProps(nextProps: InputtextProps) {
        if ('value' in nextProps && this.props.value !== nextProps.value) {
            this.setState({
                value: nextProps.value! || '',
            });
        }
    }

    handleChange = (event: any) => {
        const target: any = event.target;
        this.setState({
            value: target.value,
        });
        if (this.props.onChange) {
            this.props.onChange({
                value: target.value,
                originalEvent: event,
            });
        }
    }

    handleFocus = (event: any) => {
        const {readOnly, disabled} = this.props;
        if (!readOnly && !disabled) {
            this.setState({
                focus: true,
            });
        }
        if (this.props.onFocus) {
            this.props.onFocus({
                value: event.target.value,
                originalEvent: event,
            });
        }
    }

    handleBlur = (event: any) => {
        const {readOnly, disabled} = this.props;
        if (!readOnly && !disabled) {
            this.setState({
                focus: false,
            });
        }
        if (this.props.onBlur) {
            this.props.onBlur({
                value: event.target.value,
                originalEvent: event,
            });
        }
    }

    handleClick = () => {
        if (this.props.onClick) {
            (this.props.onClick as () => void)();
        }
    }

    render() {
        const {
            autoFocus, animated, className, disabled, id, endAdorn, maxLength,
            inline, label, prefixCls, placeholder, readOnly, size, startAdorn, type, ...other,
        } = this.props;
        const {focus, value} = this.state;
        const styleClass = classNames(
            prefixCls,
            {
                [`${prefixCls}-inner`]: inline,
                [`${prefixCls}-animated`]: animated,
                [`${prefixCls}-focus`]: focus!,
                [`${prefixCls}-noEmpty`]: value.trim() !== '',
            },
            `${prefixCls}-${size}`,
            className,
        );
        const otherProps = getOtherProperties(other, ['defaultValue', 'onClick', 'onChange', 'onFocus', 'onBlur', 'value']);
        return (
            <div className={styleClass} {...otherProps}>
                {
                    startAdorn ? (<div className={`${prefixCls}-startAdorn`}>{startAdorn}</div>) : null}
                <label htmlFor={id}>
                    {label ? (<div className={`${prefixCls}-label`}>{label}</div>) : null}
                    <div className={`${prefixCls}-field`} onClick={this.handleClick}>
                        <input
                            type={type}
                            id={id}
                            maxLength={maxLength}
                            value={value!}
                            autoFocus={autoFocus}
                            placeholder={placeholder}
                            disabled={disabled}
                            readOnly={readOnly}
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                        />
                    </div>
                </label>
                {
                    endAdorn ? (<div className={`${prefixCls}-endAdorn`}>
                        {endAdorn}
                    </div>) : null}
                <hr/>
            </div>
        );
    }
}
