const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-x"}},[["line",{"attrs":{"x1":"18","y1":"6","x2":"6","y2":"18"}},[]],["line",{"attrs":{"x1":"6","y1":"6","x2":"18","y2":"18"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-x', {
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