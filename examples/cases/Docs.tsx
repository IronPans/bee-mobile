import * as React from 'react';
import {NavLink, Switch, withRouter} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import {spring} from "react-motion";
import Sidebar from '../../src/components/Sidebar';
import View from '../../src/components/View';
import Page from '../../src/components/Page';
import List, {ListItem, ListItemText} from '../../src/components/List';
import Icon from '../../src/components/Icon';
import NavBar from '../../src/components/NavBar';
import Button from "../../src/components/Button";
import {AnimatedSwitch} from "../../src/components/Router";
import {getOtherProperties} from "../../src/components/common/Utils";
import Accordion, {AccordionGroup} from '../../src/components/Accordion';
import {addClass, removeClass} from '../../src/components/common/Dom';
import Autocomplete from '../../src/components/Autocomplete';
import Modal from "../../src/components/Modal";
import {API_ROUTING} from '../AppRouting';
import {MENUS} from '../common/Menus';

interface DocsState {
    title: string;
    reveal?: boolean;
    visible?: boolean;
}

export class Docs extends React.PureComponent<any, DocsState> {
    pageTransitions = {
        enterStyles: {
            y: 300,
            opacity: 0
        },
        leaveStyles: {
            y: spring(-300),
            opacity: spring(0)
        },
        activeStyles: {
            y: spring(0, {
                stiffness: 128,
                damping: 16,
            }),
            opacity: spring(1, {
                stiffness: 128,
                damping: 16,
            })
        }
    };
    location: any;
    isOpen: boolean;
    state = {
        title: '',
        reveal: false,
        visible: false
    };
    version = process.env.VERSION;

    toggleSidebar = () => {
        this.setState({
            reveal: !this.state.reveal
        })
    };

    openSidebar = () => {
        const path = this.location.pathname.split('/');
        if (path[path.length - 1] === 'introduce') {
            this.setState({
                reveal: !this.state.reveal
            })
        } else {
            this.isOpen = !this.isOpen;
            if (this.isOpen) {
                addClass(document.body, 'side-mini');
            } else {
                removeClass(document.body, 'side-mini')
            }
        }
    };

    handleRouteChange = (location: any) => {
        this.location = location;
        const path = this.location.pathname.split('/');
        if (path[path.length - 1] !== 'introduce') {
            this.isOpen = true;
            this.setState({
                reveal: false
            });
            addClass(document.body, 'side-mini');
            addClass(document.querySelector('.Main'), 'Docs');
        } else {
            this.isOpen = false;
            removeClass(document.body, 'side-mini');
            removeClass(document.querySelector('.Main'), 'Docs');
        }
    };

    handleSelect = (value: any) => {
        this.props.history.push('/docs/' + value.label);
    };

    handleOpen = () => {
        this.setState({
            visible: true
        });
    };

    handleClose = () => {
        this.setState({
            visible: false
        });
    };

