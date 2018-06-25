import * as React from 'react';
import * as classNames from 'classnames';
import List, { ListItem, ListItemText, ListItemAction } from '../../src/components/List';
import {BaseProps} from '../../src/components/common/BaseProps';
import Avatar from '../../src/components/Avatar';
import Icon from '../../src/components/Icon';
import Switch from '../../src/components/Switch';
import {Content} from '../../src/components/Page';

interface ListCaseProps extends BaseProps {}

export default class ListCase extends React.PureComponent<ListCaseProps, {}> {
    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'ListCase',
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
            <Content className={styleClass}>
                <div className="margin-bottom-10">
                    <List>
                        {
                            menus.map((menu, index) => (
                                <ListItem key={index.toString()}>
                                    <Icon icon={menu.icon}/>
                                    <ListItemText>
                                        {menu.text}
                                    </ListItemText>
                                </ListItem>
                            ))
                        }
                    </List>
                </div>
                <div className="margin-bottom-10">
                    <List>
                        {
                            menus.map((menu, index) => (
                                <ListItem key={index.toString()}>
                                    <Icon icon={menu.icon}/>
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
                </div>
                <div className="margin-bottom-10">
                    <List>
                        {
                            menus.map((menu, index) => (
                                <ListItem key={index.toString()}>
                                    <Avatar src={menu.avatar} shape="circle" style={{width: 40}}/>
                                    <ListItemText>
                                        {menu.text}
                                    </ListItemText>
                                    <ListItemAction>
                                        <Switch/>
                                    </ListItemAction>
                                </ListItem>
                            ))
                        }
                    </List>
                </div>
            </Content>
        );
    }
}
