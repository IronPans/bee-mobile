import * as React from 'react';
import * as classNames from 'classnames';
import {SPIN_TYPES, SpinProps} from './PropsType';
import {getOtherProperties} from '../common/Utils';

export default class Spin extends React.PureComponent<SpinProps, any> {
    static defaultProps = {
        height: 100,
        type: 'circleRound',
        size: 'xs',
        prefixCls: 'bm-Spin',
        width: 100,
        color: '#303548',
    };

    getSpinElement(type: SPIN_TYPES, spanSize: number) {
        const {prefixCls, color} = this.props;
        const spans: any[] = [];
        let num = 8;
        let height;
        if (type !== 'snake') {
            switch (type) {
                case 'lineSquare':
                case 'lineRound':
                case 'lineBounce':
                    num = 5;
                    break;
            }
            if (type === 'lineSquare' || type === 'lineRound') {
                height = spanSize * 0.1;
            }
            for (let i = 0; i < num; i++) {
                spans.push(<span key={i} style={{height, background: color}}/>);
            }
        } else {
            spans.push(<div className={`${prefixCls}-snake`} key="snake"/>);
        }

        return (
            <div className={classNames('loader', type)}>
                {spans}
            </div>
        );
    }

    getSize() {
        const {size, type}: any = this.props;
        let width: any = this.props.width;
        let height: any = this.props.height;
        switch (size) {
            case 'xs':
                width *= 0.25;
                height *= 0.25;
                break;
            case 'sm':
                width *= 0.5;
                height *= 0.5;
                break;
        }
        switch (type) {
            case 'lineSquare':
            case 'lineRound':
            case 'lineBounce':
                height = width * 0.5;
                break;
        }
        return {width, height};
    }

    render() {
        const {className, prefixCls, type, ...other} = this.props;
        const styleClass = classNames(
            prefixCls,
            className,
        );
        const otherProps = getOtherProperties(other, ['height', 'size', 'width']);
        const styles = {...this.getSize()};
        const children: React.ReactNode = this.getSpinElement(type!, styles.width);
        return (
            <div className={styleClass} {...otherProps} style={styles}>
                {children}
            </div>
        );
    }
}
