import * as React from 'react';
import * as classNames from 'classnames';
import Avatar from '../../src/components/Avatar';
import Icon from '../../src/components/Icon/Icon';
import purple from '../../src/components/colors/purple';
import blue from '../../src/components/colors/blue';
import {Content} from '../../src/components/Page';

export default class AvatarCase extends React.PureComponent {
    render() {
        const styleClass = classNames(
            'AvatarCase',
        );
        const styles = {
            purpleAvatar: {
                backgroundColor: purple[500], color: '#fff',
            },
            blueAvatar: {
                backgroundColor: blue[500],
                color: '#fff',
            },
        };
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Avatar src="assets/images/users/1.jpg" className="SmAvatar"/>
                    <Avatar src="assets/images/users/1.jpg" className="BigAvatar"/>
                    <Avatar src="assets/images/users/1.jpg" className="SmAvatar" shape="circle"/>
                    <Avatar src="assets/images/users/1.jpg" className="BigAvatar" shape="circle"/>
                </div>
                <div className="CasePanel">
                    <Avatar className="SmAvatar" style={styles.purpleAvatar} shape="circle">
                        <Icon icon="email"/>
                    </Avatar>
                    <Avatar className="SmAvatar" style={styles.blueAvatar} shape="circle">
                        <Icon icon="place"/>
                    </Avatar>
                </div>
                <div className="CasePanel">
                    <Avatar className="SmAvatar" style={styles.purpleAvatar} shape="circle">
                        N
                    </Avatar>
                    <Avatar className="SmAvatar" style={styles.blueAvatar} shape="circle">
                        P
                    </Avatar>
                </div>
            </Content>
        );
    }
}
