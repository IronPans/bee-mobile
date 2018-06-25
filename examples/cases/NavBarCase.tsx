import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Icon from '../../src/components/Icon';
import NavBar from '../../src/components/NavBar';
import Button from '../../src/components/Button';
import {Content} from '../../src/components/Page';

interface NavBarCaseProps extends BaseProps {
}

export default class NavBarCase extends React.PureComponent<NavBarCaseProps, any> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'NavBarCase',
            className,
        );
        return (
            <Content className={styleClass} {...other}>
                <NavBar
                    left={<Button>
                        <Icon icon="menu"/>
                    </Button>}
                    center="NavBar"
                    right={<Button>
                        <Icon icon="more_vert"/>
                    </Button>}
                />
                <NavBar
                    left={<div className="Row">
                        <Button>
                            <Icon icon="menu"/>
                        </Button>
                        <span className="padding-left-10 Row pull-center">NavBar</span>
                    </div>}
                    right={<Button>
                    <Icon icon="more_vert"/>
                </Button>}
                />
            </Content>
        );
    }
}
