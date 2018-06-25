import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Locker from '../../src/components/Locker';
import {Content} from '../../src/components/Page';

interface LockerCaseProps extends BaseProps {
}

interface LockerCaseState {
    message?: string;
}

export default class LockerCase extends React.PureComponent<LockerCaseProps, LockerCaseState> {
    static defaultProps = {
        prefixCls: 'bm-LockerCase',
    };

    state = {
        message: '',
    };
    record: any = [];

    handleDone = (event: any) => {
        const rs = event;
        if (rs.points.length < 4) {
            this.setState({
                message: '设定的手势太简单了',
            });
            this.record = [];
            rs.clear();
            return;
        }
        this.record.push(rs.points.join(''));
        if (this.record.length >= 2) {
            if (this.record[0] === this.record[1]) {
                this.setState({
                    message: '手势设定完成',
                });
            } else {
                this.setState({
                    message: '两次手势设定不一致',
                });
            }
            rs.clear();
            this.record = [];
        } else {
            this.setState({
                message: '请确认手势设定',
            });
            rs.clear();
        }
    }

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className,
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Locker onDone={this.handleDone}/>
                    <div className="Locker-Remind">{this.state.message}</div>
                </div>
            </Content>
        );
    }
}
