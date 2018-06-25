import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Button from '../../src/components/Button';
import Popup from '../../src/components/Popup';
import {Content} from '../../src/components/Page';
import NavBar from '../../src/components/NavBar';
import Icon from '../../src/components/Icon';
import List, {ListItem, ListItemText, ListItemAction} from '../../src/components/List';
import Avatar from '../../src/components/Avatar';

interface PopupCaseProps extends BaseProps {
}

interface PopupCaseState {
    visible: boolean;
}

export default class PopupCase extends React.PureComponent<PopupCaseProps, PopupCaseState> {
    state = {
        visible: false,
    };

    handleOpen = () => {
        this.setState({
            visible: true,
        });
    }

    handleClose = () => {
        this.setState({
            visible: false,
        });
    }

    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'PopupCase',
            className,
        );
        const menus = [
            {
                text: 'Grid',
                path: '/gird',
                avatar: 'assets/images/users/1.jpg',
                icon: 'home',
            },
            {
                text: 'Buttons',
                path: '/buttons',
                avatar: 'assets/images/users/1.jpg',
                icon: 'home',
            },
            {
                text: 'Lists',
                path: '/lists',
                avatar: 'assets/images/users/1.jpg',
                icon: 'home',
            },
        ];
        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <Button theme="primary" onClick={this.handleOpen}>Go to a new Page</Button>
                    <Popup visible={this.state.visible}>
                        <NavBar
                            left={<Button onClick={this.handleClose}>
                                <Icon icon="keyboard_arrow_left"/></Button>}
                            center="Contacts"
                        />
                        <Content>
                            <List>
                                {
                                    menus.map((menu, index) => (
                                        <ListItem key={index.toString()}>
                                            <Avatar src={menu.avatar} shape="circle" style={{width: 40}}/>
                                            <ListItemText>
                                                {menu.text}
                                            </ListItemText>
                                            <ListItemAction>
                                                <Icon icon="chevron_right"/>
                                            </ListItemAction>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </Content>
                    </Popup>
                </div>
            </Content>
        );
    }
}
