import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Textarea from '../../src/components/Textarea';
import {Content} from '../../src/components/Page';

interface TextareaCaseProps extends BaseProps {
}

export default class TextareaCase extends React.PureComponent<TextareaCaseProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-TextareaCase',
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className,
        );
        return (
            <Content className={styleClass}>
                <div className="padding-20">
                    <Textarea placeholder="请输入内容"/>
                </div>
            </Content>
        );
    }
}
