import * as React from 'react';
import * as classNames from 'classnames';
import {AccordionGroupProps, AccordionGroupState} from './PropsType';

export default class AccordionGroup extends React.PureComponent<AccordionGroupProps, AccordionGroupState> {
    static defaultProps = {
        disableRipple: true,
        activeIndex: [],
        prefixCls: 'bm-AccordionGroup',
    };

    constructor(props: AccordionGroupProps) {
        super(props);
        this.state = {
            currentValue: Array.isArray(props.activeIndex) ? props.activeIndex : [props.activeIndex],
        };
    }

    componentWillReceiveProps(nextProps: any) {
        if ('activeIndex' in nextProps && nextProps.activeIndex !== this.props.activeIndex) {
            this.setState({
                currentValue: nextProps.activeIndex,
            });
        }
    }

    getCurrentValue() {
        let currentValue = this.state.currentValue || [];
        const accordion = this.props.closeOthers;

        if (!Array.isArray(currentValue)) {
            currentValue = [currentValue];
        }

        if (accordion && currentValue.length > 1) {
            currentValue = [currentValue[currentValue.length - 1]];
        }
        return currentValue;
    }

    handleChange = (event: any) => {
        const {onChange, closeOthers} = this.props;
        const index: number = event.index;
        const expanded = event.expanded;
        let currentValue: any = [...this.state.currentValue] || [];

        if (closeOthers) {
            currentValue = expanded ? [] : [index];
        } else if (expanded) {
            currentValue = currentValue.filter((value) => {
                return index !== value;
            });
        } else {
            currentValue.push(index);
        }
        this.setState({
            currentValue,
        });
        if (onChange) {
            onChange(currentValue);
        }
    }

    render() {
        const {
            children: childrenProp, className,
            closeOthers, disableRipple, prefixCls,
        } = this.props;
        const styleClass = classNames(
            prefixCls, className,
        );
        const currentValue = this.getCurrentValue();
        const children = React.Children.map(childrenProp, (child: React.ReactElement<any>, index: number) => {
            const {disabled, name} = child.props;
            const expanded = currentValue.indexOf(name || index) > -1;
            return React.cloneElement(child, {
                closeOthers,
                disableRipple,
                disabled,
                expanded,
                name,
                index,
                onChange: this.handleChange,
            });
        });
        return (
            <div className={styleClass}>
                {children}
            </div>
        );
    }
}
