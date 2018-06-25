import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import Ripple from '../../src/components/Ripple';
import Avatar from '../../src/components/Avatar';
import Icon from '../../src/components/Icon';

interface RippleCaseProps extends BaseProps {
}

export default class RippleCase extends React.Component<RippleCaseProps, {}> {
    static defaultProps: RippleCaseProps = {
        prefixCls: 'rf-RippleCase',
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls,
            className,
        );
        const fixed: any = {
            position: 'relative',
        };
        const iconStyles: any = {
            position: 'relative',
            width: '40px',
            height: '40px',
        };
        return (
            <Content className={styleClass}>
               <div className="padding-10">
                   <div className="inline-flex" style={fixed}>
                       <Avatar src="assets/images/users/1.jpg" className="BigAvatar"/>
                       <Ripple hidden={true} rippleColor="#f44336"/>
                   </div>
               </div>
                <div className="padding-10">
                    <div className="inline-flex" style={fixed}>
                        <Avatar src="assets/images/users/1.jpg" className="BigAvatar"/>
                        <Ripple hidden={true} centerMode={true}/>
                    </div>
                </div>
                <div className="padding-10">
                    <div className="inline-flex justify-center align-middle" style={iconStyles}>
                        <Icon icon="search" className="circle"/>
                        <Ripple hidden={true} centerMode={true} size="sm"/>
                    </div>
                </div>
            </Content>
        );
    }
}
