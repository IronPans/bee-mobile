import * as React from 'react';
import * as classNames from 'classnames';
import {getOtherProperties} from '../common/Utils';
import {setTransitionDuration} from '../common/Dom';
import {PickerItemProps, PickerItemState} from './PropsType';

export default class PickerItem extends React.PureComponent<PickerItemProps, PickerItemState> {
    static defaultProps: PickerItemProps = {
        data: [],
    };
    state: PickerItemState = {
        data: [],
        activeIndex: 0,
        y: 0,
    };
    wrapper: any;
    itemHeight: number = 0;
    item: any;
    startY: number;
    isMobile: boolean;
    dragging: boolean;

    constructor(props: PickerItemProps) {
        super(props);
        this.isMobile = 'ontouchstart' in document;
    }

    componentDidMount() {
        if ('data' in this.props) {
            this.setState({
                data: this.props.data!,
            });
        }
    }

    componentWillReceiveProps(nextProps: PickerItemProps) {
        if ('data' in nextProps && this.props.data !== nextProps.data) {
            const dataProps = nextProps.data;
            const data: any[] = [...dataProps];
            this.setState({
                data,
            }, () => {
                this.setPosition(nextProps.value);
            });
        }
    }

    getItemRef = (node: any) => {
        if (!this.item) {
            this.item = node;
            this.itemHeight = node.offsetHeight;
            this.wrapper.style.height = this.itemHeight * 3 + 'px';
            this.setPosition(this.props.value);
        }
    }

    getWrapperRef = (node: any) => {
        this.wrapper = node;
    }

    getMenusItem() {
        const data: any = this.state.data;
        let y: any = this.state.y;
        const format: any = typeof this.props.format === 'function' ? this.props.format : (label: any) => {
            return label;
        };
        y = Math.max(Math.min(y, 0), -this.itemHeight * (data.length - 1));
        const activeIndex: number = Math.floor(Math.abs(y / this.itemHeight));
        return data.map((item: any, index: number) => {
            const styles = {
                transform: `rotateX(${25 * (index - activeIndex)}deg)`,
            };
            return (
                <div
                    key={index}
                    style={styles}
                    className="PickerItem-item"
                    ref={this.getItemRef}
                >{format(item.label)}
                </div>
            );
        });
    }

    setPosition(activeIndex: number) {
        const data: any = [...this.state.data!];
        if (activeIndex >= data.length) {
            activeIndex = data.length - 1;
        }
        const moveY: number = -activeIndex * this.itemHeight;
        this.setState({
            y: moveY,
            activeIndex,
        });
    }

    touchStart = (event: any) => {
        if ((this.state.data as any[]).length === 0) {
            return;
        }
        if (this.props.disabled) {
            return;
        }
        this.dragging = true;
        const touch = this.isMobile ? event.changedTouches[0] : event;
        this.startY = touch.pageY;
        setTransitionDuration(this.wrapper.firstElementChild, 0);
        document.addEventListener(this.isMobile ? 'touchmove' : 'mousemove', this.touchMove);
        document.addEventListener(this.isMobile ? 'touchend' : 'mouseup', this.touchEnd);
    }

    touchMove = (event: any) => {
        if (this.dragging) {
            if ((this.state.data as any[]).length === 0) {
                return;
            }
            const touch = this.isMobile ? event.changedTouches[0] : event;
            const eY = touch.pageY;
            this.setState({
                y: this.state.y! + (eY - this.startY),
            });
            this.startY = eY;
        }
    }

    touchEnd = () => {
        if (this.dragging) {
            const scroll = this.wrapper.firstElementChild;
            setTransitionDuration(scroll, 300);
            const length: any = [...this.state.data!].length;
            if (length === 0) {
                return;
            }
            const data: any = this.state.data;
            let y: any = this.state.y;
            y = Math.max(Math.min(y, 0), -this.itemHeight * (length - 1));
            const activeIndex: number = Math.floor(Math.abs(y / this.itemHeight));
            this.setState({
                y: -activeIndex * this.itemHeight,
                activeIndex,
            });
            if (this.props.onValueChange) {
                this.props.onValueChange({
                    activeIndex,
                    index: this.props.index!,
                    value: data[activeIndex],
                });
            }
            this.startY = 0;
        }
        this.dragging = false;
        document.removeEventListener(this.isMobile ? 'touchmove' : 'mousemove', this.touchMove);
        document.removeEventListener(this.isMobile ? 'touchend' : 'mouseup', this.touchEnd);
    }

    render() {
        const {className, data, ...other}: any = this.props;
        const styleClass = classNames(
            'PickerItem',
            className,
        );
        const otherProps: object = getOtherProperties(other,
            ['children', 'format', 'onChange', 'onValueChange', 'value']);
        return (
            <div className={styleClass} {...otherProps}>
                {data.key ? <div className="PickerItem-label">{data.key}</div> : null}
                <div className="PickerItem-wrapper" ref={this.getWrapperRef}>
                    <div
                        className="PickerItem-scroll"
                        style={{
                            transform: `translate3d(0, ${this.state.y}px, 0)`,
                        }}
                    >
                        {this.getMenusItem()}
                    </div>
                    <div
                        className="PickerItem-overlay"
                        onTouchStart={this.touchStart}
                        onMouseDown={this.isMobile ? () => { return; } : this.touchStart}
                    />
                </div>
            </div>
        );
    }
}
