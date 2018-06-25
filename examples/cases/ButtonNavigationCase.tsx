import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import ButtonNavigation, {ButtonNavigationItem} from '../../src/components/ButtonNavigation';
import Icon from '../../src/components/Icon';
import {Content} from '../../src/components/Page';
import Swiper from '../../src/components/Swiper';

interface ButtonNavigationCaseProps extends BaseProps {
}

interface ButtonNavigationCaseState {
    index: number;
}

export default class ButtonNavigationCase
    extends React.PureComponent<ButtonNavigationCaseProps, ButtonNavigationCaseState> {
    state: ButtonNavigationCaseState = {
        index: 0,
    };
    handleChange = (event: any) => {
        this.setState({
            index: event.index,
        });
    }

    handleSlideChange = (activeIndex: number) => {
        this.setState({
            index: activeIndex,
        });
    }

    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'ButtonNavigationCase',
            className,
        );
        const index: any = this.state.index;
        return (
            <Content className={styleClass} {...other}>
                <Swiper
                    on={{
                        slideChange: this.handleSlideChange,
                    }}
                    pagination={false}
                    activeIndex={index}
                >
                    <div className="box padding-10">Content1</div>
                    <div className="box padding-10">Content2</div>
                    <div className="box padding-10">Content3</div>
                </Swiper>
                <ButtonNavigation activeIndex={index} onChange={this.handleChange}>
                    <ButtonNavigationItem label="Recents" icon={<Icon icon="home"/>}/>
                    <ButtonNavigationItem label="Nearby" icon={<Icon icon="shopping_cart"/>}/>
                    <ButtonNavigationItem label="Favorites" icon={<Icon icon="perm_identity"/>}/>
                </ButtonNavigation>
            </Content>
        );
    }
}
