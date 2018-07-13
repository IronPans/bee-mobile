
import {BaseProps} from '../common/BaseProps';

export interface CalendarProps extends BaseProps {
    defaultValue?: string;
    firstDayOfWeek?: number;
    format?: string;
    lang?: 'cn' | 'en';
    minDate?: string;
    maxDate?: string;
    visible?: boolean;
    onChange?: (event: any) => void;
    onClose?: () => void;
    onOpen?: () => void;
}

export interface CalendarState {
    currentYear?: number;
    currentMonth?: number;
    currentDay?: number;
    currentDate?: any;
    currentWeek?: number;
    calendar?: any[];
    visible?: boolean;
    value?: any;
}
