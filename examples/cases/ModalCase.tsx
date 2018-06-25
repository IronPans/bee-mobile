import * as React from 'react';
import * as classNames from 'classnames';
import Modal from '../../src/components/Modal';
import Button from '../../src/components/Button';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';

interface Props extends BaseProps {
}

interface State {
    visible: boolean;
}

export default class ModalCase extends React.PureComponent<Props, State> {
    state = {
        visible: false,
    };

    handleOpen = () => {
        this.setState({
            visible: true,
        });
    }

    handleClose = () => {
        this.setState({
            visible: false,
        });
    }

    render() {
        const styleClass = classNames(
            'ModalCase',
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Button theme="primary" onClick={this.handleOpen}>Open Modal</Button>
                    <Modal header="基本" visible={this.state.visible} onClose={this.handleClose}>
                        <div className="padding-10">
                            Modal
                        </div>
                    </Modal>
                </div>
            </Content>
        );
    }
}
