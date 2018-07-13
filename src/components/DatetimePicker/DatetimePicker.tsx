import * as React from 'react';
import * as classNames from 'classnames';
import Picker from '../Picker/Picker';
import {getOtherProperties} from '../common/Utils';
import {DatetimePickerProps, DatetimePickerState} from './PropsType';

const dateArray: string[] = ['年', '月', '日'];

export default class DatetimePicker extends React.PureComponent<DatetimePickerProps, DatetimePickerState> {
    static defaultProps: DatetimePickerProps = {
        minDate: '2000/1/1',
        maxDate: '2020/1/1',
        mode: 'date',
    };

    state: DatetimePickerState = {
        data: [],
        visible: false,
    };

    value: any;
    miniDate: any;

    componentWillMount() {
        this.miniDate = this.getRangeOfDate();
        this.setState({
            visible: this.props.visible!,
            data: this.getDate(),
        });
    }

    componentWillReceiveProps(nextProps: DatetimePickerProps) {
        if ('visible' in nextProps && this.props.visible !== nextProps.visible) {
            this.setState({
                visible: nextProps.visible!,
                data: this.getDate(),
            });
        }
    }

    getRangeOfDate() {
        const {minDate, maxDate} = this.props;
        return {
            minDate: this.splitDate(minDate),
            maxDate: this.splitDate(maxDate),
        };
    }

    splitDate(value: any) {
        let data = [...value];
        if (typeof value === 'string') {
            data = value.split(/\/|-/gm).map((v: string) => {
                return +v;
            });
        } else {
            data = [+value.getFullYear(), +value.getMonth() + 1, +value.getDate()];
        }
        return data;
    }

    countDay(year: number, month: number) {
        const lists: any[] = [];
        const num = this.getDay(year, month).total;
        for (let i = 1; i < num + 1; i++) {
            const value = this.dateEncode(i);
            lists.push({
                label: value,
                value: i,
            });
        }
        return lists;
    }

    getInitDate() {
        const curDate = new Date();
        const defaultValue = this.props.defaultValue;
        const year: any = curDate.getFullYear(),
            month: any = curDate.getMonth() + 1,
            date: any = curDate.getDate();
        const value: any[] = defaultValue ? this.splitDate(defaultValue) : [year, month, date];
        this.value = (this.value || value).map((v: any) => {
            const label = v.label || v;
            const newValue = v.value || v;
            return {
                label: this.dateEncode(label),
                value: newValue,
            };
        });
        const yearValue: number = parseInt(value[0], 10);
        this.value[0] = {
            value: this.value[0] ? this.value[0].value : yearValue,
            label: this.value[0] ? this.value[0].label : yearValue,
        };
        return this.countDay(this.value[0].value, this.value[1].value);
    }

    getDay(year: any, month: any) {
        const curDate = new Date();
        curDate.setFullYear(year);
        curDate.setMonth(month);
        curDate.setDate(0);
        const total = curDate.getDate();
        curDate.setDate(1);
        let day = curDate.getDay();
        if (day === 0) {
            day = 7;
        }
        return {
            total,
            day,
        };
    }

    getDate() {
        const days: any[] = this.getInitDate();
        const lists: any[] = [...this.state.data!];
        for (let i = 0; i < this.miniDate.maxDate[0] - this.miniDate.minDate[0] + 1; i++) {
            const children: any = (lists[i] && lists[i].children) || [];
            const year = i + this.miniDate.minDate[0];
            if (year === parseInt(this.value[0].value, 10)) {
                for (let j = 1; j < 13; j++) {
                    const month = j - 1;
                    let child: any[] = (children[month] && children[month].children) || [];
                    const s = this.value[1].value;
                    if (j === s) {
                        child = days;
                    }
                    children[month] = {
                        label: this.dateEncode(j),
                        value: j,
                        children: child,
                    };
                }
            }
            lists[i] = {
                label: year,
                value: year,
                children,
            };
        }
        return lists;
    }

    dateEncode(d: any) {
        d = parseInt(d, 10) >= 10 ? d : '0' + parseInt(d, 10);
        return d;
    }

    dateDecode(d: any) {
        return parseInt(String(d.value).replace(/\b(0+)/gi, ''), 10);
    }

    handleValueChange = (event: any) => {
        this.value[event.index] = event.value;
        const data: any[] = this.getDate();
        this.setState({
            data,
        });
    }

    handleChange = (value: any) => {
        this.setState({
            value,
        });
        if (this.props.onOk) {
            this.props.onOk(value);
        }
    }

    render() {
        const {className, onClose, onOpen, ...other} = this.props;
        const styleClass = classNames(
            'DatetimePicker', className,
        );
        const otherProps: any = getOtherProperties(other,
            ['defaultValue', 'children', 'minDate', 'maxDate', 'onOk', 'onOpen', 'onValueChange', 'visible']);
        return (
            <div className={styleClass} {...otherProps}>
                <Picker
                    data={this.state.data}
                    defaultValue={this.value}
                    value={this.state.value}
                    onValueChange={this.handleValueChange}
                    visible={this.state.visible}
                    onChange={this.handleChange}
                    onOpen={onOpen}
                    onClose={onClose}
                />
            </div>
        );
    }
}
