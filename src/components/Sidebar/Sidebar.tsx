import * as React from 'react';
import * as classNames from 'classnames';
import {SidebarProps, SidebarState} from './PropsType';

export default class Sidebar extends React.PureComponent<SidebarProps, SidebarState> {
    static defaultProps = {
        dir: 'left',
        drawer: true,
        className: '',
        reveal: false,
    };
    state: SidebarState = {
        reveal: false,
    };

    componentDidMount() {
        const {reveal} = this.props;
        this.setState({
            reveal: !!reveal,
        });
    }

    toggleSidebar = () => {
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    render() {
        const {className, reveal, drawer, dir, children} = this.props;
        const styleClass = classNames(
            'Sidebar',
            {
                'Sidebar-open': reveal,
                'Sidebar-drawer': drawer,
            },
            `Sidebar-${dir}-reveal`,
            className,
        );
        return (
            <div className={styleClass}>
                <div className="Sidebar-overlay" onClick={this.toggleSidebar}/>
                <div className="Sidebar-inner">
                    {children}
                </div>
            </div>
        );
    }
}
