import * as React from 'react';
import * as classNames from 'classnames';
import { ViewProps, ViewState } from './PropsType';

export default class View extends React.PureComponent<ViewProps, ViewState> {
    static defaultProps = {
        reveal: false,
        overlayBackground: 'transparent',
    };
    state = {
        reveal: false,
    };

    toggleSidebar = () => {
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    componentDidMount() {
        const { reveal } = this.props;
        this.setState({
            reveal: !!reveal,
        });
    }

    render() {
        const {className, overlayBackground, children} = this.props;
        const styleClass = classNames(
            'View',
            className,
        );
        const styles = {
            background: overlayBackground,
        };
        return (
            <div className={styleClass} style={styles}>
                {children}
                <div className="View-overlay" onClick={this.toggleSidebar}/>
            </div>
        );
    }
}
