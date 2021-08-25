const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-plus"}},[["line",{"attrs":{"x1":"12","y1":"5","x2":"12","y2":"19"}},[]],["line",{"attrs":{"x1":"5","y1":"12","x2":"19","y2":"12"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-plus', {
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