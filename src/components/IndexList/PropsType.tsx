import {BaseProps} from '../common/BaseProps';

export interface IndexListProps extends BaseProps {
}

export interface IndexListState {
    scrollTop?: number;
    current?: string;
}

export interface IndexSectionProps extends BaseProps {
    index?: string;
}
