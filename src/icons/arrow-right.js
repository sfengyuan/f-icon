const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-arrow-right"}},[["line",{"attrs":{"x1":"5","y1":"12","x2":"19","y2":"12"}},[]],["polyline",{"attrs":{"points":"12 5 19 12 12 19"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-arrow-right', {
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