import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import HighlightCode from '../../src/components/HighlightCode';
import Table, {TableColumn} from '../../src/components/Table';

interface BeeCliProps extends BaseProps {
}

export default class BeeCli extends React.PureComponent<BeeCliProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-BeeCli',
    };
    srcAttrs: any[];
    decAttrs: any[];

    constructor(props: BeeCliProps) {
        super(props);
        this.srcAttrs = [
            {
                attr: 'assets/*',
                desc: '这个文件夹下你可以放图片等任何东西，在构建应用时，它们全都会拷贝到发布包中。',
            }, {
                attr: 'App.scss',
                desc: '这里是你的全局样式。',
            }, {
                attr: 'App.tsx',
                desc: 'App组件',
            }, {
                attr: 'index.tsx',
                desc: '这是应用的主要入口点。',
            }, {
                attr: 'index.html',
                desc: '这是别人访问你的网站是看到的主页面的 HTML 文件。 ' +
                '大多数情况下你都不用编辑它。 在构建应用时，CLI 会自动把所有 js 和 css 文件添加进去，' +
                '所以你不必在这里手动添加任何 < script> 或 <link> 标签。',
            }, {
                attr: 'vendro.tsx',
                desc: '这里放置着公共库。',
            },
        ];
        this.decAttrs = [
            {
                attr: 'config/helpers.js',
                desc: '一些配置工具库。',
            }, {
                attr: 'config/webpack.common.js',
                desc: 'webpack的公共配置。',
            }, {
                attr: 'config/webpack.dev.js',
                desc: '开发模式的配置',
            }, {
                attr: 'config/webpack.prod.js',
                desc: '生产模式的配置。',
            }, {
                attr: 'node_modules/',
                desc: 'Node.js 创建了这个文件夹，并且把 package.json 中列举的所有第三方模块都放在其中。',
            }, {
                attr: '.babelrc',
                desc: '这是babel的配置文件',
            }, {
                attr: 'package.json',
                desc: 'npm 配置文件，其中列出了项目使用到的第三方依赖包。 你还可以在这里添加自己的自定义脚本。',
            }, {
                attr: 'README.md',
                desc: '项目的基础文档，预先写入了 CLI 命令的信息。',
            }, {
                attr: 'tsconfig.json',
                desc: 'TypeScript 编译器的配置，你的 IDE 会借助它来给你提供更好的帮助。',
            }, {
                attr: 'webpack.config.js',
                desc: 'webpack的默认配置文件。',
            },
        ];
    }

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className,
            'ApiContent',
        );
        return (
            <Content className={styleClass}>
                <div className="padding-20">
                    <h1 className="no-margin-top">create-bee-mobile</h1>
                    <p>
                        <code className="code-inline">create-bee-mobile</code>
                        是一个命令行界面工具，它可以创建一个最基本的React项目。
                    </p>
                    <h3>技术栈</h3>
                    <ul>
                        <li>React</li>
                        <li>Typescript</li>
                        <li>Sass 预编译工具</li>
                        <li>bee-mobile 移动组件库</li>
                        <li>Webpack 构建工具</li>
                    </ul>

                    <section>
                        <h2>步骤 1. 设置开发环境</h2>
                        <p>
                            在开始工作之前，你必须设置好开发环境。
                        </p>
                        <p>
                            如果你的电脑里没有 Node.js®和 npm，请安装它们。
                        </p>
                        <p>
                            然后全局安装 <code className="code-inline">create-bee-mobile</code> 。
                        </p>
                        <HighlightCode>
                            npm install create-bee-mobile -g
                        </HighlightCode>
                        <h2>步骤 2. 创建新项目</h2>
                        <p>
                            打开终端窗口。
                        </p>
                        <p>
                            运行下列命令来生成一个新项目以及应用的骨架代码：
                        </p>
                        <HighlightCode>
                            create-bee-mobile bee-quickstart
                        </HighlightCode>
                        <blockquote className="bm-blockquote">
                            请耐心等待。 创建新项目需要花费很多时间，大多数时候都是在安装那些 npm 包。
                        </blockquote>
                        <h2>步骤 3. 启动开发服务器</h2>
                        <p>进入项目目录，并启动服务器。</p>
                        <HighlightCode>
                            cd bee-quickstart<br/>
                            npm start
                        </HighlightCode>
                        <p>
                            <code className="code-inline">npm start</code>
                            命令会自动打开浏览器并访问
                            <code className="code-inline">http://localhost:4200</code>，
                            并且监听文件变化，并在修改这些文件时重新构建此应用。
                        </p>
                        <p>初始应用会用一条消息来跟你打招呼：</p>
                        <div>
                            <img src="assets/images/create-bee-mobile.png" alt=""/>
                        </div>

                        <h2>项目文件概览</h2>
                        <p>create-bee-mobile是搭建一个React、bee-mobile移动组件库、Sass项目的快捷方案。</p>

                        <h3>src 文件夹</h3>
                        <p>
                            你的应用代码位于 src 文件夹中。
                            所有的 React 组件、模板、样式、图片以及你的应用所需的任何东西都在那里。
                            这个文件夹之外的文件都是为构建应用提供支持用的。
                        </p>
                        <div className="filetree">
                            <div className="file">src</div>
                            <div className="children">
                                <div className="file">assets</div>
                                <div className="children">
                                    <div className="file">logo.svg</div>
                                </div>
                                <div className="file">App.scss</div>
                                <div className="file">App.tsx</div>
                                <div className="file">index.html</div>
                                <div className="file">index.tsx</div>
                                <div className="file">vendor.tsx</div>
                            </div>
                        </div>
                        <Table className="bm-Paper-2dp" value={this.srcAttrs}>
                            <TableColumn
                                field="attr"
                                header="文件"
                                template={(data: any) => {
                                return (<a>{data.attr}</a>);
                            }}
                            />
                            <TableColumn field="desc" header="用途"/>
                        </Table>
                        <h3>
                            根目录
                        </h3>
                        <p>
                            src/ 文件夹是项目的根文件夹之一。 其它文件是用来帮助你构建、测试、维护、文档化和发布应用的。它们放在根目录下，和 src/ 平级。
                        </p>
                        <div className="filetree">
                            <div className="file">src</div>
                            <div className="children">
                                <div className="file">config</div>
                                <div className="children">
                                    <div className="file">helpers.js</div>
                                    <div className="file">webpack.common.js</div>
                                    <div className="file">webpack.dev.js</div>
                                    <div className="file">webpack.prod.js</div>
                                </div>
                                <div className="file">node_modules/</div>
                                <div className="file">src/..</div>
                                <div className="file">.babelrc</div>
                                <div className="file">favicon.ico</div>
                                <div className="file">package.json</div>
                                <div className="file">README.md</div>
                                <div className="file">tsconfig.json</div>
                            </div>
                        </div>
                        <Table className="bm-Paper-2dp" value={this.decAttrs}>
                            <TableColumn
                                field="attr"
                                header="文件"
                                template={(data: any) => {
                                return (<a>{data.attr}</a>);
                            }}
                            />
                            <TableColumn field="desc" header="用途"/>
                        </Table>
                    </section>
                </div>
            </Content>
        );
    }
}
