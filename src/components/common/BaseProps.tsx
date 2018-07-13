import * as React from 'react';

export type BaseProps =  {
    className?: string;
    children?: React.ReactNode;
    prefixCls?: string;
    style?: React.CSSProperties;
};

export interface Props extends BaseProps {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
