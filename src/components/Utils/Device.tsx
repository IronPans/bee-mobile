const Device = (() => {
    const ua = window.navigator.userAgent;

    const device: any = {
        ios: false,
        android: false,
        androidChrome: false,
        desktop: false,
        windows: false,
        iphone: false,
        iphoneX: false,
        ipod: false,
        ipad: false,
        statusbar: '',
    };

    const windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    const ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const iphoneX = iphone && window.screen.width === 375 && window.screen.height === 812;

    // Windows
    if (windows) {
        device.os = 'windows';
        device.osVersion = windows[2];
        device.windows = true;
    }
    // Android
    if (android && !windows) {
        device.os = 'android';
        device.osVersion = android[2];
        device.android = true;
        device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
    }
    if (ipad || iphone || ipod) {
        device.os = 'ios';
        device.ios = true;
    }
    // iOS
    if (iphone && !ipod) {
        device.osVersion = iphone[2].replace(/_/g, '.');
        device.iphone = true;
        device.iphoneX = iphoneX;
    }
    if (ipad) {
        device.osVersion = ipad[2].replace(/_/g, '.');
        device.ipad = true;
    }
    if (ipod) {
        device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
        device.iphone = true;
    }
    // iOS 8+ changed UA
    if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
        if (device.osVersion.split('.')[0] === '10') {
            device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
        }
    }

    // Webview
    device.webView = (iphone || ipad || ipod) &&
        (ua.match(/.*AppleWebKit(?!.*Safari)/i) || (window.navigator as any).standalone);
    device.webview = device.webView;

    // Desktop
    device.desktop = !(device.os || device.android || device.webView);

    // Minimal UI
    if (device.os && device.os === 'ios') {
        const osVersionArr: any = device.osVersion.split('.');
        const metaViewport: any = document.querySelector('meta[name="viewport"]');
        device.minimalUi =
            !device.webView &&
            (ipod || iphone) &&
            (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7) &&
            metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
    }

    // Check for status bar and fullscreen app mode
    device.needsStatusbarOverlay = () => {
        if (device.webView &&
            (window.innerWidth * window.innerHeight === window.screen.width * window.screen.height)) {
            return !(device.iphoneX && (window.orientation === 90 || window.orientation === -90));
        }
        return false;
    };
    device.statusbar = device.needsStatusbarOverlay();

    // Pixel Ratio
    device.pixelRatio = window.devicePixelRatio || 1;

    // Export object
    return device;
})();
