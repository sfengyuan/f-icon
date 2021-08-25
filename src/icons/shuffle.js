const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-shuffle"}},[["polyline",{"attrs":{"points":"16 3 21 3 21 8"}},[]],["line",{"attrs":{"x1":"4","y1":"20","x2":"21","y2":"3"}},[]],["polyline",{"attrs":{"points":"21 16 21 21 16 21"}},[]],["line",{"attrs":{"x1":"15","y1":"15","x2":"21","y2":"21"}},[]],["line",{"attrs":{"x1":"4","y1":"4","x2":"9","y2":"9"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-shuffle', {
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