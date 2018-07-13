import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {PortalProps, PortalState} from './PropsType';

export default class Portal extends React.PureComponent<PortalProps, PortalState> {
    defaultNode: any;

    constructor(props: PortalProps) {
        super(props);
        let visible = false;
        if (props.visible) {
            visible = props.visible;
        }
        this.state = {
            visible,
        };
    }

    componentWillReceiveProps(nextProps: PortalProps) {
        if ('visible' in nextProps && this.props.visible !== nextProps.visible) {
            if (nextProps.visible) {
                this.setState({
                    visible: nextProps.visible,
                });
            } else {
                // 为了消失时有动画，必须加一个定时器
                setTimeout(() => {
                    this.setState({
                        visible: nextProps.visible,
                    });
                }, 300);
            }
        }
    }

    componentWillUnmount() {
        if (this.defaultNode) {
            document.body.removeChild(this.defaultNode);
        }
        this.defaultNode = null;
    }

    render() {
        const {children, mountNode = document.body} = this.props;
        const {visible} = this.state;
        if (!this.props.mountNode && !this.defaultNode) {
            this.defaultNode = document.createElement('div');
            document.body.appendChild(this.defaultNode);
        }
        return visible ? ReactDOM.createPortal(children, mountNode) : null;
    }
}
