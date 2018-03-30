import * as React from 'react';
import * as classNames from 'classnames';
import {getOtherProperties} from "../common/Utils";
import {FabButtonProps, FabButtonState} from './PropsType';

export default class FabButton extends React.PureComponent<FabButtonProps, FabButtonState> {
    static defaultProps: FabButtonProps = {
        angle: 90,
        distance: 20,
        position: 'bottom-right',
        prefixCls: 'bm-FabButton',
        type: 'horizontal',
        reverse: false
    };
    state: FabButtonState = {
        visible: false
    };
    items: any = [];
    btnNode: any;
    itemWidth: number;
    itemsStyle: any[] = [];

    toggle = () => {
        if (this.state.visible) {
            this.close();
        } else {
            this.open();
        }
        this.setState({
            visible: !this.state.visible
        });
    };

    open() {
        const {delay, distance, position, reverse}: any = this.props;
        const op = reverse ? '-' : '';
        this.itemWidth = this.btnNode.offsetWidth;
        switch (this.props.type!) {
            case 'horizontal':
                for (let i = 0; i < this.items.length; i++) {
                    const x = op + ((this.itemWidth + distance) * (i + 1)) + 'px';
                    this.itemsStyle[i] = {'opacity': 1, 'left': x};
                }
                break;
            case 'vertical':
                for (let i = 0; i < this.items.length; i++) {
                    const x = op + ((this.itemWidth + distance) * (i + 1)) + 'px';
                    this.itemsStyle[i] = { 'opacity': 1, 'top': x};
                }
                break;
            case 'circle':
                const radius = this.itemWidth + distance;
                const dir: any = {
                    'center': -90,
                    'top-left': -180,
                    'bottom-left': 90,
                    'top-right': -90,
                    'bottom-right': 0
                };
                const rotation = dir[position!];
                for (let i = 0; i < this.items.length; i++) {
                    this.anim(i, rotation, radius, delay!);
                }
                break;
        }
    }

    anim(i: number, rotation: number, radius: number, delay: number) {
        // -180/左上(lt)、 90/左下(lb)、-90/右上(rt)、0/右下(rb)
        const angle = (this.props.angle! * i - rotation) / 180 * Math.PI;
        let x = Math.sin(angle) * radius;
        let y = Math.cos(angle) * radius;
        x = parseFloat(x.toFixed(3));
        y = parseFloat(y.toFixed(3));
        if (delay) {
            this.itemsStyle[i] = { 'transition-delay': delay * i + 'ms'};
        }
        const xy = 'scale(.9) translate(' + x + 'px,' + y + 'px)';
        this.itemsStyle[i] = {'opacity': 1, 'top': 0, 'transform': xy};
    }

    close() {
        for (let i = 0; i < this.items.length; i++) {
            this.itemsStyle[i] = {'left': '0px', 'opacity': 0,
                'top': '0px', 'transform': 'translate(0,0)'};
        }
    }

    getRef = (node: any) => {
        this.btnNode = node;
    };

    render() {
        const {className, children: childrenProp,
            icon, position, prefixCls, ...other} = this.props;
        const styleClass = classNames(
            prefixCls,
            {
                [`${prefixCls}-open`]: this.state.visible
            },
            `${prefixCls}-${position}`,
            className
        );
        this.items = React.Children.map(childrenProp, (child: React.ReactElement<any>, index: number) => {
            if (!React.isValidElement(child)) {
                return;
            }
            const styles = this.itemsStyle[index] ? this.itemsStyle[index] : {};
            return (
                <span style={styles} className={`${prefixCls}-item`} key={`item${index}`}>
                    {React.cloneElement(child, child.props)}
                </span>
            );
        });
        const otherProps = getOtherProperties(other, ['angle', 'delay', 'distance', 'reverse', 'type']);
        return (
            <div className={styleClass} {...otherProps}>
                <button ref={this.getRef} className={`${prefixCls}-btn`} onClick={this.toggle}>
                    <span className={`${prefixCls}-close`}>
                        <span/><span/><span/>
                    </span>
                    <span className={`${prefixCls}-inner`}>
                        {icon}
                    </span>
                </button>
                {this.items}
            </div>
        );
    }
}