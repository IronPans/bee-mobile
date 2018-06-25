import * as React from 'react';
import * as classNames from 'classnames';
import {KnobProps, KnobState} from './PropsType';

export default class Knob extends React.PureComponent<KnobProps, KnobState> {
    static defaultProps: KnobProps = {
        animated: true,
        barColor: '#5db2ff',
        gapDegree: 0,
        gapPosition: 'top',
        lineWidth: 6,
        lineCap: 'round',
        prefixCls: 'bm-Knob',
        size: 100,
        trackColor: '#eee',
        value: 0,
    };

    constructor(props: KnobProps) {
        super(props);
        let value = 0;
        if (props.value! > 0) {
            value = props.value!;
        }
        this.state = {
            value,
        };
    }

    componentWillReceiveProps(nextProps: KnobProps) {
        if ('value' in nextProps && nextProps.value !== this.props.value) {
            this.setState({
                value: nextProps.value!,
            });
        }
    }

    getStrokeMessage(radius: number, gapPosition: string) {
        let beginPositionX = 0;
        let beginPositionY = -radius;
        let endPositionX = 0;
        let endPositionY = -2 * radius;
        switch (gapPosition) {
            case 'left':
                beginPositionX = -radius;
                beginPositionY = 0;
                endPositionX = 2 * radius;
                endPositionY = 0;
                break;
            case 'right':
                beginPositionX = radius;
                beginPositionY = 0;
                endPositionX = -2 * radius;
                endPositionY = 0;
                break;
            case 'bottom':
                beginPositionY = radius;
                endPositionY = 2 * radius;
                break;
            default:
        }
        const pathString = 'M 50,50 m ' + beginPositionX + ',' + beginPositionY + '\n     a ' +
            radius + ',' + radius + ' 0 1 1 ' + endPositionX + ',' + -endPositionY + '\n     a ' +
            radius + ',' + radius + ' 0 1 1 ' + -endPositionX + ',' + endPositionY;
        return {
            pathString
        };
    }

    render() {
        const {animated, barColor, children, className, gapDegree, gapPosition,
            lineCap, lineWidth, prefixCls, size, trackColor, value, ...other} = this.props;
        const styleClass = classNames(
            prefixCls, className,
        );
        const styles = {
            width: size,
            height: size,
        };
        const radius = 50 - lineWidth! / 2;
        const len = Math.PI * 2 * radius;
        const dasharray = value! / 100 * len + 'px ' + len + 'px';
        const trailStyles: any = {
            stroke: trackColor!,
            strokeWidth: lineWidth!,
            fillOpacity: 0,
            strokeDasharray: len - gapDegree! + 'px ' + len + 'px',
            strokeDashoffset: '-' + gapDegree! / 2 + 'px',
            transition: animated! && 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        };
        const pathStyles: any = {
            stroke: barColor!,
            strokeWidth: lineWidth!,
            strokeLinecap: lineCap!,
            fillOpacity: 0,
            strokeDasharray: value! / 100 * (len - gapDegree!) + 'px ' + len + 'px',
            strokeDashoffset: '-' + gapDegree! / 2 + 'px',
            transition: animated! && 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s'
        };
        const strokeMessage = this.getStrokeMessage(radius, gapPosition!);
        return (
            <div className={styleClass} style={styles} {...other}>
                <div className={`${prefixCls}-wrapper`}>
                    <svg className={`${prefixCls}-circle`} viewBox="0 0 100 100">
                        <path className={`${prefixCls}-circle-trail`} style={trailStyles} d={strokeMessage.pathString}/>
                        <path className={`${prefixCls}-circle-path`} style={pathStyles} d={strokeMessage.pathString}/>
                    </svg>
                    <div className={`${prefixCls}-inner`}>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}
