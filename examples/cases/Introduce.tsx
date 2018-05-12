import * as React from 'react';
import * as classNames from 'classnames';
import {NavLink} from 'react-router-dom';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from "../../src/components/Page";
import Button from "../../src/components/Button";

interface IntroduceProps extends BaseProps {
}

export default class Introduce extends React.PureComponent<IntroduceProps, any> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'Introduce',
            className
        );
        return (
            <Content className={styleClass} {...other}>
                <section className="Introduce-jumbotron">
                    <img src="assets/logo-white.svg" width="200" height="200" alt=""/>
                    <h1 className="margin-top-20 text-center">Bee Mobile</h1>
                    <div className="subtitle">
                        为移动而生的React移动组件库
                    </div>
                    <div className="margin-top-30 text-center">
                        <Button size="lg" theme="primary" to="#/docs/getting-started">
                            开始使用
                        </Button>
                        <Button size="lg" className="margin-left-20" to="#/components/overview">
                            查看实例
                        </Button>
                    </div>
                    <div className="subtitle github-box">
                        <img className="margin-right-10" src="https://img.shields.io/npm/v/bee-mobile.svg?style=flat-square" alt="bee-mobile"/>
                        <iframe src="https://ghbtns.com/github-btn.html?user=IronPans&amp;repo=bee-mobile&amp;type=star&amp;count=true"
                            frameBorder="0" scrolling="0" width="110px" height="20px"/>
                    </div>
                </section>
                <div className="margin-top-10 Row justify-center">
                    <div className="Col-8 Col-offset-2">
                        <section>
                            <h2>丰富强大的组件</h2>
                            <p className="subtitle">
                                一共拥有50多个组件，已为你需要在项目中使用的很多功能性组件做好准备。
                            </p>
                            <div className="Row">
                                <div className="Col-3 padding-5">
                                    <img style={{width: '100%'}} src="assets/gif/bm-button.gif" alt="react"/>
                                </div>
                                <div className="Col-3 padding-5">
                                    <img style={{width: '100%'}} src="assets/gif/bm-datepicker.gif" alt="react"/>
                                </div>
                                <div className="Col-3 padding-5">
                                    <img style={{width: '100%'}} src="assets/gif/bm-buttonNavigation.gif" alt="react"/>
                                </div>
                                <div className="Col-3 padding-5">
                                    <img style={{width: '100%'}} src="assets/gif/bm-spin.gif" alt="react"/>
                                </div>
                            </div>
                        </section>
                        <section>
                            <h2>自定义主题文件，更易扩展</h2>
                            <p className="subtitle">
                                Bee Mobile 使用sass文件，所有的颜色都有一个变量维护，通过编写 sass 文件完成自定义主题，另外组件内部也提供一些修改效果的参数。
                            </p>
                        </section>
                    </div>
                </div>
                <h2 className="text-center">移动预览</h2>
                <div className="text-center padding-bottom-20">
                    <img src="http://oumfrpm5j.bkt.clouddn.com/bee-mobile.png" alt=""/>
                </div>
            </Content>
        );
    }
}