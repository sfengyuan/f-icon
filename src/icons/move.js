const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-move"}},[["polyline",{"attrs":{"points":"5 9 2 12 5 15"}},[]],["polyline",{"attrs":{"points":"9 5 12 2 15 5"}},[]],["polyline",{"attrs":{"points":"15 19 12 22 9 19"}},[]],["polyline",{"attrs":{"points":"19 9 22 12 19 15"}},[]],["line",{"attrs":{"x1":"2","y1":"12","x2":"22","y2":"12"}},[]],["line",{"attrs":{"x1":"12","y1":"2","x2":"12","y2":"22"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-move', {
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