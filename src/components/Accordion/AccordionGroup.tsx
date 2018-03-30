import * as React from 'react';
import * as classNames from 'classnames';
import {AccordionGroupProps, AccordionGroupState} from './PropsType';

export default class AccordionGroup extends React.PureComponent<AccordionGroupProps, AccordionGroupState> {
    static defaultProps = {
        disableRipple: true,
        activeIndex: -1,
        prefixCls: 'bm-AccordionGroup'
    };

    constructor(props: AccordionGroupProps) {
        super(props);
        let activeIndex = -1;
        if (props.activeIndex! >= 0) {
            activeIndex = props.activeIndex!;
        }
        this.state = {
            activeIndex
        }
    }

    handleChange = (event: any) => {
        const {onChange, closeOthers} = this.props;
        const index: number = event.index;
        if (closeOthers) {
            this.setState({
                activeIndex: index
            });
        }
        if (onChange) {
            onChange(index);
        }
    };

    render() {
        const {children: childrenProp, className,
            closeOthers, disableRipple, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className
        );
        const {activeIndex} = this.state;
        const children = React.Children.map(childrenProp, (child: React.ReactElement<any>, index: number) => {
            const {disabled} = child.props;
            const expanded = index === activeIndex;
            return React.cloneElement(child, {
                closeOthers,
                disableRipple,
                disabled,
                expanded,
                index,
                onChange: this.handleChange
            });
        });
        return (
            <div className={styleClass}>
                {children}
            </div>
        );
    }
}