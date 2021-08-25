const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-type"}},[["polyline",{"attrs":{"points":"4 7 4 4 20 4 20 7"}},[]],["line",{"attrs":{"x1":"9","y1":"20","x2":"15","y2":"20"}},[]],["line",{"attrs":{"x1":"12","y1":"4","x2":"12","y2":"20"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-type', {
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