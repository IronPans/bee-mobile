import * as React from 'react';
import * as classNames from 'classnames';
import Ripple from '../Ripple';
import {RadioProps, RadioState} from './PropsType';

export default class Radio extends React.PureComponent<RadioProps, RadioState> {
    static defaultProps = {
        defaultChecked: false,
    };

    constructor(props: RadioProps) {
        super(props);
        let checked = false;
        if (props.defaultChecked) {
            checked = props.defaultChecked;
        }
        this.state = {
            checked,
        };
    }

    componentWillReceiveProps(nextProps: RadioProps) {
        if ('checked' in nextProps && this.props.checked !== nextProps.checked) {
            this.setState({
                checked: nextProps.checked!,
            });
        }
    }

    handleInputChange = () => {
        const {value} = this.props;
        if (this.props.onChange) {
            this.props.onChange({
                value,
                originalEvent: event,
            });
        }
    }

    render() {
        const {children, className, disabled, disableRipple, name} = this.props;
        const checked = this.state.checked;
        const styleClass = classNames(
            'Radio',
            {
                'Radio-active': checked,
                'Radio-disabled': disabled,
            },
            className,
        );
        return (
            <label className={styleClass}>
                <input
                    type="radio"
                    disabled={disabled}
                    name={name}
                    checked={checked}
                    onChange={this.handleInputChange}
                />
                <div className="Radio-icon">
                    <svg className="Radio-noChecked" focusable="false" viewBox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                    </svg>
                    <svg className="Radio-checked" focusable="false" viewBox="0 0 24 24">
<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                    </svg>
                    {!disableRipple ? (<Ripple centerMode={true} size="sm"/>) : null}
                </div>
                <div className="Radio-inner">{children}</div>
            </label>
        );
    }
}
