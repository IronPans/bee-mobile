import * as React from 'react';
import * as classNames from 'classnames';
import {SwitchProps, SwitchState} from './PropsType';

export default class Switch extends React.PureComponent<SwitchProps, SwitchState> {
    static defaultProps = {
        defaultChecked: false,
        inputType: 2,
    };

    constructor(props: SwitchProps) {
        super(props);
        let checked = false;
        if (props.defaultChecked) {
            checked = true;
        }
        this.state = {
            checked,
        };
    }

    componentWillReceiveProps(nextProps: SwitchProps) {
        if ('checked' in nextProps && this.props.checked !== nextProps.checked) {
            this.setState({
                checked: nextProps.checked!,
            });
        }
    }

    handleInputChange = (event: any) => {
        const checked = event.target.checked;
        this.setState({
            checked: checked,
        });
        if (this.props.onChange) {
            this.props.onChange(checked);
        }
    }

    render() {
        const {children, className, disabled, inputType} = this.props;
        const styleClass = classNames(
            'Switch',
            (inputType && `Switch-${inputType}`),
            className,
        );
        const checked = this.state.checked;
        return (
            <label className={styleClass}>
                <input
                    type="checkbox"
                    disabled={disabled}
                    checked={checked}
                    onChange={this.handleInputChange}
                />
                <div className="Switch-inner">{children}</div>
                <div className="Switch-media">
                    <span className="Switch-label"/>
                </div>
            </label>
        );
    }
}
