import * as React from 'react';
import * as classNames from 'classnames';
import {NavLink} from 'react-router-dom';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import {MENUS} from '../common/Menus';
import List, {ListItem, ListItemAction, ListItemText} from '../../src/components/List';
import Icon from '../../src/components/Icon';

interface OverviewCaseProps extends BaseProps {
}

export default class OverviewCase extends React.PureComponent<OverviewCaseProps, any> {
    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'OverviewCase',
            className,
        );
        const menus = MENUS.filter((menu) => {
            return ['Overview'].indexOf(menu.name) === -1;
        });
        return (
            <Content className={styleClass}>
                <List>
                    {
                        menus.map((menu, index) => (
                        <ListItem key={index.toString()}>
                            <NavLink to={menu.path} activeClassName="active">
                                <Icon icon={menu.icon}/>
                                <ListItemText>
                                    {menu.name}
                                </ListItemText>
                                <ListItemAction>
                                    <Icon icon="chevron_right"/>
                                </ListItemAction>
                            </NavLink>
                        </ListItem>
                        ))
                    }
                </List>
            </Content>
        );
    }
}
