export function pre(fun: () => Promise<any>, time: number, options?: {}) {
  fun().then(() => {
    post(fun, time, options);
  }).catch((err) => {
    post(fun, time, options);
  })
}
export function post(fun: () => Promise<any>, time: number, options?: {}) {
  function repeater() {
    setTimeout(() => {
      fun().then(() => {
        repeater()
      }).catch((err) => {
        repeater()
      })
    }, time)
  }
  repeater()
}
export function pre(fun: () => Promise<any>, time: number, options?: {}) {
  fun().then(() => {
    post(fun, time, options);
  }).catch((err) => {
    post(fun, time, options);
  })
}
export function pre(fun: () => Promise<any>, time: number, options?: {}) {
  fun().then(() => {
    post(fun, time, options);
  }).catch((err) => {
    post(fun, time, options);
  })
}

let timerdaemon = {
  pre: function (time: number, callback: Function) {
    callback();
    setTimeout(function () {
      timerdaemon.pre(time, callback);
    }, time);
  },
  post: function (time: number, callback: Function) {
    setTimeout(function () {
      callback();
      timerdaemon.post(time, callback);
    }, time);
  }
};
export =timerdaemon
