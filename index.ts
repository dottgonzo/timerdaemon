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
export function preSync(fun: () => void, time: number, options?: {}) {
  fun()
  postSync(fun, time, options)
}
export function postSync(fun: () => void, time: number, options?: {}) {
  function repeater() {
    setTimeout(() => {
      fun()
      repeater()
    }, time)
  }
  repeater()
}
