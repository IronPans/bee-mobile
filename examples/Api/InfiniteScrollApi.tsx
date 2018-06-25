import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface InfiniteScrollApiProps extends BaseProps {
}

export default class InfiniteScrollApi extends React.PureComponent<InfiniteScrollApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-InfiniteScrollApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Avatar from '../../src/components/Avatar';
import Icon from '../../src/components/Icon';
import List, {ListItem, ListItemText, ListItemAction} from '../../src/components/List';
import {Content} from '../../src/components/Page';

interface InfiniteScrollCaseProps extends BaseProps {
}

interface InfiniteScrollCaseState {
    items?: Array< any>
}

export default class InfiniteScrollCase extends React.Component<InfiniteScrollCaseProps, InfiniteScrollCaseState> {
    static defaultProps: InfiniteScrollCaseProps = {
        prefixCls: 'rf-InfiniteScrollCase'
    };

    constructor(props: InfiniteScrollCaseProps) {
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

    handleInfinite = (event: any) => {
        const items = [...this.state.items!];
        items.push({
            text: 'Lists3',
            path: '/lists',
            avatar: 'assets/images/users/1.jpg',
            icon: 'home'
        });
        this.setState({items});
        event.done();
    };

    render() {
        const {children, className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls,
            className
        );
        return (
            <Content className={styleClass}
                     infiniteScroll={true} onInfinite={this.handleInfinite}>
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
                <div className='bm-Content-infinite-scroll-preloader'>
                    <div className="bm-preloader"/>
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
            name: 'Content',
            fields: this.getFields(),
            attributes: [{
                attr: 'infiniteScroll',
                desc: '开启无限滚动',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'onInfinite',
                desc: '触发刷新的回调函数。传入一个Content作为参数，每次加载数据后，都需要手动触发一次done()方法',
                type: '(target): void',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Content 无限滚动"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/infiniteScroll"
                    description="无限滚动允许加载额外的内容或在页面滚动接近底部时执行任何其他所需的操作。"
                />
            </Content>
        );
    }
}
