import * as React from 'react';
import * as classNames from 'classnames';
import Tooltip from '../../src/components/Tooltip';
import Button from '../../src/components/Button';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';

interface TooltipCaseProp extends BaseProps {
}

export default class TooltipCase extends React.PureComponent<TooltipCaseProp, {}> {
    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'TooltipCase',
            className,
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Tooltip title="文本提示">
                        <Button theme="primary">Bottom</Button>
                    </Tooltip>

                    <Tooltip title="文本提示" dir="right">
                        <Button theme="primary">Right</Button>
                    </Tooltip>

                    <Tooltip title="文本提示" dir="left">
                        <Button theme="primary">Left</Button>
                    </Tooltip>

                    <Tooltip title="文本提示" dir="top">
                        <Button theme="primary">Top</Button>
                    </Tooltip>
                </div>
            </Content>
        );
    }
}
