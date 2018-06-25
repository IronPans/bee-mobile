import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface NotificationApiProps extends BaseProps {
}

export default class NotificationApi extends React.PureComponent<NotificationApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-NotificationApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Notification from '../components/Notification';
import Button from '../components/Button';
import Avatar from '../components/Avatar';
import {Content} from '../components/Page';

interface NotificationCaseProps extends BaseProps {
}

export default class NotificationCase extends React.PureComponent< NotificationCaseProps, any> {
    handleClick = () => {
        Notification.info({
            avatar: (
                <Avatar src="assets/images/users/1.jpg" className="SmAvatar"/>),
            title: 'Tip',
            message: '提示信息'
        });
    };

    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'NotificationCase',
            className
        );
        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <Button onClick={this.handleClick}>点击弹出 Notification</Button>
                </div>
            </Content>
        );
    }
}`;
    }

    getFields() {
        return [{
            field: 'attr',
            header: '属性',
        }, {
            field: 'desc',
            header: '说明',
        }, {
            field: 'type',
            header: '类型',
        }, {
            field: 'default',
            header: '默认值',
        }];
    }

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className,
            'ApiContent',
        );
        const data = [{
            name: 'Notification',
            fields: this.getFields(),
            attributes: [{
                attr: 'avatar',
                desc: '设置额外信息',
                type: 'React.ReactNode',
                default: '-',
            }, {
                attr: 'delay',
                desc: '自动消失的延迟时间。若为0则不会自动消失',
                type: 'Number',
                default: '2500',
            }, {
                attr: 'message',
                desc: '文字描述',
                type: 'React.ReactNode | string',
                default: '-',
            }, {
                attr: 'position',
                desc: '设置位置。可选值： top | bottom',
                type: 'String',
                default: 'top',
            }, {
                attr: 'type',
                desc: '设置主题。可选值：default | info | success | warning | error',
                type: 'String',
                default: '-',
            }, {
                attr: 'onClose',
                desc: '关闭的回调',
                type: 'Function',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Notification 消息提醒框"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/notification"
                    description="消息提醒框。"
                />
            </Content>
        );
    }
}
