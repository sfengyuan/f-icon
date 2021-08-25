const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-maximize-2"}},[["polyline",{"attrs":{"points":"15 3 21 3 21 9"}},[]],["polyline",{"attrs":{"points":"9 21 3 21 3 15"}},[]],["line",{"attrs":{"x1":"21","y1":"3","x2":"14","y2":"10"}},[]],["line",{"attrs":{"x1":"3","y1":"21","x2":"10","y2":"14"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-maximize-2', {
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