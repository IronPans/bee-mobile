import * as React from 'react';
import * as classNames from 'classnames';
import Icon from '../Icon';
import {getOtherProperties} from '../common/Utils';
import {ChipProps} from './PropsType';

export default class Chip extends React.PureComponent<ChipProps, any> {
    static defaultProps: ChipProps = {
        active: false,
    };
    handleDelete = () => {
        if (this.props.onDelete) {
            this.props.onDelete({
                label: this.props.label!,
                value: this.props.value!,
            });
        }
    }
    handleClick = () => {
        if (this.props.onClick) {
            this.props.onClick({
                label: this.props.label!,
                value: this.props.value!,
            });
        }
    }

    render() {
        const {active, avatar, className, close, label, ...other} = this.props;
        const styleClass = classNames(
            'Chip',
            {
                'Chip-active': active,
            },
            className,
        );
        const otherProps = getOtherProperties(other, ['onClick', 'onDelete']);
        return (
            <div className={styleClass} {...otherProps} onClick={this.handleClick}>
                {avatar ? (
                    <span className="Chip-avatar">{avatar}</span>
                ) : null}
                <span className="Chip-inner">{label}</span>
                {close ? <Icon className="Chip-close" icon="close" onClick={this.handleDelete}/> : null}
            </div>
        );
    }
}
