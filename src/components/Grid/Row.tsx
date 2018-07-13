import * as React from 'react';
import * as classNames from 'classnames';
import * as enquire from 'enquire.js';
import {Breakpoint, BreakpointMap, RowProps, RowState} from './PropsType';

if (typeof window !== 'undefined') {
    const matchMediaPolyfill = (mediaQuery: string): MediaQueryList => {
        return {
            media: mediaQuery,
            matches: false,
            addListener() {
                // addListener
            },
            removeListener() {
                // removeListener
            },
        };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
}

const responsiveArray: Breakpoint[] = ['lg', 'md', 'sm', 'xs'];

const responsiveMap: BreakpointMap = {
    xs: '(max-width: 767px)',
    sm: '(min-width: 768px)',
    md: '(min-width: 992px)',
    lg: '(min-width: 1200px)',
};

export default class Row extends React.PureComponent<RowProps, RowState> {
    static defaultProps = {
        spacing: 0,
    };
    state: RowState = {
        screens: {},
    };

    componentDidMount() {
        this.getMediaScreen();
    }

    componentWillUnmount() {
        Object.keys(responsiveMap)
            .map((screen: Breakpoint) => enquire.unregister(responsiveMap[screen]));
    }

    getMediaScreen() {
        const {spacing} = this.props;
        if (typeof spacing === 'object') {
            Object.keys(responsiveMap)
                .map((screen: Breakpoint) => enquire.register(responsiveMap[screen], {
                        match: () => {
                            if (typeof spacing !== 'object') {
                                return;
                            }
                            this.setState((prevState) => ({
                                screens: {
                                    ...prevState.screens,
                                    [screen]: true,
                                },
                            }));
                        },
                        unmatch: () => {
                            if (typeof spacing !== 'object') {
                                return;
                            }
                            this.setState((prevState) => ({
                                screens: {
                                    ...prevState.screens,
                                    [screen]: false,
                                },
                            }));
                        },
                        destroy() {
                            // destory
                        },
                    },
                ));
        }
    }

    getSpacing() {
        const spacing: any = this.props.spacing;
        const screens: any = this.state.screens;
        if (typeof spacing === 'object') {
            for (let i = 0; i <= responsiveArray.length; i++) {
                const breakpoint: Breakpoint = responsiveArray[i];
                if (screens[breakpoint] && spacing[breakpoint] !== undefined) {
                    return spacing[breakpoint];
                }
            }
        }
        return spacing;
    }

    render() {
        const {className, children: childrenProps, spacing: spacingProps, style, ...other} = this.props;
        const styleClass = classNames(
            'Row', className,
        );
        const spacing = this.getSpacing();
        const halfSpacing: number = spacing / 2;
        const rowStyle = (spacing as number) > 0 ? {
            marginLeft: -halfSpacing,
            marginRight: -halfSpacing,
            ...style,
        } : style;
        const children = React.Children.map(childrenProps, (child: React.ReactElement<HTMLDivElement>) => {
            if (!React.isValidElement(child)) {
                return;
            }
            if (child.props && (spacing as number) > 0) {
                return React.cloneElement(child, {
                    style: {
                        paddingLeft: halfSpacing,
                        paddingRight: halfSpacing,
                        ...child.props.style,
                    },
                });
            }
            return child;
        });
        return (
            <div className={styleClass} {...other} style={rowStyle}>
                {children}
            </div>
        );
    }
}
