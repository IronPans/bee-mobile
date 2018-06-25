import * as React from 'react';
import * as classNames from 'classnames';
import Icon from '../../src/components/Icon';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import {ICONS} from '../common/icons';

interface IconCaseProps extends BaseProps {}

interface IconCaseState {
    icon?: string;
}

export default class IconCase extends React.PureComponent<IconCaseProps, IconCaseState> {
    state = {
        icon: '',
    };

    handleClick = (icon: string) => {
        this.setState({
            icon,
        });
    }

    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'IconCase',
            className,
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <p>
                        Icon: <span>{this.state.icon}</span>
                    </p>
                    <ul className="doc-icon">
                        {
                            ICONS.map((icon: any) => {
                                return (
                                    <li key={icon.ligature} onClick={this.handleClick.bind(this, icon.ligature)}>
                                        <Icon icon={icon.ligature}/>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </Content>
        );
    }
}
