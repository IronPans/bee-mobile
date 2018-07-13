import * as React from 'react';
import * as classNames from 'classnames';
import Ripple from '../Ripple';
import {CheckboxProps, CheckboxState} from './PropsType';

export default class Checkbox extends React.PureComponent<CheckboxProps, CheckboxState> {
    static defaultProps = {
        defaultChecked: false,
        disableRipple: false,
    };

    constructor(props: CheckboxProps) {
        super(props);
        let checked = false;
        if (props.defaultChecked) {
            checked = props.defaultChecked;
        }
        this.state = {
            checked,
        };
    }

    componentWillReceiveProps(nextProps: CheckboxProps) {
        if ('checked' in nextProps && nextProps.checked !== this.props.checked) {
            this.setState({
                checked: nextProps.checked!,
            });
        }
    }

    handleInputChange = (event: any) => {
        const {checked} = event.target;
        this.setState({
            checked: checked,
        });
        if (this.props.onChange) {
            this.props.onChange({
                checked: checked,
                value: this.props.value!,
                originalEvent: event,
            });
        }
    }

    render() {
        const {children, className, disabled, disableRipple, inputRef, value} = this.props;
        const styleClass = classNames(
            'Checkbox',
            {
                'Checkbox-active': this.state.checked!,
                'Checkbox-disabled': disabled,
            },
            className,
        );
        const checked = this.state.checked;
        return (
            <label className={styleClass}>
                <input
                    type="checkbox"
                    disabled={disabled}
                    ref={inputRef}
                    value={value}
                    checked={checked}
                    onChange={this.handleInputChange}
                />
                <div className="Checkbox-icon">
                    <svg focusable="false" viewBox="0 0 24 24" className="Checkbox-noChecked">
<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                    </svg>
                    <svg focusable="false" viewBox="0 0 24 24" className="Checkbox-checked">
<path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    {!disableRipple ? (
                        <Ripple centerMode={true} hidden={false}/>) : null}
                </div>
                <div className="Checkbox-inner">{children}</div>
            </label>
        );
    }
}
