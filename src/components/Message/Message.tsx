import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';
import MessageItem from './MessageItem';
import {MessageProps, MessageState} from './PropsType';

let seed = 0;
const now = Date.now();

const getUuid = () => {
    return `Message-${now}_${seed++}`;
};

export default class Message extends React.PureComponent<MessageProps, MessageState> {
    static create = (props: any = {}) => {
        let div: HTMLDivElement;
        div = document.createElement('div');
        document.body.appendChild(div);

        const message: any = ReactDOM.render(<Message {...props} />, div);
        return {
            create(props: any) {
                return message.add(props);
            },
            remove(key: any) {
                message.remove(key);
            },
            clearAll() {
                ReactDOM.unmountComponentAtNode(div);
                document.body.removeChild(div);
            },
            component: message
        }
    };

    constructor(props: MessageProps) {
        super(props);
        this.state = {
            messages: [],
            hideBackdrop: false
        };
    }

    add(messageItem: any = {}) {
        if (messageItem) {
            const key = messageItem.key ? messageItem.key : getUuid();
            const hideBackdrop = Boolean(messageItem.hideBackdrop);
            messageItem.key = key;
            messageItem.hideBackdrop = hideBackdrop;
            const messages = [...this.state.messages];
            let isExit = false;
            for (const message of messages) {
                if (message.key === key) {
                    isExit = true;
                    break;
                }
            }
            if (!isExit) {
                messages.push(messageItem);
                this.setState({
                    hideBackdrop: hideBackdrop,
                    messages
                })
            }
        }
        return messageItem;
    };

    remove = (key: any) => {
        this.setState((previousState: any) => {
            const messages = previousState.messages.filter((message: any) => message.key !== key);
            return {
                messages
            };
        });
    };

    getMessageChildren = () => {
        const {messages} = this.state;
        const children: any[] = [];
        messages.map((message: any) => {
            const close = () => {
                this.remove(message.key);
                if (message.onClose) message.onClose();
            };

            children.push(
                <MessageItem key={message.key} {...message} onClose={close}/>
            );
        });
        return children;
    };

    handleClose = () => {
        const messages = [...this.state.messages];
        if (messages.length > 0) {
            this.remove(messages[messages.length - 1].key);
        }
        if (this.props.onClose) {
            (this.props.onClose as Function)();
        }
    };

    render() {
        const {className, hideBackdrop} = this.props;
        const {messages} = this.state;
        const styleClass = classNames(
            'Message',
            {
                'Message-none': messages.length <= 0
            },
            className
        );
        const messagesChildren = this.getMessageChildren();
        return (
            <div className={styleClass}>
                {(messages.length > 0 && hideBackdrop == true) ?
                    <div onClick={this.handleClose} className="Message-mask"/> : null}
                {messagesChildren}
            </div>
        );
    }
}
