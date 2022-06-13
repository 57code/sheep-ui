const opt = Object.prototype.toString

export function isArray(obj: any): obj is any[] {
  return opt.call(obj) === '[object Array]'
}

export function isNumber(obj: any): obj is number {
  return opt.call(obj) === '[object Number]' && obj === obj // eslint-disable-line
}

export function isFunction(obj: any): obj is (...args: any[]) => any {
  return opt.call(obj) === '[object Function]'
}

export function isString(obj: any): obj is string {
  return typeof obj === 'string'
}
