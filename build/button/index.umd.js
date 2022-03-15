;(function (e, t) {
  typeof exports == 'object' && typeof module != 'undefined'
    ? t(exports, require('vue'))
    : typeof define == 'function' && define.amd
    ? define(['exports', 'vue'], t)
    : ((e = typeof globalThis != 'undefined' ? globalThis : e || self),
      t((e.index = {}), e.Vue))
})(this, function (e, t) {
  'use strict'
  const d = {
    type: { type: String, default: 'secondary' },
    size: { type: String, default: 'medium' },
    disabled: { type: Boolean, default: !1 },
    block: { type: Boolean, default: !1 }
  }
  var n = t.defineComponent({
      name: 'SButton',
      props: d,
      setup(o, { slots: u }) {
        const { type: s, size: a, disabled: i, block: f } = t.toRefs(o)
        return () => {
          const p = u.default ? u.default() : '\u6309\u94AE',
            r = f.value ? 's-btn--block' : ''
          return t.createVNode(
            'button',
            {
              disabled: i.value,
              class: `s-btn s-btn--${s.value} s-btn--${a.value} ${r}`
            },
            [p]
          )
        }
      }
    }),
    l = {
      install(o) {
        o.component(n.name, n)
      }
    }
  ;(e.Button = n),
    (e.default = l),
    Object.defineProperties(e, {
      __esModule: { value: !0 },
      [Symbol.toStringTag]: { value: 'Module' }
    })
})
