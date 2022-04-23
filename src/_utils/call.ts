export type MaybeArray<T> = T | T[]

function call(fun: MaybeArray<() => void>): void
function call<A1>(fun: MaybeArray<(a1: A1) => void>, a1: A1): void
function call<A extends any[]>(
  fun: MaybeArray<(...args: any[]) => any>,
  ...args: A
): void {
  if (Array.isArray(fun)) {
    fun.forEach(item => (call as any)(item, ...args))
  } else {
    fun(...args)
  }
}

export { call }
