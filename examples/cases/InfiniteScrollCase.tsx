import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Avatar from '../../src/components/Avatar';
import Icon from '../../src/components/Icon';
import List, {ListItem, ListItemText, ListItemAction} from '../../src/components/List';
import {Content} from '../../src/components/Page';
import Spin from '../../src/components/Spin';

interface InfiniteScrollCaseProps extends BaseProps {
}

interface InfiniteScrollCaseState {
    items?: Array<any>;
    end?: boolean;
}

export default class InfiniteScrollCase extends React.Component<InfiniteScrollCaseProps, InfiniteScrollCaseState> {
    static defaultProps: InfiniteScrollCaseProps = {
        prefixCls: 'rf-InfiniteScrollCase',
    };

    constructor(props: InfiniteScrollCaseProps) {
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
            end: false,
        };
    }

    handleInfinite = (event: any) => {
        if (this.state.end) {
            return;
        }
        const items = [...this.state.items!];
        let end = false;
        items.push({
            text: 'Lists3',
            path: '/lists',
            avatar: 'assets/images/users/1.jpg',
            icon: 'home',
        });
        if (items.length >= 20) {
            end = true;
        }
        this.setState({items, end});
        event.done();
    }

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls,
            className,
        );
        return (
            <Content
                className={styleClass}
                infiniteScroll={true}
                onInfinite={this.handleInfinite}
            >
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
                <div className="bm-Content-infinite-scroll-preloader">
                    {this.state.end ? '已经到底了' : (<div className="bm-preloader">
                        <Spin/>
                    </div>)}
                </div>
            </Content>
        );
    }
}
