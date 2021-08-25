const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-x-square"}},[["rect",{"attrs":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}},[]],["line",{"attrs":{"x1":"9","y1":"9","x2":"15","y2":"15"}},[]],["line",{"attrs":{"x1":"15","y1":"9","x2":"9","y2":"15"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-x-square', {
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