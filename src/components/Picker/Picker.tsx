import * as React from 'react';
import * as classNames from 'classnames';
import Portal from '../Portal';
import Button from '../Button';
import PickerItem from './PickerItem';
import {equals, getOtherProperties} from '../common/Utils';
import {FadeInUp, Fade} from '../Transitions';
import {PickerProps, PickerState} from './PropsType';

export default class Picker extends React.PureComponent<PickerProps, PickerState> {
    static defaultProps: PickerProps = {
        data: [],
        format: '/',
    };
    state: PickerState = {
        data: [],
        inputValue: '',
        value: [],
        visible: false,
    };
    visible: boolean = false;
    lastInputValue: any;
    bodyOverflow: any = '';

    componentDidMount() {
        this.bodyOverflow = document.body.style.overflow;
        const {data, defaultValue}: any = this.props;
        if ('data' in this.props && Array.isArray(this.props.data!) &&
            data.length > 0) {
            const value: any = defaultValue ? this.getCurrentIndex(data!,
                this.getDefaultValue(data!, defaultValue!)) : [];
            this.setState({
                data, value,
                inputValue: defaultValue && this.fetchValue(data, defaultValue, 'label'),
            });
            this.lastInputValue = value;
        }
    }

    componentWillReceiveProps(nextProps: PickerProps) {
        const {data, visible, value: valueProps}: any = this.props;
        if (('visible' in nextProps && visible !== nextProps.visible) ||
            ('data' in nextProps && data !== nextProps.data) ||
            ('value' in nextProps && valueProps !== nextProps.value)) {
            const dValue = nextProps.value;
            let value: any = nextProps.value ? this.getCurrentIndex(nextProps.data!,
                this.getDefaultValue(nextProps.data!, dValue)) : this.state.value!;
            if (!nextProps.visible || !this.state.visible) {
                value = this.lastInputValue;
            }
            this.setState({
                visible: nextProps.visible!,
                value,
                data: nextProps.data!,
            }, () => {
                this.stopBodyScroll(this.state.visible);
            });
        }
    }

    getDefaultValue(data: any[], defaultValue: any) {
        let value: any[] = [];
        if (Array.isArray(defaultValue)) {
            value = defaultValue;
        } else if (typeof defaultValue === 'string') {
            value = (defaultValue as any).split(this.props.format!).map((v: any) => ({
                value: v,
            }));
        } else {
            let child: any = [...data];
            while (child && child.length > 0) {
                value.push({
                    label: child[0].label,
                    value: child[0].value,
                });
                child = child[0] && child[0].children;
            }
        }
        return value;
    }

    getCurrentIndex = (data: any, selectedValue: any) => {
        const value: any = [];
        if (selectedValue) {
            let child: any = [...data!];
            selectedValue.map((v: any) => {
                if (child && child.length > 0) {
                    for (let i = 0; i < child.length; i++) {
                        if (equals(child[i], v, 'value')) {
                            child = child[i] && child[i].children;
                            value.push(i);
                            break;
                        }
                    }
                }
            });
        }
        return value;
    }

    getItems(data: any, value: any) {
        const children: any[] = [];
        if (data && data.length > 0) {
            let num = 0;
            let child: any = [...data!];
            while (child && child.length > 0) {
                const index: number = (value as any[])[num] || 0;
                children.push({num, index, child});
                child = child[index] && child[index].children!;
                num++;
            }
            for (let i = 0; i < children.length; i++) {
                const childData: any = children[i];
                children[i] = (
                    <PickerItem
                        key={childData.num}
                        index={childData.num}
                        data={childData.child}
                        style={{width: 100 / children.length + '%'}}
                        disabled={this.props.disabled}
                        value={childData.index}
                        onValueChange={this.handleValueChange}
                    />);
            }
        }
        return children;
    }

    fetchValue(data: any, value: Array<number>, field: string, seperator: string = '/') {
        const selected: any = [];
        if (Array.isArray(data) && value) {
            let child: any = data;
            let i = 0;
            while (child && child.length > 0) {
                child = child[value[i] || 0];
                if (child) {
                    selected.push({
                        label: child.label,
                        value: child.value,
                    });
                }
                i++;
                child = child && child.children;
            }
        }
        return selected.map((item: any) => {
            return item[field];
        }).join(seperator);
    }

    handleClose = () => {
        this.setState({
            value: this.lastInputValue,
            visible: false,
        });
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    handleValueChange = (event: any) => {
        const value: any = [...this.state.value!];
        value[event.index] = event.activeIndex;
        this.setState({
            value,
        });
        if (this.props.onValueChange) {
            this.props.onValueChange({
                value: event.value,
                index: event.index,
            });
        }
    }

    handleConfirm = () => {
        const value: any = [...this.state.value!];
        const inputValue = this.fetchValue(this.state.data, value, 'label');
        this.setState({
            value,
            inputValue,
            visible: false,
        });
        this.lastInputValue = value;
        if (this.props.onClose) {
            this.props.onClose();
        }
        if (this.props.onChange) {
            this.props.onChange(inputValue);
        }
    }

    stopBodyScroll(visible: boolean) {
        if (this.bodyOverflow === 'hidden') {
            return;
        }
        if (visible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = this.bodyOverflow;
        }
    }

    handleClick = () => {
        this.setState({
            visible: true,
        }, () => {
            this.stopBodyScroll(this.state.visible);
        });
        if (this.props.onOpen) {
            (this.props.onOpen as () => void)();
        }
    }

    render() {
        const {className, ...other} = this.props;
        const {data, inputValue, value, visible}: any = this.state;
        const styleClass = classNames(
            'Picker-panel',
            {
                'Picker-open': visible,
            },
            className,
        );
        const otherProps: object = getOtherProperties(other,
            ['defaultValue', 'children', 'data', 'format', 'onChange', 'onOpen', 'onValueChange', 'visible']);
        return (
            <div className="Picker">
                <div className="Picker-input" onClick={this.handleClick}>
                    {inputValue}</div>
                <Portal visible={visible} mountNode={document.body}>
                    <div className={styleClass} {...otherProps}>
                        <Fade in={visible}>
                            <div className="Picker-mask" onClick={this.handleClose}/>
                        </Fade>
                        <FadeInUp in={visible} className="Picker-wrapper">
                            <div className="Picker-footer">
                                <Button onClick={this.handleClose}>Cancel</Button>
                                <Button onClick={this.handleConfirm}>Done</Button>
                            </div>
                            <div className="Picker-body">
                                <div className="Picker-top-overlay"/>
                                <div className="Picker-bottom-overlay"/>
                                <div className="Picker-line"/>
                                {this.getItems(data, value)}
                            </div>
                        </FadeInUp>
                    </div>
                </Portal>
            </div>
        );
    }
}
