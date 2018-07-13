import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import Button from '../../src/components/Button';
import {Fade} from '../../src/components/Transitions';
import Collapse from '../../src/components/Transitions/Collapse';

interface TransitionCaseProps extends BaseProps {
}

interface TransitionCaseState {
    collapse?: boolean;
    fade?: boolean;
}

export default class TransitionCase extends React.Component<TransitionCaseProps, TransitionCaseState> {
    static defaultProps: TransitionCaseProps = {
        prefixCls: 'rf-TransitionCase',
    };

    constructor(props: TransitionCaseProps) {
        super(props);
        this.state = {
            collapse: false,
            fade: true,
        };
    }

    handleFade = () => {
        this.setState({
            fade: !this.state.fade!,
        });
    }

    handleCollapse = () => {
        this.setState({
            collapse: !this.state.collapse!,
        });
    }

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls,
            className,
        );
        const collapseStyle: any = {
            overflow: 'hidden',
        };
        return (
            <Content className={styleClass}>
                <div className="padding-20">
                    <Button onClick={this.handleFade} className="margin-bottom-10">Fade</Button>
                    <Fade in={this.state.fade}>
                        <div className="anim-box bm-Paper-4dp"/>
                    </Fade>
                    <Button onClick={this.handleCollapse} className="margin-bottom-10">Collapse</Button>
                    <Collapse in={this.state.collapse} style={collapseStyle}>
                        <div className="anim-box bm-Paper-4dp"/>
                    </Collapse>
                </div>
            </Content>
        );
    }
}
