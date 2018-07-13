import * as React from 'react';
import * as classNames from 'classnames';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import matchPath from 'react-router-dom/matchPath';
import RouteTransition from './RouteTransition';
import {AnimatedSwitchProps, AnimatedSwitchState} from './PropsType';
import {getOtherProperties} from '../common/Utils';

const NO_MATCH = {
    key: 'no-match',
};

class AnimatedSwitch extends React.PureComponent<AnimatedSwitchProps, AnimatedSwitchState> {
    static defaultProps = {
        prefixCls: 'bm-AnimatedSwitch',
        location: {
            pathname: '',
        },
    };
    matches: number = 0;

    constructor(props: AnimatedSwitchProps) {
        super(props);
        this.state = {
            key: this.getLocationKey(this.props.location),
            match: this.getMatchedRoute(this.props.children, (this.props.location as any).pathname),
        };
    }

    componentDidMount() {
        if (this.props.onRouteChange) {
            (this.props.onRouteChange as (event: any) => void)(this.props.location);
        }
    }

    componentWillReceiveProps(nextProps: AnimatedSwitchProps) {
        const nextMatch: any = this.getMatchedRoute(
            nextProps.children,
            (nextProps.location as any).pathname,
        );
        if ((this.state.match as any).key !== nextMatch.key) {
            this.setState({
                match: nextMatch,
                key: this.getLocationKey(nextProps.location) + ++this.matches,
            });
            if (this.props.onRouteChange) {
                (this.props.onRouteChange as (event: any) => void)(nextProps.location);
            }
        }
    }

    getMatchedRoute(children: any, pathname: any) {
        return React.Children.toArray(children).find((child: any) => {
                return matchPath(pathname, {
                    exact: child.props.exact,
                    path: child.props.path,
                });
            }) || NO_MATCH;
    }

    getLocationKey(location: any) {
        return typeof location.key === 'string' ? location.key : '';
    }

    render() {
        const {className, children, location, prefixCls, ...other} = this.props;
        const styleClass = classNames(
            prefixCls, className,
        );
        const otherProps = getOtherProperties(other, ['key', 'match']);
        return (
            <RouteTransition className={styleClass} {...otherProps}>
                <Switch key={this.state.key} location={location}>
                    {children}
                </Switch>
            </RouteTransition>
        );
    }
}

const RouteWrapper = (props: any) => {
    // When location change, Route always render, so we can get the location
    return (
        <Route
            children={({location}: any) => {
                return (<AnimatedSwitch location={location} {...props} />);
            }}
        />
    );
};

export default RouteWrapper;
