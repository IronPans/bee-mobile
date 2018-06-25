import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Picker from '../../src/components/Picker';
import {city} from '../common/City';
import {Content} from '../../src/components/Page';

interface PickerCaseProps extends BaseProps {
}

export default class PickerCase extends React.PureComponent<PickerCaseProps, {}> {

    handleChange = (event: any) => {
        const ev = event;
    }

    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'PickerCase', className,
        );
        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <Picker data={city} onChange={this.handleChange}/>
                </div>
            </Content>
        );
    }
}