    render() {
        const barStyle = {
            fontSize: '25px'
        };
        const menus: any = MENUS.filter((menu: any) => {
            return ['Grid', 'Overview', 'Paper', 'Ripple'].indexOf(menu.name) === -1;
        });
        const suggestions = [
            { label: 'Accordion' },
            { label: 'ActionSheet' },
            { label: 'Autocomplete' },
            { label: 'Avatar' },
            { label: 'BackTop' },
            { label: 'Badge' },
            { label: 'Breadcrumb' },
            { label: 'Button' },
            { label: 'ButtonNavigation' },
            { label: 'Calendar' },
            { label: 'Card' },
            { label: 'Checkbox' },
            { label: 'Chip' },
            { label: 'DatetimePicker' },
            { label: 'FabButton' },
            { label: 'Grid' },
            { label: 'Icon' },
            { label: 'ImageView' },
            { label: 'IndexList' },
            { label: 'InfiniteScroll' },
            { label: 'Inputtext' },
            { label: 'KeyBoard' },
            { label: 'Knob' },
            { label: 'LazyLoad' },
            { label: 'List' },
            { label: 'Locker' },
            { label: 'MessageBox' },
            { label: 'Modal' },
            { label: 'NavBar' },
            { label: 'Notification' },
            { label: 'Page' },
            { label: 'Pagination' },
            { label: 'Panel' },
            { label: 'Paper' },
            { label: 'Picker' },
            { label: 'Popover'},
            { label: 'Popup' },
            { label: 'Progress' },
            { label: 'Radio' },
            { label: 'Rate' },
            { label: 'Ripple' },
            { label: 'Router' },
            { label: 'SearchBar' },
            { label: 'Sidebar' },
            { label: 'Slider' },
            { label: 'Spin' },
            { label: 'Swiper' },
            { label: 'Switch' },
            { label: 'Tabs' },
            { label: 'Textarea' },
            { label: 'Timeline' },
            { label: 'Toast' },
            { label: 'Tooltip' },
            { label: 'View' }
        ];
        return (
            <div className="Main height-100">
                <Sidebar reveal={this.state.reveal} className="Page-aside" onClose={this.toggleSidebar}>
                    <div className="Sidebar-header">
                        <h2>bee-mobile</h2>
                        <p>v{this.version}</p>
                    </div>
                    <List>
                        <ListItem>
                            <ListItemText>
                                <NavLink to="/docs/introduce"
                                         activeClassName="active">Bee Mobile of React</NavLink>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                <NavLink to="/docs/create-bee-mobile"
                                         activeClassName="active">create-bee-mobile</NavLink>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                <NavLink to="/docs/getting-started"
                                         activeClassName="active">快速上手</NavLink>
                            </ListItemText>
                        </ListItem>
                    </List>
                    <AccordionGroup closeOthers={true}>
                        <Accordion header="Style">
                            <List>
                                <ListItem>
                                    <ListItemText>
                                        <NavLink to="/docs/grid"
                                                 activeClassName="active">Grid</NavLink>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        <NavLink to="/docs/themes"
                                                 activeClassName="active">Theme</NavLink>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        <NavLink to="/docs/icon"
                                                 activeClassName="active">Icons</NavLink>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        <NavLink to="/docs/paper"
                                                 activeClassName="active">Paper</NavLink>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Accordion>
                        <Accordion header="Components">
                            <List>
                                {
                                    menus.map((menu: any, index: number) => {
                                        if (menu && menu.docs) {
                                            return (<ListItem key={index.toString()}>
                                                <ListItemText>
                                                    <NavLink to={menu.docs}
                                                             activeClassName="active">{menu.name}</NavLink>
                                                </ListItemText>
                                            </ListItem>);
                                        }
                                        return null;
                                    })
                                }
                            </List>
                        </Accordion>
                        <Accordion header="Utils">
                            <List>
                                <ListItem>
                                    <ListItemText>
                                        <NavLink to="/docs/ripple"
                                                 activeClassName="active">Ripple</NavLink>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        <NavLink to="/docs/transitions"
                                                 activeClassName="active">Transitions</NavLink>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Accordion>
                    </AccordionGroup>
                    <List>
                        <ListItem>
                            <ListItemText>
                                <NavLink onClick={this.toggleSidebar} to="/docs/changelog"
                                         activeClassName="active">更新日志</NavLink>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                <NavLink onClick={this.toggleSidebar} to="/docs/about"
                                         activeClassName="active">关于</NavLink>
                            </ListItemText>
                        </ListItem>
                    </List>
                    <section>
                        <hr className="divider"/>
                        <div>Resources</div>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    <a href="https://github.com/IronPans/bee-mobile/" target="_blank">
                                        Github
                                    </a>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <a href="https://doc.react-china.org/" target="_blank">
                                        React
                                    </a>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </section>
                </Sidebar>
                <View reveal={this.state.reveal} onClose={this.toggleSidebar}>
                    <Page className="ApiPage">
                        <NavBar fixed={true} left={<Button shape="circle" onClick={this.openSidebar}>
                            <Icon icon="menu" style={barStyle}/>
                        </Button>} center={this.state.title}
                                right={<div className="Docs-navbar-right">
                                    <Autocomplete onSelect={this.handleSelect} maxHeight="300px" count={-1} data={suggestions} startAdorn={<Icon icon="search"/>}/>
                                    <Button shape="circle" to="mailto:ghmagical@gmail.com">
                                        <Icon icon="local_post_office"/>
                                    </Button>
                                    <Button shape="circle" to="https://github.com/IronPans/bee-mobile/">
                                        <svg focusable="false" viewBox="0 0 24 24">
                                            <path
                                                d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"/>
                                        </svg>
                                    </Button>
                                </div>}/>
                        <AnimatedSwitch onRouteChange={this.handleRouteChange} {...this.pageTransitions} styles={(style: any) => ({
                            transform: 'translate3d(0, ' + style.y + 'px, 0)',
                            opacity: style.opacity
                        })} className="bm-PageContent">
                            {API_ROUTING.map((route: any, i: number) => (
                                <Route path={route.path} key={i} exact={route.exact} render={(props: any) => (
                                    <route.component {...getOtherProperties(props, ['staticContext'])}
                                                     routes={route.routes}/>
                                )}/>
                            ))}
                        </AnimatedSwitch>
                    </Page>
                </View>
                <Button float="bottom-right" size="lg" theme="danger" shape="circle" onClick={this.handleOpen}>
                    <Icon icon="info_outline"/>
                </Button>
                <Modal header="Bugs" maxHeight="400" className="bm-Modal-codeView" visible={this.state.visible} onClose={this.handleClose}>
                    <div className="padding-10">
                        <h3 className="no-margin-top title">GitHub Issues</h3>
                        <p>我们使用<a href="https://github.com/IronPans/bee-mobile/issues" target="_blank">GitHub Issues</a>来做 bug 追踪。</p>
                        <p>在你报告一个 bug 之前，请先确保已经搜索过已有的 issue 和阅读了我们的<a href="https://github.com/IronPans/bee-mobile/wiki/FAQ" target="_blank">常见问题</a>。</p>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default withRouter(Docs);