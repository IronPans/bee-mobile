import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Inputtext from '../../src/components/Inputtext';
import Icon from '../../src/components/Icon';
import Textarea from '../../src/components/Textarea';
import {Content} from '../../src/components/Page';

interface InputtextCaseProps extends BaseProps {
}

export default class InputtextCase extends React.PureComponent<InputtextCaseProps, any> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'InputtextCase',
            className,
        );
        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <Inputtext placeholder="Search"/>
                </div>
                <div className="CasePanel">
                    <Inputtext placeholder="Large size" size="lg"/>
                    <Inputtext placeholder="Default size" className="margin-top-10"/>
                    <Inputtext placeholder="Small size" size="xs" className="margin-top-10"/>
                </div>
                <div className="CasePanel">
                    <Inputtext placeholder="Search" label="Name"/>
                </div>
                <div className="CasePanel">
                    <Inputtext placeholder="Search" label="Name" inline={true}/>
                </div>
                <div className="CasePanel">
                    <Inputtext animated={true} label="Name"/>
                </div>
                <div className="CasePanel">
                    <Inputtext placeholder="Money" startAdorn={<Icon icon="local_grocery_store"/>} endAdorn="$"/>
                </div>
                <div className="CasePanel">
                    <Textarea placeholder="Search"/>
                </div>
                <div className="CasePanel">
                    <Textarea animated={true} label="Name"/>
                </div>
            </Content>
        );
    }
}
