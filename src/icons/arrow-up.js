const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-arrow-up"}},[["line",{"attrs":{"x1":"12","y1":"19","x2":"12","y2":"5"}},[]],["polyline",{"attrs":{"points":"5 12 12 5 19 12"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-arrow-up', {
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