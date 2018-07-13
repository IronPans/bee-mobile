import * as React from 'react';
import * as classNames from 'classnames';
import {TextareaProps, TextareaState} from './PropsType';

export default class Textarea extends React.PureComponent<TextareaProps, TextareaState> {
    static defaultProps: TextareaProps = {
        disabled: false,
        inline: false,
        prefixCls: 'bm-Textarea',
        size: 'sm',
    };

    constructor(props: TextareaProps) {
        super(props);
        this.state = {
            value: props.defaultValue || '',
            length: props.maxLength,
            focus: false,
        };
    }

    componentWillReceiveProps(nextProps: TextareaProps) {
        if ('value' in nextProps && this.props.value !== nextProps.value) {
            this.setState({
                value: nextProps.value!,
            });
        }
    }

    handleChange = (event: any) => {
        const value: any = event.target.value;
        const {onChange}: any = this.props;
        this.setState({
            value,
        });
        if (onChange) {
            onChange({
                value,
                originalEvent: event,
            });
        }
    }

    handleFocus = (event: any) => {
        this.setState({
            focus: true,
        });
        if (this.props.onFocus) {
            this.props.onFocus({
                originalEvent: event,
            });
        }
    }

    handleBlur = (event: any) => {
        this.setState({
            focus: false,
        });
        if (this.props.onBlur) {
            this.props.onBlur({
                originalEvent: event,
            });
        }
    }

    render() {
        const {
            autoFocus, animated, className, disabled, id, inline,  maxHeight,
            label, prefixCls, placeholder, readOnly, rows, size,
        } = this.props;
        const {focus, length, value} = this.state;
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
        const styles = {
            maxHeight,
        };
        return (
            <div className={styleClass} style={styles}>
                <label htmlFor={id}>
                    {label ? (<div className={`${prefixCls}-label`}>{label}</div>) : null}
                    <div className={`${prefixCls}-field`}>
                        <textarea
                            autoFocus={autoFocus}
                            rows={rows}
                            id={id}
                            value={value!}
                            placeholder={placeholder}
                            disabled={disabled}
                            readOnly={readOnly}
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                        />
                        <span className={`${prefixCls}-indicator`}>{length}</span>
                    </div>
                </label>
                <hr/>
            </div>
        );
    }
}
