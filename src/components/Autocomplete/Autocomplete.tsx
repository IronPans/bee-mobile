import * as React from 'react';
import * as classNames from 'classnames';
import Inputtext from '../Inputtext';
import List, {ListItem, ListItemText} from '../List';
import {getOtherProperties} from '../common/Utils';
import {clickOutside} from '../common/Dom';
import {AutocompleteProps, AutocompleteState} from './PropsType';

export default class Autocomplete extends React.PureComponent<AutocompleteProps, AutocompleteState> {
    static defaultProps: AutocompleteProps = {
        count: 5,
        data: [],
        prefixCls: 'bm-Autocomplete',
    };
    selfClick: boolean;

    constructor(props: AutocompleteProps) {
        super(props);
        let data: any = [];
        if (Array.isArray(props.data!)) {
            data = props.data!;
        }
        this.state = {
            data,
            value: '',
            visible: false,
        };
    }

    componentDidMount() {
        document.addEventListener('click', this.handleDomClick);
    }

    componentWillReceiveProps(nextProps: AutocompleteProps) {
        if ('data' in nextProps && this.props.data !== nextProps.data) {
            this.setState({
                data: nextProps.data!,
            });
        }
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleDomClick);
    }

    filterValue = (inputValue: string) => {
        let count = 0;
        const {count: countProps}: any = this.props;
        const {data}: any = this.state;
        return data.filter((value: any) => {
            const keep =
                (!inputValue || value.label.toLowerCase().includes(inputValue.toLowerCase())) &&
                count < ((countProps && countProps !== -1) || (countProps === -1 && data.length) || 5);

            if (keep) {
                count += 1;
            }
            return keep;
        });
    }

    handleDomClick = (event: any) => {
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

    handleChange = (event) => {
        this.setState({
            value: event.value,
            visible: true,
        });
        if (this.props.onChange) {
            (this.props.onChange as (event: any) => void)({
                ...event,
            });
        }
    }

    handleFocus = (event: any) => {
        if (this.props.onFocus) {
            (this.props.onFocus as (event: any) => void)({
                ...event,
            });
        }
    }

    handleBlur = (event: any) => {
        if (this.props.onBlur) {
            (this.props.onBlur as (event: any) => void)({
                ...event,
            });
        }
    }

    handleItemClick = (item: any, event: any) => {
        if (this.selfClick) {
            this.setState({
                value: item.label,
                visible: false,
            });
            if (this.props.onSelect) {
                (this.props.onSelect as (event: any) => void)({
                    item,
                    originalEvent: event,
                });
            }
        }
    }

    render() {
        const {className, inline, maxHeight, prefixCls, startAdorn, ...other}: any = this.props;
        const styleClass = classNames(
            prefixCls, className,
        );
        const {value, visible}: any = this.state;
        const menuClass = classNames(
            `${prefixCls}-menus`,
            {
                [`${prefixCls}-menus-active`]: visible!,
                [`${prefixCls}-inline`]: inline!,
                [`${prefixCls}-scroll`]: maxHeight,
            },
        );
        const styles = {
            maxHeight,
        };
        const otherProps = getOtherProperties(other, ['data', 'children', 'onSelect']);
        return (
            <div className={styleClass} {...otherProps}>
                <Inputtext
                    value={value}
                    startAdorn={startAdorn}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                />
                <div className={menuClass} style={styles}>
                    <List>
                        {
                            this.filterValue(value!).map((item: any, index: number) => {
                                return (<ListItem
                                    key={'bm-Autocomplete-item-' + index}
                                    onClick={this.handleItemClick.bind(this, item)}
                                >
                                    <ListItemText>{item.label}</ListItemText>
                                </ListItem>);
                            })
                        }
                    </List>
                </div>
            </div>
        );
    }
}
