import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import Button from '../../src/components/Button';

interface ErrorPageProps extends BaseProps {
}

export default class ErrorPage extends React.PureComponent<ErrorPageProps, any> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'ErrorPage',
            className,
        );
        return (
            <Content className={styleClass} {...other}>
                <div className="padding-10">
                    <Button theme="primary">HomePage</Button>
                </div>
            </Content>
        );
    }
}
