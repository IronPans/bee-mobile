import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Rate from '../../src/components/Rate';
import {Content} from '../../src/components/Page';

interface RateCaseProps extends BaseProps {
}

export default class RateCase extends React.PureComponent<RateCaseProps, any> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'RateCase',
            className,
        );
        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <Rate/>
                </div>
                <div className="CasePanel">
                    <Rate allowHalf={true} defaultValue={3}/>
                </div>
                <div className="CasePanel">
                    <Rate allowHalf={true} template="好"/>
                </div>
            </Content>
        );
    }
}
