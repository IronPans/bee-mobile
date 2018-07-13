import * as React from 'react';
import * as classNames from 'classnames';
import * as highlight from 'highlight.js/lib/highlight.js';
import * as highlightJavascript from 'highlight.js/lib/languages/javascript';
import * as highlightTypescript from 'highlight.js/lib/languages/typescript';
import * as highlightCSS from 'highlight.js/lib/languages/css';
import * as highlightBash from 'highlight.js/lib/languages/bash';
import * as highlightXML from 'highlight.js/lib/languages/xml';
import {HighlightCodeProps} from './PropsType';

export default class HighlightCode extends React.PureComponent<HighlightCodeProps, any> {
    static defaultProps: HighlightCodeProps = {
        prefixCls: 'bm-HighlightCode',
        lang: 'javascript',
        showCopy: false,
    };
    code: any;

    componentDidMount() {
        this.setLang(this.props);
    }

    setLang(props: any) {
        switch (props.lang) {
            case 'typescript':
                highlight.registerLanguage('typescript', highlightTypescript);
                break;
            case 'javascript':
                highlight.registerLanguage('javascript', highlightJavascript);
                break;
            case 'xml':
                highlight.registerLanguage('xml', highlightXML);
                break;
            case 'bash':
                highlight.registerLanguage('bash', highlightBash);
                break;
            case 'css':
                highlight.registerLanguage('css', highlightCSS);
                break;
        }
        highlight.highlightBlock(this.code);
    }

    clearSelection() {
        const selection = window.getSelection();
        try {
            selection.removeAllRanges();
        } catch (ex) {
            (document as any).body.createTextRange().select();
            (document as any).selection.empty();
        }
    }

    onCopy = () => {
        this.clearSelection();
        this.code.appendChild(document.createTextNode(''));
        const range = document.createRange();
        range.setStart(this.code, 0);
        range.setEnd(this.code.lastChild, 0);
        window.getSelection().addRange(range);
        document.execCommand('copy');
    }

    getRef = (node: any) => {
        this.code = node;
    }

    render() {
        const {className, children, lang, prefixCls, showCopy, ...other} = this.props;
        const styleClass = classNames(
            prefixCls,
            `${prefixCls}-${lang}`,
            className,
        );
        const codeClass = classNames('hljs', lang);
        return (
            <div className={styleClass} lang={lang} {...other}>
                <pre><code className={codeClass} ref={this.getRef}>
                    {children}
                </code></pre>
                {showCopy ? (<button className="bm-HighlightCode-btn" onClick={this.onCopy}>
                    <i title="Copy" className="Icon material-icons">content_copy</i>
                </button>) : null}
            </div>
        );
    }
}
