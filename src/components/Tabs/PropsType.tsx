import {BaseProps} from '../common/BaseProps';

export interface TabProps extends BaseProps {
    index?: number;
    disabled?: boolean;
    activeIndex?: number;
    onChange?: (index: number) => void;
}

export interface TabContainerProps extends BaseProps {
    index?: number;
    activeIndex?: number;
}

export interface TabContainerState {
    activeIndex?: number;
}

export interface TabsProps extends BaseProps {
    activeIndex?: number;
    centerMode?: boolean;
    scrollable?: boolean;
    position?: 'top' | 'right' | 'bottom' | 'left';
    onChange?: (index: number) => void;
}

export interface TabsState {
    activeIndex: number;
    x: number;
    y: number;
}

export interface TabsGroupProps extends BaseProps {
    animated?: boolean;
    activeIndex?: number;
    centerMode?: boolean;
    position?: 'top' | 'right' | 'bottom' | 'left';
    scrollable?: boolean;
    onChange?: (index: number) => void;
}

export interface TabsGroupState {
    activeIndex?: number;
}
