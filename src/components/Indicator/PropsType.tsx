import * as React from 'react';

export interface IndicatorProps {
    delay?: number;
    message: React.ReactNode;
    size?: any;
    type: any;
    onClose?: () => void;
}
