Object.defineProperty(exports, "__esModule", { value: true });
function pre(fun, time, options) {
    fun().then(() => {
        post(fun, time, options);
    }).catch((err) => {
        post(fun, time, options);
    });
}
exports.pre = pre;
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
exports.post = post;
function preSync(fun, time, options) {
    fun();
    postSync(fun, time, options);
}
exports.preSync = preSync;
function postSync(fun, time, options) {
    function repeater() {
        setTimeout(() => {
            fun();
            repeater();
        }, time);
    }
    repeater();
}
exports.postSync = postSync;
//# sourceMappingURL=index.js.map