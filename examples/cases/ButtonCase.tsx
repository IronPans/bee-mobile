import * as React from 'react';
import Button, { ButtonGroup } from '../../src/components/Button';
import Icon from '../../src/components/Icon';
import {Content} from '../../src/components/Page';

export default class ButtonCase extends React.PureComponent {
    render() {
        return (
            <Content className="ButtonCase ">
                <div className="CasePanel">
                    <Button>Default</Button>
                    <Button theme="primary">Primary</Button>
                    <Button theme="info">Info</Button>
                    <Button theme="success">Success</Button>
                    <Button theme="warning">Warning</Button>
                    <Button theme="danger">Danger</Button>
                </div>
                <div className="CasePanel">
                    <Button theme="primary" block={true}>Block Button</Button>
                </div>
                <div className="CasePanel">
                    <Button theme="primary" size="lg">LARGE</Button>
                    <Button theme="primary">MEDIUM</Button>
                    <Button theme="primary" size="sm">SMALL</Button>
                </div>
                <div className="CasePanel">
                    <Button disabled={true}>Disabled</Button>
                    <Button theme="primary" disabled={true}>Disabled</Button>
                </div>
                <div className="CasePanel">
                    <Button theme="primary">
                        <Icon icon="tag_faces"/>
                        Block Button
                    </Button>
                </div>
                <div className="CasePanel">
                    <Button theme="primary" size="lg" shape="circle">
                        <Icon icon="tag_faces" size="2x"/>
                    </Button>
                    <Button theme="primary" shape="circle">
                        <Icon icon="tag_faces"/>
                    </Button>
                </div>
                <div className="CasePanel">
                    <Button theme="primary">
                        <Icon icon="tag_faces"/>
                        Block Button
                    </Button>
                </div>
                <div className="CasePanel">
                    <Button flat={true}>Default</Button>
                    <Button theme="primary" flat={true}>Primary</Button>
                    <Button theme="info" flat={true}>Info</Button>
                    <Button theme="success" flat={true}>Success</Button>
                    <Button theme="warning" flat={true}>Warning</Button>
                    <Button theme="danger" flat={true}>Danger</Button>
                </div>
                <div className="CasePanel">
                    <ButtonGroup>
                        <Button theme="primary">Button</Button>
                        <Button theme="primary">Button</Button>
                        <Button theme="primary">Button</Button>
                    </ButtonGroup>
                </div>
            </Content>
        );
    }
}
