const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-crosshair"}},[["circle",{"attrs":{"cx":"12","cy":"12","r":"10"}},[]],["line",{"attrs":{"x1":"22","y1":"12","x2":"18","y2":"12"}},[]],["line",{"attrs":{"x1":"6","y1":"12","x2":"2","y2":"12"}},[]],["line",{"attrs":{"x1":"12","y1":"6","x2":"12","y2":"2"}},[]],["line",{"attrs":{"x1":"12","y1":"22","x2":"12","y2":"18"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-crosshair', {
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