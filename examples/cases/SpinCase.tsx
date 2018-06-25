import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Spin from '../../src/components/Spin';
import List, {ListItem, ListItemText, ListItemAction} from '../../src/components/List';
import {Content} from '../../src/components/Page';

interface SpinCaseProps extends BaseProps {
}

export default class SpinCase extends React.PureComponent<SpinCaseProps, any> {
    spinners: any[] = ['circleRound', 'circleLine', 'circleRoundFade', 'lineSquare', 'lineRound', 'lineBounce', 'snake'];

    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'SpinCase',
            className,
        );
        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <List>
                        {
                            this.spinners.map((spinner, index) => (
                                <ListItem key={index.toString()}>
                                    <ListItemText>
                                        {spinner}
                                    </ListItemText>
                                    <ListItemAction>
                                        <Spin type={spinner}/>
                                    </ListItemAction>
                                </ListItem>
                            ))
                        }
                    </List>
                </div>
            </Content>
        );
    }
}
