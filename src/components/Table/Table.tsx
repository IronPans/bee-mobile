import * as React from 'react';
import * as classNames from 'classnames';
import {getOtherProperties} from '../common/Utils';
import Icon from '../Icon/Icon';
import Checkbox from '../Checkbox';
import {TableProps, TableState} from './PropsType';

export default class Table extends React.PureComponent<TableProps, TableState> {
    static defaultProps: TableProps = {
        prefixCls: 'bm-Table',
        value: []
    };

    state: TableState = {
        activeIndex: 0,
        currentValue: [],
        selectedItem: [],
        value: []
    };
    fieldProps: any[] = [];
    currentField: string;
    sort: string = 'desc';

    componentDidMount() {
        const value = this.props.value!;
        if (value && value.length > 0) {
            this.setState({
                value
            }, () => {
                this.changePage();
            });
        }
        if (this.props.activeIndex) {
            this.setState({
                activeIndex: this.props.activeIndex!
            });
        }
    }

    componentWillReceiveProps(nextProps: TableProps) {
        if ('value' in nextProps.value && this.props.value !== nextProps.value) {
            this.setState({
                value: this.props.value!
            }, () => {
                this.changePage();
            });
        }
    }

    changePage = () => {
        let value = [...this.state.value!];
        const {row} = this.props;
        if (this.props.row) {
            value = value.slice(this.state.activeIndex! * row!,
                (this.state.activeIndex! + 1) * row!);
        }
        this.setState({
            currentValue: value
        });
    };

    filterValue = (field: string) => {
        let currentValue = [...this.state.currentValue!];
        this.sort = this.sort === 'desc' ? 'asc' : 'desc'; // desc 2 1; asc 1 2
        currentValue.sort((a: any, b: any) => {
            const desc = this.sort === 'desc';
            if (a[field] > b[field]) {
                return desc ? 1 : -1;
            } else if (a[field] < b[field]) {
                return desc ? -1 : 1;
            }
            return 0;
        });
        this.setState({currentValue});
    };

    handleHeaderClick = (props: any) => {
        if (props.sort) {
            this.currentField = props.field;
            this.filterValue(props.field);
        }
    };

    drawRow = (rowData: any, index: number) => {
        return (<tr key={index} className="Table-row">
            {this.props.selectionMode === 'multiple' ? <td className="Table-cell">{this.createCheckbox({index, rowData})}</td> : null}
            {
                this.fieldProps.map((props: any, i: number) => {
                    return (<td className="Table-cell" key={`td-${i}`}>
                        {(() => {
                            if (typeof props.template === 'function') {
                                return props.template(rowData, props.field, index);
                            } else if (props.template) {
                                return props.template;
                            }
                            return rowData[props.field];
                        })()}
                    </td>)
                })
            }
        </tr>);
    };

    handleChange = (props: any, event: any) => {
        let selectedItem = [...this.state.selectedItem!];
        if (props.index === -1) {
            if (event.checked) {
                selectedItem = [...this.state.currentValue!];
            } else {
                selectedItem = [];
            }
        } else {
            if (event.checked) {
                selectedItem.push(props.rowData);
            } else {
                let index = 0;
                selectedItem.forEach((data: any, i: number) => {
                    if (data === props.rowData) {
                        index = i;
                    }
                });
                selectedItem.splice(index, 1);
            }
        }
        this.setState({
            selectedItem
        }, () => {
            if (this.props.onSelect) {
                (this.props.onSelect as Function)(selectedItem);
            }
        });
    };

    createCheckbox(props: any = {checked: false}) {
        let isSelected = false;
        const selectedItem: any = this.state.selectedItem;
        const currentValue: any = this.state.currentValue;
        if (props.index !== -1) {
            if (selectedItem.indexOf(props.rowData) !== -1) {
                isSelected = true;
            }
        } else if(selectedItem.length === currentValue.length) {
            isSelected = true;
        }
        return (
           <Checkbox checked={isSelected} onChange={this.handleChange.bind(this, props)}/>
        );
    }

    render() {
        const {className, children: childrenProps,
            hover, prefixCls, selectionMode, striped, ...other} = this.props;
        const styleClass = classNames(
            prefixCls,
            {
                [`${prefixCls}-striped`]: striped,
                [`${prefixCls}-hover`]: hover
            },
            className
        );
        const thead: any = [];
        if (selectionMode === 'multiple') {
            thead.push(<th key="total-checkbox" className={`${prefixCls}-cell`}>
                {this.createCheckbox({
                    index: -1
                })}
            </th>);
        }
        this.fieldProps = [];
        React.Children.forEach(childrenProps, (child: any, index: number) => {
            if (!React.isValidElement(child)) {
                return null;
            }
            const type: any = child.type;
            const fnName = type.fnName;
            const otherProps = getOtherProperties(child.props, []);
            switch (fnName) {
                case 'TableColumn':
                    const {field} = child.props as any;
                    const headClass = classNames(
                        `${prefixCls}-head`,
                        {
                            [`${prefixCls}-head-active`]: this.currentField === field
                        }
                    );
                    const sortClass = (this.sort === 'asc' && field === this.currentField) ? `${prefixCls}-head-sort` : '';
                    const th = (<th key={index} onClick={this.handleHeaderClick.bind(this, otherProps)}>
                        <div className={headClass}>
                            {otherProps.sort ? <Icon className={sortClass} icon="arrow_upward" size="1x"/> : null}
                            {otherProps.header}
                        </div>
                    </th>);
                    this.fieldProps.push(child.props);
                    const column = React.cloneElement(th as React.ReactElement<any>);
                    thead.push(column);
                    break;
            }
        });
        const otherProps = getOtherProperties(other,
            ['border', 'selectionMode', 'pagination', 'row', 'selectionMode', 'value']);
        return (
            <div className={styleClass} {...otherProps}>
                <table className={`${prefixCls}`}>
                    <thead>
                    <tr>{thead}</tr>
                    </thead>
                    <tbody>
                    {
                        (this.state.currentValue as Array<any>).map((rowData: any, index: number) => {
                            return this.drawRow(rowData, index);
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}