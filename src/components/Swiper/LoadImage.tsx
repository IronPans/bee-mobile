function loadImage(imgElement: any, src: string, srcset: any, checkForComplete: boolean, callback: () => void) {
    let image;
    const onReady = () => {
        if (callback) {
            callback();
        }
    };
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

function preloadImages(container: any, imagesLoaded: number, callback: () => void, onLoad?: (loaded: any) => void) {
    const imagesToLoad = container.find('img');
    function _onReady() {
        if (imagesLoaded !== undefined) {
            imagesLoaded++;
            if (onLoad) {
                onLoad(imagesLoaded);
            }
        }
        if (imagesLoaded === imagesToLoad.length) {
           callback();
        }
    }
    let i = 0;
    for (const image of imagesToLoad) {
        loadImage(image, (image.currentSrc || image.getAttribute('src')),
            (image.srcset || image.getAttribute('srcset')), true, _onReady);
        i++;
    }
}

export {loadImage, preloadImages};
