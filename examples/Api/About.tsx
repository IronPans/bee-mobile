import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';

interface AboutProps extends BaseProps {
}

export default class About extends React.PureComponent<AboutProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-About',
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className,
        );
        return (
            <Content className={styleClass}>
                <div className="padding-20">
                    <h2>关于Bee Mobile</h2>
                    <p>
                        Bee Mobile是为了手机H5页面提供一个常用的组件库，减少重复工作。
                    </p>
                    <h2>兼容性</h2>
                    <p>
                        兼容到 iOS 6+ 以及 Android 4.0+
                    </p>
                    <p>
                        因为安卓机型众多，我们无法对每一台机器进行测试，
                        如果你发现在安卓 4.0以上的机器上有bug，可以在 github 上给我们提
                        <a href="https://github.com/IronPans/bee-mobile/issues" target="_blank">
                            issue</a>，或者直接联系我们（联系方式在下面）。
                    </p>
                    <h2>联系我们</h2>
                    <div>
                        你可以通过以下方式联系我们：
                        <ul>
                            <li>
                                可以在QQ群 523179693(新) 交流或邮件咨询
                                <a href="mailto:ghmagical@gmail.com">ghmagical@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Content>
        );
    }
}
