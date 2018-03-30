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
    selectionChange?: Function;
    selectionMode?: string;
    template?: Function;
    value: TreeNode[];
    onNodeCollapse?: Function;
    onNodeExpand?: Function;
    onNodeSelect?: Function;
    onNodeUnselect?: Function;
}

export interface TreeState {
    selection?: any;
    value?: TreeNode[];
}
