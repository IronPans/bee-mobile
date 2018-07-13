import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export interface PageProps extends BaseProps {
    isActive?: boolean;
}

export interface ContentProps extends BaseProps {
    infiniteScroll?: boolean;
    height?: number | string;
    onInfinite?: (event: any) => void;
    onPullStart?: () => void;
    onPullMove?: () => void;
    onPullEnd?: () => void;
    onRefresh?: (event: any) => void;
    onContentScroll?: (event: any) => void;
    preloader?: React.ReactNode | string;
    pullToRefresh?: boolean;
    width?: number | string;
}

export interface ContentState {
    loading?: boolean;
    scrollTop?: number;
    states?: '' | 'down' | 'up' | 'refreshing';
    transitions?: boolean;
    x?: number;
    y?: number;
}
