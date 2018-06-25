import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Swiper from '../../src/components/Swiper';
import {Content} from '../../src/components/Page';

interface SwiperCaseProps extends BaseProps {
}

interface SwiperState {
}

export default class SwiperCase extends React.PureComponent<SwiperCaseProps, SwiperState> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'SwiperCase',
            className,
        );
        return (
            <Content className={styleClass} {...other}>
                <section className="CasePanel">
                    <Swiper navigation={true}>
                        <div className="box blue">Slide1</div>
                        <div className="box red">Slide2</div>
                        <div className="box yellow">Slide3</div>
                        <div className="box green">Slide4</div>
                    </Swiper>
                </section>
                <section className="CasePanel">
                    <Swiper spaceBetween={10} loop={true} slideWidth={0.8} centerMode={true}>
                        <div className="box blue">Slide1</div>
                        <div className="box red">Slide2</div>
                        <div className="box yellow">Slide3</div>
                        <div className="box green">Slide4</div>
                    </Swiper>
                </section>
                <section className="CasePanel">
                    <Swiper loop={true} autoplay={true}>
                        <div className="box blue">Slide1</div>
                        <div className="box red">Slide2</div>
                        <div className="box yellow">Slide3</div>
                        <div className="box green">Slide4</div>
                    </Swiper>
                </section>
                <section className="CasePanel">
                    <Swiper loop={true} direction="vertical">
                        <div className="box blue">Slide1</div>
                        <div className="box red">Slide2</div>
                        <div className="box yellow">Slide3</div>
                        <div className="box green">Slide4</div>
                    </Swiper>
                </section>
                <section className="CasePanel">
                    <Swiper loop={true} effect="fade" autoplay={true}>
                        <div className="box blue">Slide1</div>
                        <div className="box red">Slide2</div>
                        <div className="box yellow">Slide3</div>
                        <div className="box green">Slide4</div>
                    </Swiper>
                </section>
            </Content>
        );
    }
}
