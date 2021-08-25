const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-terminal"}},[["polyline",{"attrs":{"points":"4 17 10 11 4 5"}},[]],["line",{"attrs":{"x1":"12","y1":"19","x2":"20","y2":"19"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-terminal', {
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