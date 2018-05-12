import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {NavLink, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import {spring} from "react-motion";
import Sidebar from '../../src/components/Sidebar';
import View from '../../src/components/View';
import Page from '../../src/components/Page';
import List, {ListItem, ListItemText} from '../../src/components/List';
import {MENUS} from '../common/Menus';
import Icon from '../../src/components/Icon';
import NavBar from '../../src/components/NavBar';
import Popover from '../../src/components/Popover';
import Button from "../../src/components/Button";
import {AnimatedSwitch} from "../../src/components/Router";
import {getOtherProperties} from "../../src/components/common/Utils";
import {ROUTE_CONFIG} from '../AppRouting';

interface MainState {
    anchorEl?: any;
    menuVisible: boolean;
    reveal: boolean;
    title: string;
}

export default class Main extends React.PureComponent<any, MainState> {
    menus = MENUS;
    button: any;
    pageTransitions = {
        enterStyles: {
            x: 200,
            opacity: 0
        },
        leaveStyles: {
            x: spring(-100),
            opacity: spring(0)
        },
        activeStyles: {
            x: spring(0, {
                stiffness: 128,
                damping: 16,
            }),
            opacity: spring(1, {
                stiffness: 128,
                damping: 16,
            })
        }
    };
    version = process.env.VERSION;

    state = {
        anchorEl: '',
        menuVisible: false,
        reveal: false,
        title: ''
    };

    toggleSidebar = () => {
        this.setState({
            reveal: !this.state.reveal
        });
    };
    handleClickButton = () => {
        this.setState({
            menuVisible: !this.state.menuVisible!,
            anchorEl: ReactDOM.findDOMNode(this.button)
        });
    };

    handleClose = () => {
        this.setState({
            menuVisible: false
        });
    };

    handleClick = (menu: any) => {
      this.setState({
          title: menu.name
      });
      document.title = menu.name + ' - ' + ' bee-mobile';
    };

    render() {

        const menus = [
            {
                text: 'Grid'
            }, {
                text: 'Buttons'
            }, {
                text: 'Lists'
            }
        ];
        this.menus = MENUS.filter((menu: any) => {
            return ['Ripple'].indexOf(menu.name) === -1;
        });
        console.log(this.version)
        return (
            <div className="Main height-100">
                <Sidebar reveal={this.state.reveal} className="Page-aside" onClose={this.toggleSidebar}>
                    <div className="Sidebar-header">
                        <h2>bee-mobile</h2>
                        <p>v{this.version}</p>
                    </div>
                    <List>
                        {
                            this.menus.map((menu, index) => (
                                <ListItem key={index.toString()}
                                          onClick={this.handleClick.bind(this, menu)}>
                                    <ListItemText>
                                        <NavLink onClick={this.toggleSidebar} to={menu.path}
                                                 activeClassName="active">{menu.name}</NavLink>
                                    </ListItemText>
                                </ListItem>
                            ))
                        }
                    </List>
                </Sidebar>
                <View reveal={this.state.reveal} onClose={this.toggleSidebar}>
                    <Page isActive={true}>
                        <NavBar fixed={true} left={<Button onClick={this.toggleSidebar}>
                            <Icon icon="menu"/>
                        </Button>} center={this.state.title}
                                right={<Button onClick={this.handleClickButton}>
                            <Icon icon="more_vert" ref={node => this.button = node}/>
                        </Button>}/>
                        <AnimatedSwitch {...this.pageTransitions} styles={(style: any) => ({
                            transform: 'translate3d(' + style.x + 'px, 0, 0)',
                            opacity: style.opacity
                        })} className="bm-PageContent">
                            {ROUTE_CONFIG.map((route: any, i: number) => (
                                <Route path={route.path} key={i} exact={route.exact} render={(props: any) => (
                                    <route.component {...getOtherProperties(props, ['staticContext'])} routes={route.routes}/>
                                )}/>
                            ))}
                        </AnimatedSwitch>
                    </Page>
                </View>

                <Popover dir="top-left" anchorEl={this.state.anchorEl!} visible={this.state.menuVisible!}
                         onClose={this.handleClose}>
                    <List>
                        {
                            menus.map((menu, index) => (
                                <ListItem key={index.toString()}>
                                    <ListItemText>
                                        {menu.text}
                                    </ListItemText>
                                </ListItem>
                            ))
                        }
                    </List>
                </Popover>
            </div>
        );
    }
}