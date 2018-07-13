import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export interface SwiperProps extends BaseProps {
    activeIndex?: number;
    autoplayDisableOnInteraction?: boolean;
    autoplay?: boolean;
    centerMode?: boolean;
    delay?: number;
    direction?: 'horizontal' | 'vertical';
    easing?: any;
    effect?: 'slide' | 'fade';
    initialSlide?: number;
    loop?: boolean;
    navigation?: boolean | {
        nextEl?: React.ReactElement<any>;
        prevEl?: React.ReactElement<any>;
    };
    pagination?: boolean | ((event: any) => void);
    paginationClickable?: boolean;
    slideWidth?: number;
    slideHeight?: number;
    spaceBetween?: number;
    speed?: number;
    updateOnImagesReady?: boolean;
    observe?: boolean;
    observeParents?: boolean;
    on?: {
        init?: () => void;
        imagesReady?: () => void;
        slideChange?: (index: number, target: any) => void;
        transitionStart?: (index: number, target: any) => void;
        transitionEnd?: (index: number, target: any) => void;
    };
    touch?: boolean;
}

export interface SwiperState {
    activeIndex: number;
    height?: number;
    opacity?: number;
    x?: number;
    y?: number;
    width: number;
}
