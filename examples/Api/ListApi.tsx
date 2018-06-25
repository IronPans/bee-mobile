import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface ListApiProps extends BaseProps {
}

export default class ListApi extends React.PureComponent<ListApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-ListApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import List, { ListItem, ListItemText, ListItemAction } from '../components/List';
import {BaseProps} from '../components/common/BaseProps';
import Avatar from '../components/Avatar';
import Icon from '../components/Icon';
import Switch from '../components/Switch';
import {Content} from '../components/Page';

interface ListCaseProps extends BaseProps {}

export default class ListCase extends React.PureComponent< ListCaseProps, {}> {
    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'ListCase',
            className
        );
        const menus = [
            {
                text: 'Grid',
                path: '/gird',
                avatar: 'assets/images/users/1.jpg',
                icon: 'home'
            },
            {
                text: 'Buttons',
                path: '/buttons',
                avatar: 'assets/images/users/1.jpg',
                icon: 'home'
            },
            {
                text: 'Lists',
                path: '/lists',
                avatar: 'assets/images/users/1.jpg',
                icon: 'home'
            }
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
                                    <Avatar src={menu.avatar} round={true} style={{width: 40}}/>
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
            name: 'Calendar',
            fields: this.getFields(),
            attributes: [{
                attr: 'count',
                desc: '展示的数字值',
                type: 'number',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="List 列表"
                    code={this.getCode()}
                    app="适用平台：WEB"
                    frameUrl="#/components/list"
                    description="单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。"
                />
                <div className="padding-left-20 padding-right-20">
                    <h3 className="no-margin-top">List</h3>
                    <p>列表组</p>
                </div>
                <div className="padding-left-20 padding-right-20">
                    <h3>ListItem</h3>
                    <p>列表项</p>
                </div>
                <div className="padding-left-20 padding-right-20">
                    <h3>ListItemText</h3>
                    <p>列表文本</p>
                </div>
                <div className="padding-left-20 padding-right-20">
                    <h3>ListItemAction</h3>
                    <p>列表装饰</p>
                </div>
            </Content>
        );
    }
}
