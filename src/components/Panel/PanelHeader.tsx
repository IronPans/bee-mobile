import * as React from 'react';
import * as classNames from 'classnames';
import {PanelHeaderProps} from './PropsType';

export default class PanelHeader extends React.PureComponent<PanelHeaderProps, any> {
    static fnName: string = 'PanelHeader';
    handleExpandClick = () => {
        if (this.props.onExpand) {
            this.props.onExpand();
        }
    }

    handleFullscreenClick = () => {
        if (this.props.onFullscreen) {
            this.props.onFullscreen();
        }
    }

    render() {
        const {children, className, onExpand, onFullscreen, tool, ...other} = this.props;
        const styleClass = classNames(
            'PanelHeader',
            className,
        );
        return (
            <div className={styleClass} {...other}>
                {children}
                {!!tool ? (<div className="PanelHeader-toolbar">
                    <i className="Icon iconfont icon-icon--" onClick={this.handleFullscreenClick}/>
                    <i className="Icon iconfont icon-jianhao" onClick={this.handleExpandClick}/>
                </div>) : null}
            </div>
        );
    }
}
