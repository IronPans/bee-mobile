import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Button from '../../src/components/Button';
import {Content} from '../../src/components/Page';
import CellSwipe from '../../src/components/CellSwipe';

interface CardCaseProps extends BaseProps {
}

export default class CellSwipeCase extends React.PureComponent<CardCaseProps, any> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'bm-CellSwipeCase',
            className,
        );
        return (
            <Content className={styleClass} {...other}>
                <CellSwipe
                    leftSlot={<Button className="btn-delete">删除</Button>}
                    rightSlot={<Button className="btn-delete">删除</Button>}
                >
                    <div className="padding-10">
                        Cell
                    </div>
                </CellSwipe>
                <CellSwipe
                    leftSlot={<Button className="btn-delete">删除</Button>}
                    rightSlot={<Button className="btn-delete">删除</Button>}
                >
                    <div className="padding-10">
                        Cell
                    </div>
                </CellSwipe>
                <CellSwipe
                    leftSlot={<Button className="btn-delete">删除</Button>}
                    rightSlot={<Button className="btn-delete">删除</Button>}
                >
                    <div className="padding-10">
                        Cell
                    </div>
                </CellSwipe>
            </Content>
        );
    }
}
