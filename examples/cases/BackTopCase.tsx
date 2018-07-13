import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import BackTop from '../../src/components/BackTop';
import Icon from '../../src/components/Icon';
import Button from '../../src/components/Button';

interface BackTopCaseProps extends BaseProps {
}

export default class BackTopCase extends React.PureComponent<BackTopCaseProps, any> {
    scrollNode: any;

    getRef = (node: any) => {
        this.scrollNode = node;
    }

    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'BackTopCase',
            className,
        );
        return (
            <Content className={styleClass} {...other} ref={this.getRef}>
                请拖到下面
                <div className="scrollBox">
                    Content
                    <BackTop>
                        <Button theme="primary" shape="circle" size="lg">
                            <Icon icon="keyboard_arrow_up"/>
                        </Button>
                    </BackTop>
                </div>
            </Content>
        );
    }
}
