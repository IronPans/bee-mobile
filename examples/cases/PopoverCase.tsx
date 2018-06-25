import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Button from '../../src/components/Button';
import Popover from '../../src/components/Popover';
import {Content} from '../../src/components/Page';
import List, {ListItem, ListItemText} from '../../src/components/List';

interface PopoverCaseProps extends BaseProps {
}

interface PopoverCaseState {
    visible: boolean;
    anchorEl: any;
}

export default class PopoverCase extends React.PureComponent<PopoverCaseProps, PopoverCaseState> {
    state = {
        visible: false,
        anchorEl: null,
    };
    button: any;
    handleClickButton = () => {
        this.setState({
            visible: !this.state.visible!,
            anchorEl: ReactDOM.findDOMNode(this.button),
        });
    }

    handleClose = () => {
        this.setState({
            visible: false,
        });
    }

    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'PopoverCase',
            className,
        );
        const {anchorEl} = this.state;
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Button theme="primary" ref={node => this.button = node} onClick={this.handleClickButton}>Open
                        Popover</Button>

                    <Popover anchorEl={anchorEl} visible={this.state.visible} onClose={this.handleClose}>
                        <List>
                            {
                                [0, 1, 2].map((value, index) => (
                                    <ListItem key={index.toString()} style={{width: '100px'}}>
                                        <ListItemText>
                                            {'Item' + value}
                                        </ListItemText>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Popover>
                </div>
            </Content>
        );
    }
}
