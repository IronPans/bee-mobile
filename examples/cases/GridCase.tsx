import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Row, {Col} from '../../src/components/Grid';
import {Content} from '../../src/components/Page';

interface GridCaseProps extends BaseProps {
}

export default class GridCase extends React.PureComponent<GridCaseProps, any> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'GridCase',
            className,
        );
        return (
            <Content className={styleClass} {...other}>
                <section className="CasePanel">
                    <Row>
                        <Col lg={3} xs={3}>
                            <div className="Grid-box">3</div>
                        </Col>
                        <Col span={3}>
                            <div className="Grid-box">3</div>
                        </Col>
                        <Col span={3}>
                            <div className="Grid-box">3</div>
                        </Col>
                        <Col span={3}>
                            <div className="Grid-box">3</div>
                        </Col>
                    </Row>
                    <Row className="margin-top-5">
                        <Col span={6}>
                            <div className="Grid-box">6</div>
                        </Col>
                        <Col span={6}>
                            <div className="Grid-box">6</div>
                        </Col>
                    </Row>
                    <Row spacing={16} className="margin-top-5">
                        <Col span={3}>
                            <div className="Grid-box">3</div>
                        </Col>
                        <Col span={3}>
                            <div className="Grid-box">3</div>
                        </Col>
                        <Col span={3}>
                            <div className="Grid-box">3</div>
                        </Col>
                        <Col span={3}>
                            <div className="Grid-box">3</div>
                        </Col>
                    </Row>
                    <Row spacing={16} className="margin-top-5">
                        <Col span={3} offset={3}>
                            <div className="Grid-box">3</div>
                        </Col>
                        <Col span={3} offset={3}>
                            <div className="Grid-box">3</div>
                        </Col>
                    </Row>
                </section>
            </Content>
        );
    }
}
