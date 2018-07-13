import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Card, { CardHeader, CardContent } from '../../src/components/Card';
import Collapse from '../../src/components/Transitions/Collapse';
import Icon from '../../src/components/Icon';
import Modal from '../../src/components/Modal';

interface CodeViewProps extends BaseProps {
    code?: React.ReactNode;
    html?: React.ReactNode;
    title?: React.ReactNode;
}

interface CodeViewState {
    showCode?: boolean;
}

export default class CodeView extends React.Component<CodeViewProps, CodeViewState> {
    static defaultProps: CodeViewProps = {
        prefixCls: 'bm-CodeView',
    };

    state = {
        showCode: false,
    };

    constructor(props: CodeViewProps) {
        super(props);
    }

    openCode = () => {
        this.setState({
            showCode: !this.state.showCode!,
        });
    }

    handleClose = () => {
        this.setState({
            showCode: false,
        });
    }

    render() {
        const {className, code, html, prefixCls, title} = this.props;
        const styleClass = classNames(
            prefixCls,
            className,
        );
        return (
            <div className={styleClass}>
                <Card>
                    <CardHeader
                        title={title}
                        action={
                        <Icon icon="fullscreen" onClick={this.openCode}/>}
                    />
                    <CardContent>
                        <Collapse in={true}>
                            <div className="padding-10">
                                {html}
                            </div>
                        </Collapse>
                    </CardContent>
                </Card>
                <Modal header="基本" maxHeight="400" onClose={this.handleClose} visible={this.state.showCode} className="bm-Modal-codeView">
                    <div className="padding-10">
                        {code}
                    </div>
                </Modal>
            </div>
        );
    }
}
