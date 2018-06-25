import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Calendar from '../../src/components/Calendar';
import {Content} from '../../src/components/Page';

interface CalendarCaseProps extends BaseProps {
}

export default class CalendarCase extends React.PureComponent<CalendarCaseProps, {}> {
    state = {
        visible: false,
    };

    handleChange = (value: any) => {
        const ev = value;
    }

    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'CalendarCase',
            className,
        );
        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <Calendar onChange={this.handleChange}/>
                </div>
            </Content>
        );
    }
}
