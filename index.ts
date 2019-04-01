export async function pre(fun: () => Promise<void>, time: number, options?: { onError?: (err: Error) => void, onSuccess?: (result: any) => void }) {
  await asyncFunction(fun, options)
  await post(fun, time, options)
}
export async function post(fun: () => Promise<void>, time: number, options?: { onError?: (err: Error) => void, onSuccess?: (result: any) => any }) {
  async function repeater() {
    setTimeout(async () => {
      await asyncFunction(fun, options)
      await repeater()
    }, time)
  }
  await repeater()
}

async function asyncFunction(fun: () => Promise<void>, options?: { onError?: (err: Error) => void, onSuccess?: (result: any) => void }) {

  fun().then((result) => {
    if (options && options.onSuccess) return options.onSuccess(result)
    return true
  }).catch((err) => {
    if (options && options.onError) return options.onError(err)
    return false
  })

}

export function preSync(fun: () => void, time: number, options?: { onError?: (err: Error) => void, onSuccess?: (result: any) => void }) {
  syncFunction(fun, options)
  postSync(fun, time, options)
}
export function postSync(fun: () => void, time: number, options?: { onError?: (err: Error) => void, onSuccess?: (result: any) => void }) {
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
