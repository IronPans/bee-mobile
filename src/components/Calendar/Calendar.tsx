import * as React from 'react';
import * as classNames from 'classnames';
import {dateFormat, getOtherProperties} from '../common/Utils';
import {FadeInUp} from '../Transitions';
import Portal from '../Portal';
import Inputtext from '../Inputtext/Inputtext';
import {CalendarProps, CalendarState} from './PropsType';

export default class Calendar extends React.PureComponent<CalendarProps, CalendarState> {
    static defaultProps: CalendarProps = {
        firstDayOfWeek: 7,
        format: 'yyyy-MM-dd',
        lang: 'en',
        visible: false,
    };
    state: CalendarState = {
        calendar: [],
    };
    todayDate: Date = new Date();
    rows: number = 6;
    cols: number = 7;
    _locale = {
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        monthNames: ['January', 'February', 'March', 'April', 'May',
            'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    };
    _localeCn = {
        dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    };
    _selectLocale: any;
    _week: string[];
    firstYear: number;

    componentWillMount() {
        this._selectLocale = (this.props.lang as string).toLowerCase() === 'cn' ?
            this._localeCn : this._locale;
        this._week = this._selectLocale.dayNamesShort;
        if (this.props.firstDayOfWeek === 1) {
            this._week.unshift(this._week[this._week.length - 1]);
            this._week.pop();
        }
    }

    componentDidMount() {
        this.setDate(this.todayDate);
        this.firstYear = this.todayDate.getFullYear();
        if ('defaultValue' in this.props) {
            this.selectDate(this.props.defaultValue, null);
        }
    }

    componentWillReceiveProps(nextProps: CalendarProps) {
        if ('visible' in nextProps && this.props.visible !== nextProps.visible) {
            if (nextProps.visible) {
                if (this.props.onOpen) {
                    (this.props.onOpen as () => void)();
                }
            } else {
                if (this.props.onClose) {
                    (this.props.onClose as () => void)();
                }
            }
            this.setState({
                visible: nextProps.visible,
            });
        }
    }

    getMonthFirstDay(year: number, month: number) {
        const curDate = new Date();
        curDate.setFullYear(year);
        curDate.setMonth(month);
        curDate.setDate(0);
        const dd = curDate.getDate();
        curDate.setDate(1);
        let item = curDate.getDay();
        if (item === 0) {
            item = 7;
        }
        return {
            total: dd,
            day: item,
        };
    }

    getSomeDay(day: string, add: number) {
        const now = new Date(day);
        now.setDate(now.getDate() - add);
        const y = now.getFullYear();
        let m: any = now.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        let d: any = now.getDate();
        d = d < 10 ? '0' + d : d;
        return {
            y: y,
            m: m,
            d: d,
        };
    }

    getDate(currentDate: any) {
        if (!(currentDate instanceof Date)) {
            currentDate = new Date(currentDate);
        }
        let currentYear, currentMonth, currentDay, currentWeek;
        currentYear = currentDate.getFullYear();
        currentMonth = currentDate.getMonth() + 1;
        currentDay = currentDate.getDate();
        currentWeek = currentDate.getDate();
        return {
            currentYear,
            currentMonth,
            currentDay,
            currentWeek,
        };
    }

    setDate(date: any = new Date()) {
        if (date && typeof date === 'string') {
            const tokens: string[] = date.trim().split(/\s+/);
            const dates = tokens[0].split(/[-\/]/gm);
            const arr = dates.map(d => {
                return parseInt(d, 10);
            });
            date = new Date(arr[0], arr[1] - 1, arr[2]);
        }
        const dd: any = this.getDate(date);
        dd.currentDate = date;
        this.setState({...dd});
    }

    splitNum(v: any) {
        return parseInt(v, 10);
    }

    isDateValid(value: any) {
        if (/^\d{4}[-\/]\d{1,2}[-\/]\d{1,2}$/.test(value)) {
            const d = new Date(value);
            if (d && d.getDate()) {
                return true;
            }
        }
        return false;
    }

    createCalendar() {
        const {minDate, maxDate} = this.props;
        let {currentYear, currentMonth}: any = this.state;
        const currentDay = this.state.currentDay;
        let calendar: any = [];
        if (currentMonth >= 13) {
            currentMonth = 1;
            currentYear += 1;
        } else if (currentMonth <= 0) {
            currentMonth = 12;
            currentYear -= 1;
        }
        const data = this.getMonthFirstDay(currentYear, currentMonth);
        let first = data.day;
        const total = data.total;
        const dd = this.getSomeDay(`${currentYear}-${currentMonth}-1`, 1);
        const selectedDay = this.splitNum(currentDay);

        if (this.props.firstDayOfWeek === 7) {
            first += 1;
            first = first === 8 ? 1 : first;
        }
        for (let i = 0; i < first - 1; i++) {
            const ymd = `${currentYear}-${(currentMonth - 1)}-${(dd.d - first + i + 2)}`;
            calendar.push({
                value: ymd,
                currentMonth: currentMonth - 1,
                date: (dd.d - first + i + 2),
                type: 'pass',
            });
        }
        for (let i = 1; i < (total + 1); i++) {
            const ymd = `${currentYear}-${currentMonth}-${i}`;
            const isToday = i === this.todayDate.getDate();
            let type = 'current';
            const cur = new Date(ymd);
            if (minDate && this.isDateValid(minDate)) {
                type = new Date(minDate) < cur ? 'current' : 'pass';
            }
            if (maxDate && this.isDateValid(maxDate)) {
                type = new Date(maxDate) > cur ? 'current' : 'pass';
            }
            calendar.push({
                value: ymd,
                currentYear: currentYear,
                currentMonth: currentMonth,
                date: i,
                type: type,
                selected: i === selectedDay,
                today: isToday && currentMonth === (this.todayDate.getMonth() + 1) &&
                currentYear === this.todayDate.getFullYear(),
            });
        }
        const both = total + first - 1;
        const b1 = (this.rows - 1) * this.cols;
        const b2 = this.rows * this.cols;
        const futureDate = both < b1 ? b1 - both : b2 - both;
        for (let i = 0; i < futureDate; i++) {
            const ymd = `${currentYear}-'${(currentMonth + 1)}-${(i + 1)}`;
            calendar.push({
                value: ymd,
                currentYear: currentYear,
                currentMonth: currentMonth + 1,
                date: i + 1,
                type: 'future',
                selected: false,
            });
        }
        const months: any = [];
        let week: any = [];
        for (let i = 0; i < calendar.length; i++) {
            week.push(calendar[i]);
            if (i % 7 === 6) {
                months.push(week);
                week = [];
            }
        }
        calendar = months;
        return calendar;
    }

    createWeek() {
        return this._week.map((w, i) => {
            return (<th className="Calendar-item" key={'week_' + i}>{w}</th>);
        });
    }

    createDate() {
        return this.createCalendar().map((w: any, i: number) => {
            return (
                <tr key={'row_' + i}>
                    {
                        w.map((day: any, j: number) => {
                            const styleClass = classNames('Calendar-item', day.type, {
                                selected: day.selected,
                                today: day.today,
                            });
                            return (<td
                                key={'col_' + j}
                                className={styleClass}
                                onClick={this.onDateSelect.bind(this, day, j)}
                            >
                                <span>{day.date}</span>
                            </td>);
                        })
                    }
                </tr>);
        });
    }

    selectDate(value: any, event: any) {
        const {currentDate}: any = this.state;
        this.setDate(value);
        const selectedValue = dateFormat(currentDate, this.props.format!);
        this.setState({
            value: selectedValue,
        }, () => {
            const v = dateFormat(currentDate, this.props.format!);
            if (this.props.onChange && event) {
                (this.props.onChange as (event: any) => void)(v);
            }
        });
    }

    selectReset() {
        for (const day of this.state.calendar!) {
            (day as Array<any>).forEach((v: any) => {
                v.selected = false;
            });
        }
    }

    onDateSelect = (item: any, event: any) => {
        if (item.type === 'current') {
            this.selectReset();
            this.selectDate(item.value, event);
            item.selected = true;
            this.handleClose();
        }
    }

    toChangeDate = (add: number, year: boolean = false) => {
        const {currentYear, currentMonth}: any = this.state;
        if (year) {
            this.setState({
                currentYear: currentYear + add,
            });
        } else {
            this.setState({
                currentMonth: currentMonth + add,
            });
        }
    }

    handleClose = () => {
        this.setState({
            visible: false,
        });
        if (this.props.onClose) {
            (this.props.onClose as () => void)();
        }
    }

    handleClick = () => {
        this.setState({
            visible: true,
        });
    }

    render() {
        const {className, ...other} = this.props;
        const {currentMonth, currentYear, visible}: any = this.state;
        const styleClass = classNames('Calendar-panel', className);
        const otherProps: object = getOtherProperties(other,
            ['firstDayOfWeek', 'format', 'lang', 'minDate', 'maxDate', 'onClose',
                'onChange', 'onOpen', 'value', 'visible']);
        return (
            <div className="Calendar">
                <Inputtext readOnly={true} onClick={this.handleClick} value={this.state.value}/>
                <Portal visible={visible!} mountNode={document.body}>
                    <div className={styleClass} {...otherProps}>
                        <div className="Calendar-mask" onClick={this.handleClose}/>
                        <FadeInUp in={visible!} className="Calendar-wrapper">
                            <div className="Calendar-wrapper">
                                <div className="Calendar-header">
                                    <div className="Calendar-select">
                                        <div
                                            className="Calendar-select-prev"
                                            onClick={this.toChangeDate.bind(this, -1, false)}
                                        >
                                            <i className="icon icon-prev"/>
                                        </div>
                                        <div className="Calendar-month">
                                            {this._selectLocale.monthNamesShort[currentMonth! - 1]}
                                        </div>
                                        <div
                                            className="Calendar-select-next"
                                            onClick={this.toChangeDate.bind(this, 1, false)}
                                        >
                                            <i className="icon icon-next"/>
                                        </div>
                                    </div>
                                    <div className="Calendar-select">
                                        <div
                                            className="Calendar-select-prev"
                                            onClick={this.toChangeDate.bind(this, -1, true)}
                                        >
                                            <i className="icon icon-prev"/>
                                        </div>
                                        <div className="Calendar-year">{currentYear}</div>
                                        <div
                                            className="Calendar-select-next"
                                            onClick={this.toChangeDate.bind(this, 1, true)}
                                        >
                                            <i className="icon icon-next"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="Calendar-body">
                                    <table>
                                        <thead>
                                        <tr>{this.createWeek()}</tr>
                                        </thead>
                                        <tbody className="Calendar-table-body">
                                        {this.createDate()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </FadeInUp>
                    </div>
                </Portal>
            </div>
        );
    }
}
