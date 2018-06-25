import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import ActionSheet from '../../src/components/ActionSheet';
import {Content} from '../../src/components/Page';
import Button from '../../src/components/Button';

interface ActionSheetCaseProps extends BaseProps {
}

export default class ActionSheetCase extends React.PureComponent<ActionSheetCaseProps, {}> {

    handleClick = () => {
        ActionSheet.show({
            buttons: [
                {
                    text: '拍照',
                }, {
                    text: '从相册中选择',
                },
            ],
            cancel: true,
            title: 'Message',
        });
    }

    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'ActionSheetCase', className,
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Button theme="primary" onClick={this.handleClick}>Show Action Sheet</Button>
                </div>
            </Content>
        );
    }
}
