import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import InputNumber from '../../src/components/InputNumber';
import {Content} from '../../src/components/Page';

interface InputNumberCaseProps extends BaseProps {
}

interface InputNumberCaseState {
    value: number;
}

export default class InputNumberCase extends React.PureComponent<InputNumberCaseProps, InputNumberCaseState> {

    handleChange = (event: any) => {
        const ev = event;
    }

    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'InputNumberCase',
            className,
        );

        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <InputNumber defaultValue={10} onChange={this.handleChange}/>
                </div>
                <div className="CasePanel">
                    <InputNumber step={5}/>
                </div>
                <div className="CasePanel">
                    <InputNumber step={0.1}/>
                </div>
                <div className="CasePanel">
                    <InputNumber min={0} max={10}/>
                </div>
                <div className="CasePanel">
                    <InputNumber type={2}/>
                </div>
            </Content>
        );
    }
}
