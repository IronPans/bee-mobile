import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Badge from '../../src/components/Badge';
import Icon from '../../src/components/Icon';
import Button from '../../src/components/Button';
import {Content} from '../../src/components/Page';

interface BadgeCaseProps extends BaseProps {
}

export default class BadgeCase extends React.PureComponent<BadgeCaseProps, {}> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'BadgeCase',
            className,
        );
        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <Badge count={11} fixed={false}/>
                    <Badge count={1}>
                        <Icon icon="local_post_office" className="case-head"/>
                    </Badge>
                    <Badge count={11} shape="circle">
                        <Button>BUTTON</Button>
                    </Badge>
                    <Button>
                        BUTTON
                        <Badge count={8} fixed={false}/>
                    </Button>
                </div>
                <div className="CasePanel">
                    <Badge dot={true}>
                        <Icon icon="local_post_office" className="case-head"/>
                    </Badge>
                    <Badge dot={true} notify={true}>
                        <Icon icon="local_post_office" className="case-head"/>
                    </Badge>
                </div>
                <div className="CasePanel">
                    <p>
                        <Badge dot={true} fixed={false} status="primary"/> primary
                    </p>
                    <p>
                        <Badge dot={true} fixed={false} status="info"/> info
                    </p>
                    <p>
                        <Badge dot={true} fixed={false} status="success"/> success
                    </p>
                    <p>
                        <Badge dot={true} fixed={false} status="warning"/> waring
                    </p>
                    <p>
                        <Badge dot={true} fixed={false} status="error"/> Error
                    </p>
                </div>
            </Content>
        );
    }
}
