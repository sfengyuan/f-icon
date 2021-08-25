const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-calendar"}},[["rect",{"attrs":{"x":"3","y":"4","width":"18","height":"18","rx":"2","ry":"2"}},[]],["line",{"attrs":{"x1":"16","y1":"2","x2":"16","y2":"6"}},[]],["line",{"attrs":{"x1":"8","y1":"2","x2":"8","y2":"6"}},[]],["line",{"attrs":{"x1":"3","y1":"10","x2":"21","y2":"10"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-calendar', {
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