import * as React from 'react';
import {BaseProps} from '../common/BaseProps';
import {TreeNode} from './TreeNode';
import Tree from './Tree';

export interface TreeItemProps extends BaseProps {
    tree?: Tree;
    index?: number;
    node?: TreeNode;
    parentNode?: any;
    selection?: any;
}

export interface TreeProps extends BaseProps {
    emptyMessage?: React.ReactNode;
    loading?: boolean;
    passSelectedUp?: boolean;
    passSelectedDown?: boolean;
    selection?: any;
    selectionChange?: () => void;
    selectionMode?: string;
    template?: () => void;
    value: TreeNode[];
    onNodeCollapse?: () => void;
    onNodeExpand?: () => void;
    onNodeSelect?: () => void;
    onNodeUnselect?: () => void;
}

export interface TreeState {
    selection?: any;
    value?: TreeNode[];
}
