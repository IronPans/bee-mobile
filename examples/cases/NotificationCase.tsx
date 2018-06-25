import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Notification from '../../src/components/Notification';
import Button from '../../src/components/Button';
import Avatar from '../../src/components/Avatar';
import {Content} from '../../src/components/Page';

interface NotificationCaseProps extends BaseProps {
}

export default class NotificationCase extends React.PureComponent<NotificationCaseProps, any> {
    handleClick = () => {
        Notification.info({
            avatar: (
                <Avatar src="assets/images/users/1.jpg" className="SmAvatar"/>),
            title: 'Tip',
            message: '提示信息',
        });
    }

    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'NotificationCase',
            className,
        );
        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <Button onClick={this.handleClick}>点击弹出 Notification</Button>
                </div>
            </Content>
        );
    }
}
