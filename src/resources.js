
class Resourcer {
    constructor(options) {
        // super(props)
        this.resourceCache = {};
        this.loading = [];
        this.readyCallbacks = [];
        this.xload = this.xload.bind(this);
    }

    xload(url) {
        if(this.resourceCache[url]) {
            return this.resourceCache[url];
        }
        else {
            var img = new Image();
            img.onload = () => {
                this.resourceCache[url] = img;
                if(this.isReady()) {
                    this.readyCallbacks.forEach((func) => {
                        func(); 
                    });
                }
            };
            this.resourceCache[url] = false;
            img.src = url;
        }
    }

    testo() {
        this.testo2();
    }

    testo2() {
        // console.log('gret')
    }

    load(urlOrArr) {
        if(urlOrArr instanceof Array) {
            urlOrArr.forEach((url) => {
                this.xload(url);
            });
        }
        else {
            this.xload(urlOrArr);
        }
    }

    get(url) {
        return this.resourceCache[url];
    }

    isReady() {
        var ready = true;
        for(var k in this.resourceCache) {
            if(this.resourceCache.hasOwnProperty(k) &&
               !this.resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }

    onReady(func) {
        this.readyCallbacks.push(func);
    }
}

// module.exports = Resourcer


// (function() {
//     var resourceCache = {};
//     var loading = [];
//     var readyCallbacks = [];

//     // Load an image url or an array of image urls
//     function load(urlOrArr) {
//         if(urlOrArr instanceof Array) {
//             urlOrArr.forEach(function(url) {
//                 _load(url);
//             });
//         }
//         else {
//             _load(urlOrArr);
//         }
//     }

//     function _load(url) {
//         if(resourceCache[url]) {
//             return resourceCache[url];
//         }
//         else {
//             var img = new Image();
//             img.onload = function() {
//                 resourceCache[url] = img;
                
//                 if(isReady()) {
//                     readyCallbacks.forEach(function(func) { func(); });
//                 }
//             };
//             resourceCache[url] = false;
//             img.src = url;
//         }
//     }

//     function get(url) {
//         return resourceCache[url];
//     }

//     function isReady() {
//         var ready = true;
//         for(var k in resourceCache) {
//             if(resourceCache.hasOwnProperty(k) &&
//                !resourceCache[k]) {
//                 ready = false;
//             }
//         }
//         return ready;
//     }

//     function onReady(func) {
//         readyCallbacks.push(func);
//     }

//     window.resources = { 
//         load: load,
//         get: get,
//         onReady: onReady,
//         isReady: isReady
//     };
// })();

// module.exports = load;
