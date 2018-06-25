import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import DatetimePicker from '../../src/components/DatetimePicker';
import {Content} from '../../src/components/Page';

interface DatetimePickerCaseProps extends BaseProps {
}

interface DatetimePickerCaseState {
    visible?: boolean;
}

export default class DatetimePickerCase extends React.PureComponent<DatetimePickerCaseProps, DatetimePickerCaseState> {
    state: DatetimePickerCaseState = {
        visible: false,
    };

    handleClose = () => {
        this.setState({
            visible: false,
        });
    }

    handleChange = (event: any) => {
        const ev = event;
    }

    handleOpen = () => {
        this.setState({
            visible: true,
        });
    }

    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'DatetimePickerCase',
            className,
        );
        const {visible} = this.state;
        return (
            <Content className={styleClass}>
                <section className="CasePanel">
                    <DatetimePicker
                        visible={visible}
                        minDate="2010/1/1"
                        onOpen={this.handleOpen}
                        onOk={this.handleChange}
                        onClose={this.handleClose}
                    />
                </section>
            </Content>
        );
    }
}
