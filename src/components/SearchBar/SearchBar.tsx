import * as React from 'react';
import * as classNames from 'classnames';
import {getOtherProperties} from '../common/Utils';
import Icon from '../Icon';
import {SearchBarProps, SearchBarState} from './PropsType';

export default class SearchBar extends React.PureComponent<SearchBarProps, SearchBarState> {
    static defaultProps: SearchBarProps = {
        autoFocus: false,
        cancelText: '取消',
        disabled: false,
        placeholder: '输入关键字...',
        prefixCls: 'bm-SearchBar',
    };

    constructor(props: SearchBarProps) {
        super(props);
        let value = '', focus = false;
        if (props.defaultValue) {
            value = props.defaultValue!;
        }
        if (props.autoFocus) {
            focus = props.autoFocus;
        }
        this.state = {
            value,
            focus,
        };
    }

    componentWillReceiveProps(nextProps: SearchBarProps) {
        if ('value' in this.props && this.props.value !== nextProps.value) {
            this.setState({
                value: nextProps.value!,
            });
        }
    }

    handleChange = (event: any) => {
        const target = event.target;
        if (target && target.value) {
            this.setState({
                value: target.value,
            });
            if (this.props.onChange) {
                (this.props.onChange as (event: any) => void)(target.value);
            }
        }
    }

    handleFocus = () => {
        this.setState({
            focus: true,
        });
        if (this.props.onFocus) {
            (this.props.onFocus as () => void)();
        }
    }

    handleBlur = () => {
        this.setState({
            focus: false,
        });
        if (this.props.onBlur) {
            (this.props.onBlur as () => void)();
        }
    }

    handleSubmit = (event: any) => {
        const target = event.target;
        if (event.keyCode === 13 && this.props.onSubmit) {
            (this.props.onSubmit as (event: any) => void)(target.value);
        }
    }

    handleCancel = () => {
        this.handleBlur();
        if (this.props.onCancel) {
            (this.props.onCancel as () => void)();
        }
    }

    render() {
        const {autoFocus, cancelText, className, disabled, maxLength, prefixCls, ...other} = this.props;
        const styleClass = classNames(
            prefixCls,
            {
                [`${prefixCls}-active`]: this.state.focus!,
            },
            className,
        );
        const clearClass = classNames(
            `${prefixCls}-clear`,
            {
                [`${prefixCls}-clear-show`]: !!(this.state.value! && this.state.focus!),
            },
        );
        const otherProps: object = getOtherProperties(other,
            ['onCancel', 'onChange', 'onBlur', 'onFocus', 'onSubmit']);
        return (
            <div className={styleClass} {...otherProps}>
                <a className={`${prefixCls}-cancel`} onClick={this.handleCancel}>{cancelText}</a>
                <div className={`${prefixCls}-input`}>
                    <label htmlFor="SearchBar"><Icon icon="search"/></label>
                    <input
                        autoFocus={autoFocus}
                        type="text"
                        id="SearchBar"
                        onChange={this.handleChange}
                        disabled={disabled}
                        onKeyUp={this.handleSubmit}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        maxLength={maxLength}
                        value={this.state.value}
                        placeholder={this.props.placeholder}
                    />
                    <a className={clearClass}/>
                </div>
            </div>
        );
    }
}
