import * as React from 'react';
import * as classNames from 'classnames';
import { Collapse } from '../Transitions';
import Ripple from '../Ripple';
import { AccordionProps, AccordionState } from './PropsType';

export default class Accordion extends React.PureComponent<AccordionProps, AccordionState> {
    static defaultProps: AccordionProps = {
        closeOthers: false,
        disabled: false,
        disableRipple: false,
        expanded: false,
        prefixCls: 'bm-Accordion',
    };

    expanded: boolean = false;

    constructor(props: AccordionProps) {
        super(props);
        let expanded = false;
        if (props.expanded) {
            expanded = props.expanded;
        }
        this.state = {
            expanded,
        };
    }

    componentWillReceiveProps(nextProps: any) {
        if ('expanded' in nextProps &&
            this.props.expanded !== nextProps.expanded) {
            this.setState({
                expanded: nextProps.expanded,
            });
        }
    }

    handleToggle = (event: any) => {
        const { disabled, onChange, index, name } = this.props;
        if (disabled) {
            return;
        }
        const {expanded} = this.state;
        if (onChange) {
            onChange({
                event,
                index: name || index,
                expanded,
            });
        }
    }

    render() {
        const { children, className, disableRipple, index, header, prefixCls } = this.props;
        const { expanded } = this.state;
        const styleClass = classNames(
            prefixCls,
            {
                [`${prefixCls}-expanded`]: expanded,
            },
            className,
        );
        return (
            <div className={styleClass}>
                <div className="bm-AccordionHeader" onClick={this.handleToggle}>
                    <div className="bm-AccordionHeader-toggle">
                        {header}
                    </div>
                    {!disableRipple ? (
                        <Ripple hidden={false}/>) : null}
                </div>
                <Collapse in={expanded} className="bm-AccordionContent">
                    <React.Fragment>
                        <div className="bm-AccordionContentInner">
                            {children}
                        </div>
                    </React.Fragment>
                </Collapse>
            </div>
        );
    }
}
