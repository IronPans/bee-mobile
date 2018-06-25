import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Icon from '../../src/components/Icon';
import Avatar from '../../src/components/Avatar';
import List, {ListItem, ListItemText, ListItemAction} from '../../src/components/List';
import {Content} from '../../src/components/Page';

interface PullToRefreshCaseProps extends BaseProps {
}

interface PullToRefreshCaseState {
    items?: Array<any>;
}

export default class PullToRefreshCase extends React.PureComponent<PullToRefreshCaseProps, PullToRefreshCaseState> {
    static defaultProps: PullToRefreshCaseProps = {
        prefixCls: 'bm-PullToRefreshCase',
    };

    constructor(props: PullToRefreshCaseProps) {
        super(props);
        this.state = {
            items: [
                {
                    text: 'Grid',
                    path: '/gird',
                    avatar: 'assets/images/users/1.jpg',
                    icon: 'home',
                }, {
                    text: 'Buttons',
                    path: '/buttons',
                    avatar: 'assets/images/users/1.jpg',
                    icon: 'home',
                }, {
                    text: 'Lists',
                    path: '/lists',
                    avatar: 'assets/images/users/1.jpg',
                    icon: 'home',
                }, {
                    text: 'Buttons',
                    path: '/buttons',
                    avatar: 'assets/images/users/1.jpg',
                    icon: 'home',
                }, {
                    text: 'Buttons',
                    path: '/buttons',
                    avatar: 'assets/images/users/1.jpg',
                    icon: 'home',
                }, {
                    text: 'Buttons',
                    path: '/buttons',
                    avatar: 'assets/images/users/1.jpg',
                    icon: 'home',
                }, {
                    text: 'Buttons',
                    path: '/buttons',
                    avatar: 'assets/images/users/1.jpg',
                    icon: 'home',
                }, {
                    text: 'Buttons',
                    path: '/buttons',
                    avatar: 'assets/images/users/1.jpg',
                    icon: 'home',
                }, {
                    text: 'Buttons',
                    path: '/buttons',
                    avatar: 'assets/images/users/1.jpg',
                    icon: 'home',
                }, {
                    text: 'Buttons',
                    path: '/buttons',
                    avatar: 'assets/images/users/1.jpg',
                    icon: 'home',
                }, {
                    text: 'Buttons',
                    path: '/buttons',
                    avatar: 'assets/images/users/1.jpg',
                    icon: 'home',
                }, {
                    text: 'Buttons',
                    path: '/buttons',
                    avatar: 'assets/images/users/1.jpg',
                    icon: 'home',
                },
            ],
        };
    }

    handleRefresh = (event: any) => {
        const items = [...this.state.items!];
        items.unshift({
            text: 'Lists2',
            path: '/lists',
            avatar: 'assets/images/users/1.jpg',
            icon: 'home',
        });
        this.setState({items});
        event.done();
    }

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls,
            className,
        );
        return (
            <Content pullToRefresh={true} onRefresh={this.handleRefresh} className={styleClass}>
                <List>
                    {
                        (this.state.items as Array<any>).map((item: any, index: number) => (
                            <ListItem key={index.toString()}>
                                <Avatar src={item.avatar} shape="circle" style={{width: 40}}/>
                                <ListItemText>
                                    {item.text}
                                </ListItemText>
                                <ListItemAction>
                                    <Icon icon="chevron_right"/>
                                </ListItemAction>
                            </ListItem>
                        ))
                    }
                </List>
            </Content>
        );
    }
}
