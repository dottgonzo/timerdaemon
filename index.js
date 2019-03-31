function pre(fun, time, options) {
    fun().then(() => {
        post(fun, time, options);
    }).catch((err) => {
        post(fun, time, options);
    });
}
function post(fun, time, options) {
    function repeater() {
        setTimeout(() => {
            fun().then(() => {
                repeater();
            }).catch((err) => {
                repeater();
            });
        }, time);
    }
    repeater();
}
function pre(fun, time, options) {
    fun().then(() => {
        post(fun, time, options);
    }).catch((err) => {
        post(fun, time, options);
    });
}
function pre(fun, time, options) {
    fun().then(() => {
        post(fun, time, options);
    }).catch((err) => {
        post(fun, time, options);
    });
}
let timerdaemon = {
    pre: function (time, callback) {
        callback();
        setTimeout(function () {
            timerdaemon.pre(time, callback);
        }, time);
    },
    post: function (time, callback) {
        setTimeout(function () {
            callback();
            timerdaemon.post(time, callback);
        }, time);
    }
};
module.exports = timerdaemon;
//# sourceMappingURL=index.js.map