const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-skip-back"}},[["polygon",{"attrs":{"points":"19 20 9 12 19 4 19 20"}},[]],["line",{"attrs":{"x1":"5","y1":"19","x2":"5","y2":"5"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-skip-back', {
        render (h) {
          const r = ast => {
            const [tag, attrs, children] = ast
            return h(tag, attrs, children ? children.map(r) : [])
          }
          return r(ast)
        }
      })
    }
  }