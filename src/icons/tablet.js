const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-tablet"}},[["rect",{"attrs":{"x":"4","y":"2","width":"16","height":"20","rx":"2","ry":"2"}},[]],["line",{"attrs":{"x1":"12","y1":"18","x2":"12.01","y2":"18"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-tablet', {
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