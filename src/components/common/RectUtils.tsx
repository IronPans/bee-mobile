function getOuterWidth(el: any, margin?: boolean) {
    let width = el.offsetWidth;

    if (margin) {
        const style = getComputedStyle(el);
        width += parseFloat(style.marginLeft!) + parseFloat(style.marginRight!);
    }

    return width;
}

function innerWidth(el: any) {
    let width = el.offsetWidth;
    const style = getComputedStyle(el);

    width += parseFloat(style.paddingLeft!) + parseFloat(style.paddingRight!);
    return width;
}

function width(el: any) {
    let width = el.offsetWidth;
    const style = getComputedStyle(el);

    width -= parseFloat(style.paddingLeft!) + parseFloat(style.paddingRight!);
    return width;
}

function getInnerHeight(el: any) {
    let height = el.offsetHeight;
    const style = getComputedStyle(el);

    height += parseFloat(style.paddingTop!) + parseFloat(style.paddingBottom!);
    return height;
}

function getOuterHeight(el: any, margin?: boolean) {
    let height = el.offsetHeight;

    if (margin) {
        const style = getComputedStyle(el);
        height += parseFloat(style.marginTop!) + parseFloat(style.marginBottom!);
    }

    return height;
}

function getHeight(el: any) {
    let height = el.offsetHeight;
    const style = getComputedStyle(el);
    height -= parseFloat(style.paddingTop!) + parseFloat(style.paddingBottom!)
        + parseFloat(style.borderTopWidth!) + parseFloat(style.borderBottomWidth!);

    return height;
}

function getWidth(el: any): number {
    let width = el.offsetWidth;
    const style = getComputedStyle(el);
    width -= parseFloat(style.paddingLeft!) + parseFloat(style.paddingRight!)
        + parseFloat(style.borderLeftWidth!) + parseFloat(style.borderRightWidth!);

    return width;
}

function scrollInView(container: any, item: any) {
    const borderTopValue: string = getComputedStyle(container).getPropertyValue('borderTopWidth');
    const borderTop: number = borderTopValue ? parseFloat(borderTopValue) : 0;
    const paddingTopValue: string = getComputedStyle(container).getPropertyValue('paddingTop');
    const paddingTop: number = paddingTopValue ? parseFloat(paddingTopValue) : 0;
    const containerRect = container.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const offset = (itemRect.top + document.body.scrollTop) -
        (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
    const scroll = container.scrollTop;
    const elementHeight = container.clientHeight;
    const itemHeight = this.getOuterHeight(item);

    if (offset < 0) {
        container.scrollTop = scroll + offset;
    } else if ((offset + itemHeight) > elementHeight) {
        container.scrollTop = scroll + offset - elementHeight + itemHeight;
    }
}

function getElementLeft(element: any) {
    let actualLeft = element.offsetLeft;
    let current = element.offsetParent;
    while (current !== null) {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    return actualLeft;
}

function getElementTop(element: any) {
    let actualTop = element.offsetTop;
    let current = element.offsetParent;
    while (current !== null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    return actualTop;
}

export {getHeight, getInnerHeight, getOuterWidth, getOuterHeight,
    getWidth, innerWidth, scrollInView, width, getElementLeft, getElementTop}