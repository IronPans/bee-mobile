import * as React from 'react';
import * as classNames from 'classnames';
import {PaginationItemProps, PaginationItemState} from './PropsType';

export default class PaginationItem extends React.PureComponent<PaginationItemProps, PaginationItemState> {
    static defaultProps: PaginationItemProps = {
        prefixCls: 'bm-PaginationItem',
    };
    state: PaginationItemState = {
        active: false,
        disabled: false,
    };

    componentDidMount() {
        if ('active' in this.props) {
            this.setState({
                active: this.props.active!,
            });
        }
        if ('disabled' in this.props) {
            this.setState({
                disabled: this.props.disabled!,
            });
        }
    }

    componentWillReceiveProps(nextProps: PaginationItemProps) {
        if ('disabled' in nextProps && this.props.disabled !== nextProps.disabled) {
            this.setState({
                disabled: nextProps.disabled!,
            });
        }
        if ('active' in nextProps && this.props.active !== nextProps.active) {
            this.setState({
                active: nextProps.active!,
            });
        }
    }

    handleClick = () => {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    render() {
        const {className, component, index, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls,
            {
                [`${prefixCls}-active`]: !!index && this.state.active!,
                [`${prefixCls}-disabled`]: this.state.disabled!,
            },
            className,
        );
        return (
            <li className={styleClass} onClick={this.handleClick}>
                <span className={`${prefixCls}-btn`}>{component}</span>
            </li>
        );
    }
}
