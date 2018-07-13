export interface TreeNode {
    label?: string;
    data?: any;
    type?: string;
    icon?: any;
    expandedIcon?: any;
    collapsedIcon?: any;
    leaf?: boolean;
    expanded?: boolean;
    parent?: TreeNode;
    partialSelected?: boolean;
    style?: string;
    styleClass?: string;
    selectable?: boolean;
    children?: TreeNode[];
}
