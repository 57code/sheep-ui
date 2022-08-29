import { isString, isNumber } from './is'
const SCOPE = '_utils/style'
export function addUnit(value?: string | number, defaultUnit = 'px') {
  if (!value) return ''
  if (isString(value)) {
    return value
  } else if (isNumber(value)) {
    return `${value}${defaultUnit}`
  }
  console.warn(SCOPE, 'binding value must be a string or number')
}
