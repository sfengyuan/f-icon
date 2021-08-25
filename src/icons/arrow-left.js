const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-arrow-left"}},[["line",{"attrs":{"x1":"19","y1":"12","x2":"5","y2":"12"}},[]],["polyline",{"attrs":{"points":"12 19 5 12 12 5"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-arrow-left', {
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