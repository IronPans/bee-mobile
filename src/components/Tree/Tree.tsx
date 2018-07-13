import * as React from 'react';
import * as classNames from 'classnames';
import {TreeNode} from './TreeNode';
import TreeItem from './TreeItem';
import {TreeProps, TreeState} from './PropsType';

export default class Tree extends React.PureComponent<TreeProps, TreeState> {
    static defaultProps = {
        passSelectedUp: true,
        passSelectedDown: true,
        prefixCls: 'bm-Tree',
        value: [],
    };
    nodeTouched: boolean = false;
    selection: any = [];

    constructor(props: TreeProps) {
        super(props);
        this.state = {
            selection: {},
            value: (props.value as any).length > 0 ? props.value : [],
        };
        this.selection = Array.isArray(props.selection) ? [...props.selection] : props.selection;
    }

    componentWillReceiveProps(nextProps: TreeProps) {
        if ('value' in nextProps && nextProps.value !== this.props.value!) {
            this.setState({
                value: nextProps.value,
            });
        }
    }

    onNodeClick(event: any, node: TreeNode) {
        const {selectionChange, onNodeUnselect, onNodeSelect,
            passSelectedDown, passSelectedUp, selectionMode, selection}: any = this.props;
        if (selectionMode) {
            const index = this.findIndexInSelection(node);
            const selected = (index >= 0);

            if (this.isCheckboxSelectionMode()) {
                if (selected) {
                    if (passSelectedDown) {
                        this.passDown(node, false);
                    } else {
                        this.selection = this.getSelection(index);
                    }

                    if (passSelectedUp && node.parent) {
                        this.passUp(node.parent, false);
                    }
                    if (typeof selectionChange === 'function') {
                        selectionChange(this.selection);
                    }
                    if (typeof onNodeUnselect === 'function') {
                        onNodeUnselect({originalEvent: event, node: node});
                    }
                } else {
                    if (passSelectedDown) {
                        this.passDown(node, true);
                    } else {
                        this.selection = [...selection || [], node];
                    }

                    if (passSelectedUp && node.parent) {
                        this.passUp(node.parent, true);
                    }
                    if (typeof selectionChange === 'function') {
                        selectionChange(this.selection);
                    }
                    if (typeof onNodeSelect === 'function') {
                        onNodeSelect({originalEvent: event, node: node});
                    }
                }
            } else {
                if (this.isSingleSelectionMode()) {
                    if (selected) {
                        this.selection = null;
                        if (typeof onNodeUnselect === 'function') {
                            onNodeUnselect({originalEvent: event, node: node});
                        }
                    } else {
                        this.selection = node;
                        if (typeof onNodeSelect === 'function') {
                            onNodeSelect({originalEvent: event, node: node});
                        }
                    }
                } else {
                    if (selected) {
                        this.selection = this.getSelection(index);
                        if (typeof onNodeUnselect === 'function') {
                            onNodeUnselect({originalEvent: event, node: node});
                        }
                    } else {
                        this.selection = [...this.selection || [], node];
                        if (typeof onNodeSelect === 'function') {
                            onNodeSelect({originalEvent: event, node: node});
                        }
                    }
                }
                if (typeof selectionChange === 'function') {
                    selectionChange(this.selection);
                }
            }
        }

        this.setState({
            selection: this.selection,
        });
        this.nodeTouched = false;
    }

    onNodeTouchEnd() {
        this.nodeTouched = true;
    }

    passUp(node: TreeNode, select: boolean) {
        if (node.children && node.children.length) {
            let selectedCount = 0;
            let childPartialSelected = false;
            for (const child of node.children) {
                if (this.isSelected(child)) {
                    selectedCount++;
                } else if (child.partialSelected) {
                    childPartialSelected = true;
                }
            }

            if (select && selectedCount === node.children.length) {
                this.selection = [...this.selection! || [], node];
                node.partialSelected = false;
            } else {
                if (!select) {
                    const index = this.findIndexInSelection(node);
                    if (index >= 0) {
                        this.selection = this.getSelection(index);
                    }
                }

                node.partialSelected = (childPartialSelected ||
                selectedCount > 0 && selectedCount !== node.children.length);
            }
        }

        const parent = node.parent;
        if (parent) {
            this.passUp(parent, select);
        }
    }

    passDown(node: TreeNode, select: boolean) {
        const index = this.findIndexInSelection(node);

        if (select && index === -1) {
            this.selection = [...this.selection! || [], node];
        } else if (!select && index > -1) {
            this.selection = this.getSelection(index);
        }

        node.partialSelected = false;

        if (node.children && node.children.length) {
            for (const child of node.children) {
                this.passDown(child, select);
            }
        }
    }

    getSelection(index: number) {
        return this.selection.filter((val: any, i: number) => (val && i !== index));
    }

    findIndexInSelection(node: TreeNode) {
        let index = -1;

        if (this.props.selectionMode && this.selection) {
            if (this.isSingleSelectionMode()) {
                index = (this.selection === node) ? 0 : -1;
            } else {
                for (let i = 0; i < this.selection.length; i++) {
                    if (this.selection[i] === node) {
                        index = i;
                        break;
                    }
                }
            }
        }

        return index;
    }

    isSelected(node: TreeNode) {
        return this.findIndexInSelection(node) !== -1;
    }

    isSingleSelectionMode() {
        return this.props.selectionMode && this.props.selectionMode === 'single';
    }

    isCheckboxSelectionMode() {
        return this.props.selectionMode && this.props.selectionMode === 'checkbox';
    }

    getTemplateForNode(node: TreeNode) {
        const template: any = this.props.template;
        if (typeof template === 'function') {
            return template(node);
        }
        return null;
    }

    render() {
        const {className, children, emptyMessage, loading, prefixCls, ...other} = this.props;
        const styleClass = classNames(
            prefixCls, className,
        );
        const value: any = this.state.value;
        const selection = Array.isArray(this.state.selection) ?
            [...this.state.selection] : this.state.selection;
        return (
            <div className={styleClass}>
                <div className={styleClass}>
                    {loading ? (<div className={`${prefixCls}-loading`}>
                        <div className={`${prefixCls}-loading-mask`}/>
                        <div className={`${prefixCls}-loading-content`}/>
                    </div>) : null}
                    <ul className={`${prefixCls}-inner`}>
                        {
                            value.map((node: any, index: number) => {
                                return (<TreeItem selection={selection} tree={this} node={node} key={`TreeNode-${index}`} index={index}/>);
                            })
                        }
                    </ul>
                    {!loading && value.length > 0 ?
                        <div className={`${prefixCls}-empty-message`}>{emptyMessage}</div> : null}
                </div>
            </div>
        );
    }
}
