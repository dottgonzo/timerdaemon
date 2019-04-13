Object.defineProperty(exports, "__esModule", { value: true });
function pre(fun, time, options) {
    asyncFunction(fun, options).then(() => {
        post(fun, time, options);
    }).catch(() => {
        post(fun, time, options);
    });
}
exports.pre = pre;
function post(fun, time, options) {
    function repeater() {
        setTimeout(() => {
            asyncFunction(fun, options).then(() => {
                repeater();
            }).catch((err) => {
                repeater();
            });
        }, time);
    }
    repeater();
}
exports.post = post;
function asyncFunction(fun, options) {
    return new Promise((resolve, reject) => {
        fun().then((answer) => {
            if (options && options.onSuccess)
                options.onSuccess(answer);
            resolve(answer);
        }).catch((err) => {
            if (options && options.onError)
                options.onError(err);
            reject(err);
        });
    });
}
function preSync(fun, time, options) {
    syncFunction(fun, options);
    postSync(fun, time, options);
}
exports.preSync = preSync;
function postSync(fun, time, options) {
    function repeater() {
        setTimeout(() => {
            syncFunction(fun, options);
            repeater();
        }, time);
    }
    repeater();
}
exports.postSync = postSync;
function syncFunction(fun, options) {
    try {
        if (options && options.onError) {
            const fufu = fun();
            options.onSuccess(fufu);
        }
        else {
            fun();
        }
    }
    catch (err) {
        if (options && options.onError) {
            options.onError(err);
        }
        else {
            throw err;
        }
    }
}
//# sourceMappingURL=index.js.map