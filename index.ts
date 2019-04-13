import { resolve } from "path";

export function pre(fun: () => Promise<any>, time: number, options?: { onError?: (err: Error) => void, onSuccess?: (result: any) => any }) {
    asyncFunction(fun, options).then(() => {
      post(fun, time, options)
    }).catch(() => {
      post(fun, time, options)
    })
}
export function post(fun: () => Promise<any>, time: number, options?: { onError?: (err: Error) => void, onSuccess?: (result: any) => any }) {
    function repeater() {
      setTimeout(() => {
        asyncFunction(fun, options).then(() => {
          repeater()
        }).catch((err) => {
          repeater()
        })
      }, time)
    }
    repeater()
}

function asyncFunction(fun: () => Promise<any>, options?: { onError?: (err: Error) => void, onSuccess?: (result: any) => any }) {
  return new Promise((resolve, reject) => {
    fun().then((answer) => {
      if (options && options.onSuccess) options.onSuccess(answer)
      resolve(answer)
    }).catch((err) => {
      if (options && options.onError) options.onError(err)
      reject(err)
    })

  })
}

export function preSync(fun: () => void, time: number, options?: { onError?: (err: Error) => void, onSuccess?: (result: any) => any }) {
  syncFunction(fun, options)
  postSync(fun, time, options)
}
export function postSync(fun: () => void, time: number, options?: { onError?: (err: Error) => void, onSuccess?: (result: any) => any }) {
  function repeater() {
    setTimeout(() => {
      syncFunction(fun, options)
      repeater()
    }, time)
  }
  repeater()
}

function syncFunction(fun: () => void, options?: { onError?: (err: Error) => void, onSuccess?: (result: any) => void }) {
  try {
    if (options && options.onError) {
      const fufu = fun()
      options.onSuccess(fufu)
    } else {
      fun()
    }
  } catch (err) {
    if (options && options.onError) {
      options.onError(err)
    } else {
      throw err
    }
  }
}
