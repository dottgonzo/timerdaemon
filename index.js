var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function pre(fun, time, options) {
    return __awaiter(this, void 0, void 0, function* () {
        yield asyncFunction(fun, options);
        yield post(fun, time, options);
    });
}
exports.pre = pre;
function post(fun, time, options) {
    return __awaiter(this, void 0, void 0, function* () {
        function repeater() {
            return __awaiter(this, void 0, void 0, function* () {
                yield setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                    yield asyncFunction(fun, options);
                    yield repeater();
                }), time);
            });
        }
        yield repeater();
    });
}
exports.post = post;
function asyncFunction(fun, options) {
    return __awaiter(this, void 0, void 0, function* () {
        fun().then((result) => {
            if (options && options.onSuccess)
                return options.onSuccess(result);
            return true;
        }).catch((err) => {
            if (options && options.onError)
                return options.onError(err);
            return false;
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