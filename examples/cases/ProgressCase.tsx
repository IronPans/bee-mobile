import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Progress from '../../src/components/Progress';
import {Content} from '../../src/components/Page';
import Button from '../../src/components/Button/Button';

interface ProgressCaseProps extends BaseProps {
}

export default class ProgressCase extends React.PureComponent<ProgressCaseProps, any> {
    state = {
        value: 0,
    };

    add = () => {
        let value = this.state.value;
        value += 10;
        if (value > 100) {
            value = 0;
        }
        this.setState({
            value,
        });
    }

    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'ProgressCase',
            className,
        );
        return (
            <Content className={styleClass} {...other}>
                <div className="padding-20 Row">
                    <div className="Col-10">
                        <Progress value={this.state.value}/>
                        <Button onClick={this.add} className="margin-top-10">+10</Button>
                    </div>
                    <div className="Col-2 padding-left-5">
                        {this.state.value}%
                    </div>
                </div>
                <div className="padding-20">
                    <Progress value={50} showValue={true}/>
                </div>
                <div className="padding-20">
                    <Progress loading={true}/>
                </div>
            </Content>
        );
    }
}
