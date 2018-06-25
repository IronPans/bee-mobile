import * as React from 'react';
import * as classNames from 'classnames';
import Checkbox from '../../src/components/Checkbox';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';

interface CheckboxProps extends BaseProps {
}

export default class CheckboxCase extends React.PureComponent<CheckboxProps, {}> {
    state = {
        value: [],
    };
    checkboxs = [
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
        const value = event.value;
        let selectedValue: any = [...this.state.value];
        if (event.checked) {
            selectedValue.push(value);
        } else {
            selectedValue = selectedValue.filter((v: any) => {
                return v !== value;
            });
        }
        this.setState({
            value: selectedValue,
        });
    }

    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'CheckboxCase', className,
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    {
                        this.checkboxs.map((radio, i) => {
                            return (
                                <Checkbox key={i} value={radio.value} onChange={this.handleChange}>
                                    {radio.label}
                                </Checkbox>
                            );
                        })
                    }
                    <div className="margin-top-10">
                        当前选中值：
                        {
                            this.state.value.map((value: string) => {
                                return (<span key={value} className="padding-left-10">{value}</span>);
                            })
                        }
                    </div>
                </div>
            </Content>
        );
    }
}
