import * as React from 'react';
import * as classNames from 'classnames';
import {Collapse} from '../Transitions';
import {PanelProps, PanelState} from './PropsType';

export default class Panel extends React.PureComponent<PanelProps, PanelState> {
    static defaultProps: PanelProps = {
        expanded: true,
        tool: false,
    };

    constructor(props: PanelProps) {
        super(props);
        this.state = {
            expanded: true,
            full: false,
        };
    }

    componentDidMount() {
        if ('expanded' in this.props) {
            this.setState({
                expanded: this.props.expanded!,
            });
        }
    }

    componentWillReceiveProps(nextProps: PanelProps) {
        if ('expanded' in nextProps) {
            this.setState({
                expanded: nextProps.expanded!,
            });
        }
    }

    handleExpandClick = () => {
        if (this.props.onExpand) {
            this.props.onExpand();
        }
        this.setState({
            expanded: !this.state.expanded,
        });
    }

    handleFullscreenClick = () => {
        if (this.props.onFullscreen) {
            this.props.onFullscreen();
        }
        this.setState({
            full: !this.state.full,
        });
    }

    render() {
        const {className, children: childrenProps, expanded, onExpand, onFullscreen, tool, ...other} = this.props;
        const styleClass = classNames(
            'Panel',
            {
                'Panel-fullwidth': this.state.full,
            },
            className,
        );
        let headerChildren: any = '';
        const children = React.Children.map(childrenProps, (child: React.ReactElement<any>) => {
            if (!React.isValidElement(child)) {
                return null;
            }
            const type: any = child.type;
            const fnName = type.fnName;
            if (fnName === 'PanelHeader') {
                headerChildren = React.cloneElement(child as React.ReactElement<any>,
                    {
                        tool,
                        onExpand: this.handleExpandClick,
                        onFullscreen: this.handleFullscreenClick,
                    });
                return null;
            }
            return child;
        });
        return (
            <div className={styleClass} {...other}>
                {headerChildren}
                <Collapse in={this.state.expanded} className="PanelBody">
                    {children}
                </Collapse>
            </div>
        );
    }
}
