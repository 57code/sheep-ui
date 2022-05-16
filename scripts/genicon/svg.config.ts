import type { OptimizeOptions } from 'svgo'

const svgOptions: OptimizeOptions = {
  plugins: [
    {
      // 默认一系列插件，
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false // 不移除 viewBox 属性，默认移除viewBox ，有height 和width属性
        }
      }
    },
    'removeStyleElement',
    'removeScriptElement',
    'removeDimensions', // remove height width
    {
      name: 'removeAttrs',
      params: {
        attrs:
          // '(class | style | stroke\-width | stroke-linecap | stroke-linejoin)'
          [
            'class',
            'style',
            'stroke-width',
            'stroke-linecap',
            'stroke-linejoin'
          ]
      }
    },
    {
      name: 'addAttributesToSVGElement',
      // @ts-ignore
      params: {
        attributes: [
          'class={classes} stroke-width={strokeWidth} style={sizeStyle} stroke-linecap={strokeLinecap} stroke-linejoin={strokeLinejoin}'
          // { 'stroke-width': '{strokeWidth}' },
          // { 'stroke-linecap': '{strokeLinecap}' },
          // { 'stroke-linejoin': '{strokeLinejoin}' }
        ]
      }
    }
  ]
}

export default svgOptions
