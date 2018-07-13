import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {off} from '../common/Utils';
import {getScrollParent} from '../common/Dom';
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';
import {LazyLoadProps} from './PropsType';

const lazyLoadItems: Array<LazyLoad> = [];

const inBrowser = typeof window !== 'undefined';

let passiveEventSupported = false;
try {
    const opts = Object.defineProperty({}, 'passive', {
        get() {
            passiveEventSupported = true;
        },
    });
    window.addEventListener('test', () => false, opts);
} catch (e) {
    // e
}

const passiveEvent = passiveEventSupported ? {capture: false, passive: true} : false;

const checkInView = (component: any) => {
    let scrollNode: any = component.props.scrollNode;
    const node: any = ReactDOM.findDOMNode(component);
    const nodeRect = node.getBoundingClientRect();
    let inView = false;
    const wHeight = window.innerHeight || document.documentElement.clientHeight;
    const wWidth = window.innerWidth || document.documentElement.clientWidth;
    if (scrollNode === document.body || scrollNode === window || scrollNode === document) {
        inView = inBrowser &&
            (nodeRect.top < wHeight && nodeRect.bottom > 0) &&
            (nodeRect.left < wWidth && nodeRect.right > 0);
    } else {
        scrollNode = getScrollParent(node);
        const height = Math.max(scrollNode.offsetHeight, wHeight);
        const width = Math.max(scrollNode.offsetWidth, wWidth);
        const scrollRect = scrollNode.getBoundingClientRect();
        const style: any = window.getComputedStyle(scrollNode);
        const paddingTop = parseFloat(style.paddingTop || 0);
        const paddingLeft = parseFloat(style.paddingLeft || 0);
        const top = nodeRect.top - scrollRect.top + paddingTop;
        const left = nodeRect.left - scrollRect.left + paddingLeft;
        inView = inBrowser && (left >= 0 && left < (width - paddingLeft)) &&
            (top >= 0 && top < (height - paddingTop));
    }
    if (inView) {
        component.loaded = true;
        component.forceUpdate();
    }
    return inView;
};

const lazyLoadHandler = () => {
    for (const item of lazyLoadItems) {
        const inView = checkInView(item);
        if (inView) {
            const index = lazyLoadItems.indexOf(item);
            if (index !== -1) {
                lazyLoadItems.splice(index, 1);
            }
            if (item.props.onLoaded) {
                (item.props.onLoaded as () => void)();
            }
        }
    }
};

let delayType: any;
let finalLazyLoadHandler: any = null;

export default class LazyLoad extends React.PureComponent<LazyLoadProps, {}> {
    static defaultProps: LazyLoadProps = {
        prefixCls: 'bm-LazyLoad',
    };
    rect: any;
    loaded: boolean;

    constructor(props: LazyLoadProps) {
        super(props);
        this.loaded = false;
    }

    componentDidMount() {
        this.rect = ReactDOM.findDOMNode(this);
        let parent: any = this.props.scrollNode;
        if (!parent) {
            parent = getScrollParent(ReactDOM.findDOMNode(this));
        }
        const needResetFinalLazyLoadHandler = (this.props.debounce !== undefined && delayType === 'throttle')
            || (delayType === 'debounce' && this.props.debounce === undefined);

        if (needResetFinalLazyLoadHandler) {
            off(window, 'scroll', finalLazyLoadHandler, passiveEvent);
            off(window, 'resize', finalLazyLoadHandler, passiveEvent);
            finalLazyLoadHandler = null;
        }

        if (!finalLazyLoadHandler) {
            if (this.props.debounce !== undefined) {
                finalLazyLoadHandler = debounce(lazyLoadHandler, typeof this.props.debounce === 'number' ?
                    this.props.debounce :
                    300);
                delayType = 'debounce';
            } else if (this.props.throttle !== undefined) {
                finalLazyLoadHandler = throttle(lazyLoadHandler, typeof this.props.throttle === 'number' ?
                    this.props.throttle :
                    300);
                delayType = 'throttle';
            } else {
                finalLazyLoadHandler = lazyLoadHandler;
            }
        }
        const nodesCount = 1 + (+parent.getAttribute('data-lazyload'));
        if (nodesCount === 1) {
            parent.addEventListener('scroll', finalLazyLoadHandler, passiveEvent);
        }
        parent.setAttribute('data-lazyload', nodesCount);
        lazyLoadItems.push(this);
        checkInView(this);
    }

    componentWillUnmount() {
        const parent = getScrollParent(ReactDOM.findDOMNode(this));
        if (parent && typeof parent.getAttribute === 'function') {
            const nodesCount = (+parent.getAttribute('data-lazyload')) - 1;
            if (nodesCount === 0) {
                parent.removeEventListener('scroll', lazyLoadHandler, passiveEvent);
                parent.removeAttribute('data-lazyload');
            } else {
                parent.setAttribute('data-lazyload', nodesCount);
            }
        }
        const index = lazyLoadItems.indexOf(this);
        if (index !== -1) {
            lazyLoadItems.splice(index, 1);
        }

        if (lazyLoadItems.length === 0) {
            off(window, 'resize', lazyLoadHandler, passiveEvent);
            off(window, 'scroll', lazyLoadHandler, passiveEvent);
        }
    }

    render() {
        const {children, placeholder, prefixCls} = this.props;
        return (
            this.loaded ? children :
                (placeholder ? placeholder :
                    <div style={{height: this.props.height}} className={`${prefixCls}-placeholder`}/>)
        );
    }
}
