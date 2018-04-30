import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export interface PageProps extends BaseProps {
    isActive?: boolean;
}

export interface ContentProps extends BaseProps {
    infiniteScroll?: boolean;
    height?: number | string;
    onInfinite?: Function;
    onPullStart?: Function;
    onPullMove?: Function;
    onPullEnd?: Function;
    onRefresh?: Function;
    onContentScroll?: Function;
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