import * as React from 'react';
import * as classNames from 'classnames';
import Message from '../Message';
import Icon from '../Icon';
import FadeInDown from '../Transitions/FadeInDown';
import {NotificationProps} from './PropsType';

let notificationInstance: any;

const getNotificationInstance = (props: any) => {
    if (notificationInstance) {
        return notificationInstance;
    }
    return Message.create({...props});
};

export class Notification {
    currentItem: any;
    props: NotificationProps;

    constructor(props: any) {
        props.prefixCls = 'bm-Notification';
        props.delay = 0;
        this.props = props;
        notificationInstance = getNotificationInstance({
            hideBackdrop: true, className: 'bm-Notification-group',
            onClose: props.onClose || (() => false),
        });
        this.currentItem = this.create();
    }

    handleClose = () => {
        notificationInstance.remove(this.currentItem.key);
    }

    create() {
        const props = Object.assign({}, this.props);
        const {type, avatar, message, onClose, prefixCls, progress, title} = props;
        const notiClass = classNames(
            `${prefixCls! + type!}`, `${prefixCls}-item`,
        );
        props.message = (
            <FadeInDown in={true}>
                <div className={notiClass} key="Notification-item">
                    {avatar ? (<div className={`${prefixCls}-avatar`}>{avatar}</div>) : null}
                    <div className={`${prefixCls}-item-content`}>
                        <div className={`${prefixCls}-title`}>{title}</div>
                        <div className={`${prefixCls}-message`}>{message}</div>
                    </div>
                    <a className={`${prefixCls}-close`} onClick={this.handleClose}><Icon icon="close"/></a>
                    {progress ? (<div className={`${prefixCls}-progress`}>
                        <div className={`${prefixCls}-progress-bar`}/>
                    </div>) : null}
                </div>
            </FadeInDown>
        );
        props.onClose = () => {
            if (onClose) {
                onClose();
            }
        };
        return notificationInstance.create({...props});
    }
}

export default {
    show(props: NotificationProps) {
        return new Notification({...props});
    },
    info(props: NotificationProps) {
        props.type = 'info';
        return new Notification({...props});
    },
    success(props: NotificationProps) {
        props.type = 'success';
        return new Notification({...props});
    },
    warning(props: NotificationProps) {
        props.type = 'warning';
        return new Notification({...props});
    },
    error(props: NotificationProps) {
        props.type = 'error';
        return new Notification({...props});
    },
    close() {
        if (notificationInstance) {
            notificationInstance.clearAll();
            notificationInstance = null;
        }
    },
};
