const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-skip-forward"}},[["polygon",{"attrs":{"points":"5 4 15 12 5 20 5 4"}},[]],["line",{"attrs":{"x1":"19","y1":"5","x2":"19","y2":"19"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-skip-forward', {
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