import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Chip, {ChipNode, ChipGroup} from '../../src/components/Chip';
import Avatar from '../../src/components/Avatar';
import {Content} from '../../src/components/Page';

interface ChipCaseProps extends BaseProps {
}

export default class ChipCase extends React.PureComponent<ChipCaseProps, any> {
    chipData: Array<ChipNode> = [
        {
            label: 'CSS',
            value: 'CSS',
        },
        {
            label: 'Javascript',
            value: 'Javascript',
        },
    ];

    handleDelete = (event: any) => {
        const ev = event;
    }

    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'ChipCase', className,
        );
        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <Chip active={true} label="Javascript"/>
                    <Chip
                        avatar={
                            <Avatar src="assets/images/users/1.jpg"/>
                        }
                        label="Javascript"
                    />
                    <Chip
                        avatar={
                            <Avatar src="assets/images/users/1.jpg"/>
                        }
                        label="Javascript"
                        onDelete={this.handleDelete}
                    />
                </div>
                <div className="CasePanel">
                    <ChipGroup data={this.chipData} placeholder="Love"/>
                </div>
            </Content>
        );
    }
}
