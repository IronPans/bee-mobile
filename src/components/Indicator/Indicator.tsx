import * as React from 'react';
import * as classNames from 'classnames';
import Message from '../Message';
import Spin from '../Spin';
import {IndicatorProps} from './PropsType';

let indicatorInstance: any;

const getIndicatorInstance = () => {
    if (indicatorInstance) {
        return indicatorInstance;
    }
    return Message.create({hideBackdrop: true, className: 'Indicator-group'});
};

export class Indicator {
    props: IndicatorProps;

    constructor(props: any) {
        props.className = 'Indicator';
        props.size = 'xs';
        this.props = props;
        indicatorInstance = getIndicatorInstance();
        this.create();
    }

    create() {
        const props = Object.assign({}, this.props);
        const {type, message, onClose, size} = props;
        props.message = (
            <div
                className={
                    classNames(['Indicator-item'])
                }
            >
                <Spin size={size} type={type}/>
                <div className="Indicator-content">{message}</div>
            </div>
        );
        props.onClose = () => {
            if (onClose) {
                onClose();
            }
        };
        indicatorInstance.create({...props});
    }
}

export default {
    show(props?: any) {
        return new Indicator({...props});
    },
    close() {
        if (indicatorInstance) {
            indicatorInstance.clearAll();
            indicatorInstance = null;
        }
    },
};
