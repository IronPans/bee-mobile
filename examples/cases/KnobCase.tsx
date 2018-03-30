import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Knob from '../../src/components/Knob';
import Button from '../../src/components/Button';
import Icon from '../../src/components/Icon';
import {Content} from "../../src/components/Page";

interface KnobCaseProps extends BaseProps {
}

interface KnobCaseState {
    value: number
}

export default class KnobCase extends React.PureComponent<KnobCaseProps, KnobCaseState> {
    state = {
        value: 0
    };

    handleLoad = () => {
        let value = this.state.value;
        value += 10;
        if (value > 100) {
            value = 0;
        }
        this.setState({
            value
        });
    };

    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'KnobCase',
            className
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Knob value={this.state.value}>
                        {this.state.value + '%'}
                    </Knob>
                    <Button theme="primary" onClick={this.handleLoad}>Add</Button>
                </div>
                <div className="CasePanel">
                    <Knob value={100} gapDegree={40}>
                        100%
                    </Knob>
                    <Knob value={50}>
                        <Icon icon="local_grocery_store"/>
                    </Knob>
                </div>
            </Content>
        );
    }
}