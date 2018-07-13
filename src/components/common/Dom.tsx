function addEventListener(element: any, type: string, callback: any, capture: boolean = false) {
    if (element.addEventListener) {
        element.addEventListener(type, callback, capture);
    } else if (element.attachEvent) {
        element.attachEvent(type, callback);
    }
}

function removeEventListener(element: any, type: string, callback: any) {
    if (element.removeEventListener) {
        element.removeEventListener(type, callback);
    } else if (element.detachEvent) {
        element.detachEvent(type, callback);
    }
}

function animationEnd(element: any, callback: any): void {
    element.addEventListener('animationend', callback, false);
    element.addEventListener('webkitAnimationEnd', callback, false);
    element.addEventListener('mozAnimationEnd', callback, false);
    element.addEventListener('OAnimationEnd', callback, false);
}

function setTransform(element: any, animation: string): void {
    element.style.webkitTransform = animation;
    element.style.mozTransform = animation;
    element.style.oTransform = animation;
    element.style.msTransform = animation;
    element.style.transform = animation;
}

function setTransitionDuration(element: any, times: number): void {
    element.style.webkitTransitionDuration = times + 'ms';
    element.style.mozTransitionDuration = times + 'ms';
    element.style.oTransitionDuration = times + 'ms';
    element.style.transitionDuration = times + 'ms';
}

function transitionStart(element: any, callback: any): void {
    element.addEventListener('transitionstart', callback, false);
    element.addEventListener('webkitTransitionStart', callback, false);
    element.addEventListener('mozTransitionStart', callback, false);
    element.addEventListener('oTransitionStart', callback, false);
}

function transitionEnd(element: any, callback: any): void {
    element.addEventListener('transitionend', callback, false);
    element.addEventListener('webkitTransitionEnd', callback, false);
    element.addEventListener('mozTransitionEnd', callback, false);
    element.addEventListener('oTransitionEnd', callback, false);
}

function deleteTransitionEnd(element: any, callback: any): void {
    element.removeEventListener('transitionend', callback, false);
    element.removeEventListener('webkitTransitionEnd', callback, false);
    element.removeEventListener('mozTransitionEnd', callback, false);
    element.removeEventListener('oTransitionEnd', callback, false);
}

function addClass(elem: any, className: any) {
    const classes = className.split(/\s+/);
    for (const cName of classes) {
        elem.classList.add(cName);
    }
}

function css(elem: any, style: any) {
    for (const s in style) {
        if (style.hasOwnProperty(s)) {
            elem.style[s] = style[s];
        }
    }
}

function hasClass(elem: any, className: string) {
    if (elem.classList) {
        return elem.classList.contains(className);
    } else {
        return new RegExp(`(^| )${className}( |$)`, 'gi').test(elem.className);
    }
}

function removeClass(elem: any, className: string) {
    const classes = className.split(/\s+/);
    let num = 0;
    for (const cName of classes) {
        if (elem.classList) {
            elem.classList.remove(cName);
        } else {
            elem.className = classes.splice(num, 1).join(' ');
        }
        num++;
    }
}

function parents(elem: any) {
    const matched: any = [];
    let target: any = elem;

    while (target && target.nodeType !== 9) {
        if (target.nodeType === 1) {
            matched.push(target);
        }
        target = target.parentNode;
    }
    return matched;
}

function clickOutside(elem: any, source: any, inside?: any, outside?: any) {
    let isIn = false;
    while (elem) {
        if (typeof source === 'string') {
            if (hasClass(elem, source)) {
                isIn = true;
                if (inside) {
                    inside(elem);
                }
            }
        } else if (elem === source) {
            isIn = true;
            if (inside) {
                inside(elem);
            }
        }
        elem = elem.parentNode;
    }
    if (!isIn && outside) {
        outside();
    }
    return isIn;
}

function getScrollParent(node: any) {
    if (!node) {
        return document.documentElement;
    }

    const excludeStaticParent = node.style.position === 'absolute';
    const overflowRegex = /(scroll|auto)/;
    let parent = node;
    let isExited = false;

    while (parent) {
        if (!parent.parentNode) {
            return node.ownerDocument || document.documentElement;
        }

        const style: any = window.getComputedStyle(parent);
        const position = style.position;
        const overflow = style.overflow;
        const overflowX = style['overflow-x'];
        const overflowY = style['overflow-y'];

        if (position === 'static' && excludeStaticParent) {
            parent = parent.parentNode;
            continue;
        }

        if (overflowRegex.test(overflow) || overflowRegex.test(overflowX) || overflowRegex.test(overflowY)) {
            isExited = true;
            break;
        }

        parent = parent.parentNode;
    }

    if (isExited) {
        return parent;
    }

    return node.ownerDocument || node.documentElement || document.documentElement;
}

function on(elem: any, type: string, callback: any, capture: boolean = false) {
    if (elem.addEventListener) {
        elem.addEventListener(type, callback, capture);
    } else if (elem.attachEvent) {
        elem.attachEvent(type, callback);
    }
}

function off(elem: any, type: string, callback: any) {
    if (elem.removeEventListener) {
        elem.removeEventListener(type, callback);
    } else if (elem.detachEvent) {
        elem.detachEvent(type, callback);
    }
}

function listen(elem: any, type: string, callback: any) {
    on(elem, type, callback);

    return () => {
        off(elem, type, callback);
    };
}

export {
    on,
    off,
    listen,
    addClass,
    addEventListener,
    clickOutside,
    css,
    hasClass,
    removeClass,
    getScrollParent,
    removeEventListener,
    animationEnd,
    setTransform,
    setTransitionDuration,
    transitionStart,
    transitionEnd,
    deleteTransitionEnd,
    parents,
};
