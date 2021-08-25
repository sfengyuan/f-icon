const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-arrow-down"}},[["line",{"attrs":{"x1":"12","y1":"5","x2":"12","y2":"19"}},[]],["polyline",{"attrs":{"points":"19 12 12 19 5 12"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-arrow-down', {
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