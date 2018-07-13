import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export interface CardProps extends BaseProps {
    dir?: 'horizontal' | 'vertical';
}

export interface CardContentProps extends BaseProps {
}

export interface CardFooterProps extends BaseProps {
    action?: boolean;
}

export interface CardHeaderProps extends BaseProps {
    avatar?: React.ReactNode;
    action?: React.ReactNode;
    title?: React.ReactNode | string;
    subTitle?: React.ReactNode | string;
}
