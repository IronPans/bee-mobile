import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface PopupApiProps extends BaseProps {
}

export default class PopupApi extends React.PureComponent<PopupApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-PopupApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Button from '../components/Button';
import Popup from '../components/Popup';
import {Content} from '../components/Page';
import NavBar from '../components/NavBar';
import Icon from '../components/Icon';
import List, {ListItem, ListItemText, ListItemAction} from '../components/List';
import Avatar from '../components/Avatar';

interface PopupCaseProps extends BaseProps {
}

interface PopupCaseState {
    visible: boolean
}

export default class PopupCase extends React.PureComponent< PopupCaseProps, PopupCaseState> {
    state = {
        visible: false
    };

    handleOpen() {
        this.setState({
            visible: true
        });
    }

    handleClose = () => {
        this.setState({
            visible: false
        });
    };

    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'PopupCase',
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
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <Button theme="primary" onClick={this.handleOpen.bind(this)}>Go to a new Page</Button>
                    <Popup visible={this.state.visible}>
                        <NavBar left={<Button onClick={this.handleClose}>
                            <Icon icon="keyboard_arrow_left"/></Button>}
                                center="Contacts"/>
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
            name: 'Popup',
            fields: this.getFields(),
            attributes: [{
                attr: 'direction',
                desc: '进入动画。可选值：up | right',
                type: 'String',
                default: 'up',
            }, {
                attr: 'visible',
                desc: '是否打开',
                type: 'Boolean',
                default: 'false',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Popup 弹出框"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/popup"
                    description="弹出框，可自定义内容。"
                />
            </Content>
        );
    }
}
