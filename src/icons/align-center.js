const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-align-center"}},[["line",{"attrs":{"x1":"18","y1":"10","x2":"6","y2":"10"}},[]],["line",{"attrs":{"x1":"21","y1":"6","x2":"3","y2":"6"}},[]],["line",{"attrs":{"x1":"21","y1":"14","x2":"3","y2":"14"}},[]],["line",{"attrs":{"x1":"18","y1":"18","x2":"6","y2":"18"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-align-center', {
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