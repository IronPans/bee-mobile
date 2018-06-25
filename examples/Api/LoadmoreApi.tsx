import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface LoadmoreApiProps extends BaseProps {
}

export default class LoadmoreApi extends React.PureComponent<LoadmoreApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-LoadmoreApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Icon from '../../src/components/Icon';
import Avatar from '../../src/components/Avatar';
import List, {ListItem, ListItemText, ListItemAction} from '../../src/components/List';
import {Content} from '../../src/components/Page';

interface PullToRefreshCaseProps extends BaseProps {
}

interface PullToRefreshCaseState {
    items?: Array< any>
}

export default class PullToRefreshCase extends React.PureComponent<PullToRefreshCaseProps, PullToRefreshCaseState> {
    static defaultProps: PullToRefreshCaseProps = {
        prefixCls: 'bm-PullToRefreshCase'
    };

    constructor(props: PullToRefreshCaseProps) {
        super(props);
        this.state = {
            items: [
                {
                    text: 'Grid',
                    path: '/gird',
                    avatar: 'assets/images/users/1.jpg',
                    icon: 'home'
                }, {
                    text: 'Buttons',
                    path: '/buttons',
                    avatar: 'assets/images/users/1.jpg',
                    icon: 'home'
                }, {
                    text: 'Lists',
                    path: '/lists',
                    avatar: 'assets/images/users/1.jpg',
                    icon: 'home'
                }, {
                    text: 'Buttons',
                    path: '/buttons',
                    avatar: 'assets/images/users/1.jpg',
                    icon: 'home'
                }, {
                    text: 'Buttons',
                    path: '/buttons',
                    avatar: 'assets/images/users/1.jpg',
                    icon: 'home'
                }, {
                    text: 'Buttons',
                    path: '/buttons',
                    avatar: 'assets/images/users/1.jpg',
                    icon: 'home'
                }, {
                    text: 'Buttons',
                    path: '/buttons',
                    avatar: 'assets/images/users/1.jpg',
                    icon: 'home'
                }, {
                    text: 'Buttons',
                    path: '/buttons',
                    avatar: 'assets/images/users/1.jpg',
                    icon: 'home'
                }, {
                    text: 'Buttons',
                    path: '/buttons',
                    avatar: 'assets/images/users/1.jpg',
                    icon: 'home'
                }, {
                    text: 'Buttons',
                    path: '/buttons',
                    avatar: 'assets/images/users/1.jpg',
                    icon: 'home'
                }, {
                    text: 'Buttons',
                    path: '/buttons',
                    avatar: 'assets/images/users/1.jpg',
                    icon: 'home'
                }, {
                    text: 'Buttons',
                    path: '/buttons',
                    avatar: 'assets/images/users/1.jpg',
                    icon: 'home'
                }
            ]
        };
    }

    handleRefresh = (event: any) => {
        const items = [...this.state.items!];
        items.unshift({
            text: 'Lists2',
            path: '/lists',
            avatar: 'assets/images/users/1.jpg',
            icon: 'home'
        });
        this.setState({items});
        event.done();
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls,
            className
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
            name: 'Content',
            fields: this.getFields(),
            attributes: [{
                attr: 'pullToRefresh',
                desc: '开启下拉刷新',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'onRefresh',
                desc: '触发刷新的回调函数。传入一个Content作为参数，每次加载数据后，都需要手动触发一次done()方法',
                type: '(target): void',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Content 下拉刷新"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/loadmore"
                    description="可以用来启动刷新页面的内容。"
                />
            </Content>
        );
    }
}
