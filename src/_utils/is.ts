const opt = Object.prototype.toString

export function isArray(obj: any): obj is any[] {
  return opt.call(obj) === '[object Array]'
}

export function isNumber(obj: any): obj is number {
  return opt.call(obj) === '[object Number]' && obj === obj // eslint-disable-line
}
