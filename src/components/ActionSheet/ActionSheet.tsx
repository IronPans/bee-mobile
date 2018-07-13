import * as React from 'react';
import * as classNames from 'classnames';
import Message from '../Message';
import {FadeInUp} from '../Transitions';
import {ActionSheetProps} from './PropsType';

let actionSheetInstance: any;

const getActionSheetInstance = (props: any) => {
    if (actionSheetInstance) {
        return actionSheetInstance;
    }
    return Message.create({...props});
};

export class ActionSheet {
    props: ActionSheetProps;
    currentItem: any;

    constructor(props: any) {
        props.delay = 0;
        props.actionClass = props.actionClass || 'bm-ActionSheet-group';
        props.prefixCls = 'bm-ActionSheet';
        props.className = props.prefixCls;
        props.cancelText = props.cancelText || 'cancel';
        props.visible = true;
        this.props = props;
        actionSheetInstance = getActionSheetInstance({
            hideBackdrop: true,
            className: props.actionClass,
            onClose: props.onClose || (() => false),
        });
        this.currentItem = this.create();
    }

    handleClose = () => {
        actionSheetInstance.remove(this.currentItem.key);
    }

    handleClick = (button: any, event: any) => {
        if (button.onClick) {
            button.onClick({
                button, originalEvent: event,
            });
        }
        this.handleClose();
    }

    addButtons() {
        const {buttons, prefixCls, title} = this.props;
        const addGroup = (btns: any): any => {
            let num = 0;
            const children: any = [];
            if (title) {
                children.push(<div key="title" className="bm-ActionSheet-title">{title}</div>);
            }
            for (const button of btns) {
                if (Array.isArray(button)) {
                    children.push(addGroup(button));
                } else {
                    children.push(
                        <div
                            key={`ActionSheetButton${num}`}
                            onClick={this.handleClick.bind(button)}
                            className={`${prefixCls}-button`}
                        >
                        {button.text}
                        </div>);
                }
                num++;
            }
            if (this.props.cancel) {
                const cancelClass = classNames(
                    `${prefixCls}-button`,
                    `${prefixCls}-cancel`,
                );
                children.push(
                    <div
                         key={`ActionSheetButton-cancel`}
                         onClick={this.handleClose}
                         className={cancelClass}
                    >
                    {this.props.cancelText}
                    </div>);
            }
            return children;
        };
        return addGroup(buttons!);
    }

    create() {
        const props: any = Object.assign({}, this.props);
        const {element, onClose, prefixCls, visible = false} = props;
        const styleClass = classNames(
            `${prefixCls}-item`,
        );
        props.message = (
            <FadeInUp in={visible}>
                <div className={styleClass} key="ActionSheet-item">
                    {element ? element : this.addButtons()}
                </div>
            </FadeInUp>
        );
        props.onClose = () => {
            if (onClose) {
                onClose();
            }
        };
        return actionSheetInstance.create({...props});
    }
}

export default {
    show(props: any) {
        return new ActionSheet({...props});
    },
    close() {
        if (actionSheetInstance) {
            actionSheetInstance.clearAll();
            actionSheetInstance = null;
        }
    },
};
