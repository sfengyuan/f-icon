const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-delete"}},[["path",{"attrs":{"d":"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"}},[]],["line",{"attrs":{"x1":"18","y1":"9","x2":"12","y2":"15"}},[]],["line",{"attrs":{"x1":"12","y1":"9","x2":"18","y2":"15"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-delete', {
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