import * as React from 'react';
import * as classNames from 'classnames';
import {TreeItemProps} from './PropsType';

export default class TreeItem extends React.PureComponent<TreeItemProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-TreeItem',
    };

    componentDidMount() {
        if (this.props.node) {
            if (this.props.parentNode) {
                this.props.node.parent = this.props.parentNode;
            }
            this.forceUpdate();
        }
    }

    componentWillReceiveProps(nextProps: TreeItemProps) {
        if (('node' in nextProps && nextProps.node !== this.props.node!) ||
            'selection' in nextProps && nextProps.selection !== this.props.selection!) {
            this.forceUpdate();
        }
    }

    getIcon(node: any) {
        let icon: any = '';

        if (node.icon) {
            icon = node.icon;
        } else {
            icon = node.expanded && node.children && node.children.length ?
                (node.expandedIcon || (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#757575">
<path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
                    </svg>)) : (node.collapsedIcon || (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#757575">
<path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
                    </svg>));
        }
        if (this.isSelected()) {
            icon = (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#4285F4">
<path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>
                </svg>
            );
        }
        return icon;
    }

    isLeaf() {
        const node: any = this.props.node;
        return node.leaf === false ? false : !(node.children && node.children.length);
    }

    isSelected() {
        const tree: any = this.props.tree;
        return tree.isSelected(this.props.node);
    }

    toggle = (event: any) => {
        event.stopPropagation();
        const node: any = this.props.node;
        const tree: any = this.props.tree;
        if (node.expanded) {
            if (typeof tree.onNodeCollapse === 'function') {
                tree.onNodeCollapse({originalEvent: event, node: node});
            }
        } else {
            if (typeof tree.onNodeExpand === 'function') {
                tree.onNodeExpand({originalEvent: event, node: node});
            }
        }

        node.expanded = !node.expanded;
        this.forceUpdate();
    }

    onNodeClick = (event: any) => {
        const tree: any = this.props.tree;
        tree.onNodeClick(event, this.props.node);
    }

    onNodeTouchEnd = () => {
        const tree: any = this.props.tree;
        tree.onNodeTouchEnd();
    }

    render() {
        const {className, node, prefixCls, tree}: any = this.props;
        const styleClass = classNames(
            prefixCls,
            {
                [`${prefixCls}-leaf`]: this.isLeaf(),
            },
            className,
        );
        const containerStyle = {
            paddingLeft: 36,
        };
        const contentClass = classNames(
            `${prefixCls}-content`,
            {
                [`${prefixCls}-selectable`]: tree.props.selectionMode && node.selectable !== false,
                [`${prefixCls}-content-selected`]: this.isSelected(),
            },
        );
        const expandedStyle: any = {
            display: node.expanded ? 'block' : 'none',
        };
        const labelClass = classNames(
            `${prefixCls}-menu-label`,
        );
        const arrowStyle: any = {
            pointerEvents: 'none',
            display: 'block',
            width: '100%',
            height: '100%',
            fill: 'rgb(117, 117, 117)',
        };
        const toggleClass = classNames(
            `${prefixCls}-toggle`,
            {
                [`${prefixCls}-expanded`]: node.expanded,
            },
        );
        const template = tree.getTemplateForNode(node);
        const selection = Array.isArray(this.props.selection) ? [...this.props.selection] : this.props.selection;
        return (
            <li className={styleClass} style={containerStyle}>
                <div className={contentClass} onClick={this.onNodeClick} onTouchEnd={this.onNodeTouchEnd}>
                    <button className={toggleClass} onClick={this.toggle}>
                        <span>
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" style={arrowStyle}>
                            <g><path d="M7 10l5 5 5-5z"/></g></svg>
                        </span>
                    </button>
                    <div className={`${prefixCls}-label`}>
                        {tree && tree.props.selectionMode === 'checkbox' ? (<div className={`${prefixCls}-checkbox`}>
                            <div className={`${prefixCls}-checkbox-box`}>
                                <div className={`${prefixCls}-checkbox-icon`}>
                                    {node.partialSelected ? (
                                        <svg fill="#4285F4" height="24" viewBox="0 0 24 24" width="24">
                                            <defs>
                                                <path d="M0 0h24v24H0z" id="a"/>
                                            </defs>
                                            <clipPath id="b">
                                                <use overflow="visible" xlinkHref="#a"/>
                                            </clipPath>
                                            <path
                                                clipPath="url(#b)"
                                                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
                                            />
                                        </svg>) : (this.isSelected() ?
                                        (<svg fill="#4285F4" height="24" viewBox="0 0 24 24" width="24">
                                            <path d="M0 0h24v24H0z" fill="none"/>
<path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-914l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                        </svg>) : (<svg fill="#757575" height="24" viewBox="0 0 24 24" width="24">
<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                                            <path d="M0 0h24v24H0z" fill="none"/>
                                        </svg>))}
                                </div>
                            </div>
                        </div>) : null}
                        <span>{this.getIcon(node)}</span>
                        <span className={labelClass}>
                        {!template ? node.label : template}
                    </span>
                    </div>
                </div>
                {node.children && node.expanded ? (<ul className={`${prefixCls}-children`} style={expandedStyle}>
                    {
                        node.children.map((childNode: any, index: number) => {
                            return (
                                <TreeItem
                                    selection={selection}
                                    tree={tree}
                                    node={childNode}
                                    parentNode={node}
                                    key={`TreeNode-${index}`}
                                    index={index + this.props.index!}
                                />);
                        })
                    }
                </ul>) : null}

            </li>
        );
    }
}
