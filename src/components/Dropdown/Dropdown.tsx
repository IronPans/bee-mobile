import * as React from 'react';
import * as classNames from 'classnames';
import {DropdownProps, DropdownState} from './PropsType';
import FadeInZoom from '../Transitions/FadeInZoom';
import {clickOutside} from '../common/Dom';

export default class Dropdown extends React.PureComponent<DropdownProps, DropdownState> {
    static defaultProps = {
        data: [],
        direction: 'bottom-left',
        prefixCls: 'bm-Dropdown',
    };
    state = {
        visible: false,
    };
    selfClick = false;

    componentDidMount() {
        document.addEventListener('click', this.handleDocumentClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleDocumentClick);
    }

    handleDocumentClick = (event) => {
        if (this.state.visible) {
            const {prefixCls} = this.props;
            clickOutside(event.target, prefixCls!, () => {
                this.selfClick = true;
            }, () => {
                this.selfClick = false;
                this.setState({
                    visible: false,
                });
            });
        }
    }

    handleMouseLeave = () => {
        if (this.props.hover) {
            this.setState({
                visible: false,
            });
        }
    }

    handleMouseover = () => {
        if (this.props.hover) {
            this.setState({
                visible: true,
            });
        }
    }

    itemClick = (item) => {
        this.setState({
            visible: false,
        });
        if (item.onClick) {
            item.onClick();
        }
    }

    toggle = () => {
        if (!this.props.hover) {
            this.setState({
                visible: !this.state.visible,
            });
        }
    }

    close = () => {
        this.setState({
            visible: false,
        });
    }

    onClickoutside = () => {
        if (!this.props.hover) {
            this.close();
        }
    }

    render() {
        const {children, className, hover, data, direction, prefixCls}: any = this.props;
        const visible = this.state.visible;
        const styleClass = classNames(
            className,
            prefixCls,
            {
                [`${prefixCls}-expanded`]: visible,
                [`${prefixCls}-hover`]: hover,
            },
        );
        const menuClass = classNames(
            `${prefixCls}-menu`,
            `${prefixCls}-${direction}`,
        );
        return (
            <div className={styleClass} onMouseLeave={this.handleMouseLeave}>
                <div
                    className={`${prefixCls}-header`}
                    onMouseOver={this.handleMouseover}
                    onClick={this.toggle}
                >
                    {children}
                </div>
                <FadeInZoom in={visible} className={menuClass}>
                    <ul>
                        {
                            data.map((item, index) => {
                                if (item.divider) {
                                    return (
                                        <li key={index} className={`${prefixCls}-divider`}/>
                                    );
                                }
                                return (
                                    <li
                                        key={index}
                                        className={`${prefixCls}-menu-item`}
                                        onClick={this.itemClick.bind(this, item)}
                                    >
                                        {item.icon ? <i className="bm-Icon">{item.icon}</i> : null}
                                        {item.title}
                                    </li>
                                );
                            })
                        }
                    </ul>
                </FadeInZoom>
            </div>
        );
    }
}
