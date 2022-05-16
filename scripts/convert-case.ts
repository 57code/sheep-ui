/**
 *
 * @param string eg ArrowDown
 * @returns Arrow-down
 */
export const toKebabCase = (string: string): string =>
  string.replace(/[A-Z]+/g, (match, offset) => {
    return `${offset > 0 ? '-' : ''}${match.toLowerCase()}`
  })

/**
 *
 * @param string  eg. arrow-down
 * @description
 * @returns  ArrowDown
 */
export const toPascalCase = (string: string): string =>
  string
    .replace(/^./g, match => match.toUpperCase())
    .replace(/-(.)/g, (match, p1) => {
      return p1.toUpperCase()
    })
