function loadImage(imgElement: any, src: string, srcset: any, checkForComplete: boolean, callback: Function) {
    let image;
    function onReady () {
        if (callback) callback();
    }
    if (!imgElement.complete || !checkForComplete) {
        if (src) {
            image = new Image();
            image.onload = onReady;
            image.onerror = onReady;
            if (srcset) {
                image.srcset = srcset;
            }
            if (src) {
                image.src = src;
            }
        } else {
            onReady();
        }

    } else {
        onReady();
    }
}

function preloadImages(container: any, imagesLoaded: number, callback: Function, onLoad?: Function) {
    const imagesToLoad = container.find('img');
    function _onReady() {
        if (imagesLoaded !== undefined) {
            imagesLoaded++;
            if (onLoad) {
                onLoad(imagesLoaded);
            }
        };
        if (imagesLoaded === imagesToLoad.length) {
           callback();
        }
    }
    for (let i = 0; i < imagesToLoad.length; i++) {
        loadImage(imagesToLoad[i], (imagesToLoad[i].currentSrc || imagesToLoad[i].getAttribute('src')),
            (imagesToLoad[i].srcset || imagesToLoad[i].getAttribute('srcset')), true, _onReady);
    }
}

export {loadImage, preloadImages}