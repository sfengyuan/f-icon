const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-arrow-left-circle"}},[["circle",{"attrs":{"cx":"12","cy":"12","r":"10"}},[]],["polyline",{"attrs":{"points":"12 8 8 12 12 16"}},[]],["line",{"attrs":{"x1":"16","y1":"12","x2":"8","y2":"12"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-arrow-left-circle', {
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