import * as React from 'react';
import * as classNames from 'classnames';
import Message from '../Message';
import {ToastProps} from './PropsType';

let toastInstance: any;

const getToastInstance = (props: any) => {
    if (toastInstance) {
        return toastInstance;
    }
    return Message.create({...props});
};

export class Toast {
    props: ToastProps;

    constructor(props: any) {
        const position = props.position ? props.position : 'center';
        props.className = `Toast Toast-${position}`;
        this.props = props;
        toastInstance = getToastInstance({
            hideBackdrop: true,
            className: 'Toast-group',
            onClose: props.onClose || (() => false),
        });
        this.create();
    }

    create() {
        const props = Object.assign({}, this.props);
        const {type, avatar, message, onClose} = props;
        props.message = (
            <div
                className={
                    classNames(['Toast-item', `Toast-${type}`])}
            >
                {!!avatar ? <div className="Toast-avatar">{avatar}</div> : null}
                <div className="Toast-content">{message}</div>
            </div>
        );
        props.onClose = () => {
            if (onClose) {
                onClose();
            }
        };
        toastInstance.create({...props});
    }
}

export default {
    show(props: ToastProps) {
        return new Toast({...props});
    },
    info(props: ToastProps) {
        props.type = 'info';
        return new Toast({...props});
    },
    success(props: ToastProps) {
        props.type = 'success';
        return new Toast({...props});
    },
    warning(props: ToastProps) {
        props.type = 'warning';
        return new Toast({...props});
    },
    error(props: ToastProps) {
        props.type = 'error';
        return new Toast({...props});
    },
    close() {
        if (toastInstance) {
            toastInstance.clearAll();
            toastInstance = null;
        }
    },
};
