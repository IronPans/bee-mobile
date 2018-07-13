import * as React from 'react';

export {default} from './Chip';
export {default as ChipGroup} from './ChipGroup';

export interface ChipNode {
    avatar?: React.ReactNode;
    label?: string;
    value?: any;
}
