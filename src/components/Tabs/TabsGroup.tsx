import * as React from 'react';
import * as classNames from 'classnames';
import {TabsGroupProps, TabsGroupState} from './PropsType';

export default class TabsGroup extends React.PureComponent<TabsGroupProps, TabsGroupState> {
    static defaultProps: TabsGroupProps = {
        activeIndex: 0,
        animated: true,
        centerMode: false,
        prefixCls: 'bm-TabsGroup',
        position: 'top',
        scrollable: false
    };

    state: TabsGroupState = {
        activeIndex: 0
    };

    wrapper: any;

    componentDidMount() {
        const {activeIndex}: any = this.props;
        if (activeIndex > 0) {
            this.setState({activeIndex});
        }
    }

    componentWillReceiveProps(nextProps: TabsGroupProps) {
        if ('activeIndex' in nextProps && this.props.activeIndex !== nextProps.activeIndex) {
            this.setState({
                activeIndex: nextProps.activeIndex!
            });
        }
    }

    handleChange = (activeIndex: number) => {
        this.setState({
            activeIndex
        });
        if (this.props.onChange) {
            (this.props.onChange as Function)(activeIndex);
        }
    };

    getRef = (node) => {
        this.wrapper = node;
    };

    render() {
        const {
            animated, activeIndex: activeIndexProps, centerMode, children, className,
            position, prefixCls, onChange, scrollable, ...other
        }: any = this.props;
        const styleClass = classNames(
            prefixCls,
            `${prefixCls}-${position}`,
            className
        );
        const {activeIndex} = this.state;
        const navChildren: any = [], containerChildren: any = [], otherChild: any = [];
        let num = 0;
        React.Children.forEach(children, (child: any, index: number) => {
            const type: any = child.type;
            const fnName = type.fnName;
            const props: any = {...child.props};
            props['key'] = index;
            if (fnName === 'Tabs') {
                props['activeIndex'] = activeIndex;
                props['onChange'] = this.handleChange;
                props['position'] = position;
                props['centerMode'] = centerMode;
                props['scrollable'] = scrollable;
                navChildren.push(React.cloneElement(child, props));
            } else if (fnName === 'TabContainer') {
                props['index'] = num;
                props['activeIndex'] = activeIndex;
                containerChildren.push(React.cloneElement(child, props));
                num++;
            } else {
                otherChild.push(React.cloneElement(child, props));
            }
        });
        const x = this.wrapper ? (-(this.wrapper as any).offsetWidth * activeIndex!) : 0;
        const y = this.wrapper ? (-(this.wrapper as any).offsetHeight * activeIndex!) : 0;
        const horizontal = position === 'left' || position === 'right';
        const wrapperStyles = {
            transform: !horizontal ? `translate3d(${x}px, 0, 0)` : `translate3d(0, ${y}px, 0)`,
            WebkitTransform: !horizontal ? `translate3d(${x}px, 0, 0)` : `translate3d(0, ${y}px, 0)`,
            msTransform: !horizontal ? `translate3d(${x}px, 0, 0)` : `translate3d(0, ${y}px, 0)`,
            WebkitTransition: animated ? '-webkit-transform .3s cubic-bezier(0.35, 0, 0.25, 1)' : '',
            transition: animated ? 'transform .3s cubic-bezier(0.35, 0, 0.25, 1)' : ''
        };
        return (
            <div className={styleClass} {...other}>
                {navChildren}
                <div className="bm-TabsContainerBox" ref={this.getRef}>
                    <div className="bm-TabsContainerWrapper" style={wrapperStyles}>
                        {containerChildren}
                    </div>
                </div>
                {otherChild}
            </div>
        );
    }
}