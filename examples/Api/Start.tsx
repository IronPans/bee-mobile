import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import HighlightCode from '../../src/components/HighlightCode';
import {Content} from '../../src/components/Page';
import PhoneView from '../components/PhoneView';

interface StartProps extends BaseProps {
}

export default class Start extends React.PureComponent<StartProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-Start',
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            'ApiContent',
            prefixCls, className,
        );
        const startCode = `import React from 'react';
import {Button} from 'bee-mobile';

const App = () => (
     < Button theme="primary">
               Hello World
     </Button>
);`;
        return (
            <Content className={styleClass}>
                <div className="padding-20 no-padding-bottom Row justify-space-between">
                    <div className="ApiBox">
                        <h2 className="title">安装</h2>
                        <p className="subtitle">本文将介绍<span className="text-bold">bee-mobile</span> 的安装方式和基本的用法。</p>
                        <h2 className="title">npm</h2>
                        <p className="subtitle">
                            推荐使用<code className="code-inline">npm</code>
                            的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
                        <div>
                            <HighlightCode>
                                npm install bee-mobile -S
                            </HighlightCode>
                        </div>
                        <h2 className="title">CDN</h2>
                        <p className="subtitle">
                            目前可以通过
                            <code className="code-inline">unpkg.com/bee-mobile</code>
                            获取到最新版本的资源，在页面上引入<code className="code-inline">js</code>
                            和<code className="code-inline">css</code>文件即可开始使用。
                        </p>
                        <div>
                            <HighlightCode lang="html">
&lt;!-- 引入样式 --&gt;<br/>
&lt;link rel="stylesheet" href="https://unpkg.com/bee-mobile/dist/bee-mobile.min.css"&gt;<br/>
&lt;!-- 引入组件库 --&gt;<br/>
&lt;script src="https://unpkg.com/bee-mobile/dist/bee-mobile.min.js"&gt;&lt;/script&gt;
                            </HighlightCode>
                        </div>

                        <h2 className="title">依赖</h2>
                        <p className="subtitle">
                            <span className="text-bold">bee-mobile</span>
                            的字体图标依赖<code className="code-inline">Material Icon</code>图标库。
                        </p>
                        <div>
                            <HighlightCode>
&lt;link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet"&gt;<br/>
                            </HighlightCode>
                        </div>

                        <h2 className="title">开始使用</h2>
                        <div>
                            <HighlightCode>
                                {startCode}
                            </HighlightCode>
                        </div>
                    </div>
                    <PhoneView frameUrl="#/components/overview"/>
                </div>
            </Content>
        );
    }
}
