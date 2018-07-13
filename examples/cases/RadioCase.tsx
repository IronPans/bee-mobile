import * as React from 'react';
import * as classNames from 'classnames';
import Radio from '../../src/components/Radio';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';

interface Props extends BaseProps {
}

export default class RadioCase extends React.PureComponent<Props, {}> {
    state = {
        value: '',
    };
    radios = [
        {
            value: 'Movie',
            label: 'Movie',
        }, {
            value: 'Food',
            label: 'Food',
        }, {
            value: 'Game',
            label: 'Game',
        },
    ];

    handleChange = (event: any) => {
        this.setState({
            value: event.value,
        });
    }

    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'RadioCase',
            className,
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    {
                        this.radios.map((radio, i) => {
                            return (
                                <Radio
                                    key={i}
                                    name="love"
                                    value={radio.value}
                                    checked={radio.value === this.state.value}
                                    onChange={this.handleChange}
                                >
                                    {radio.label}
                                </Radio>
                            );
                        })
                    }
                    <div className="margin-top-10">
                        当前选中值：{this.state.value}
                    </div>
                </div>
            </Content>
        );
    }
}
