const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-log-out"}},[["path",{"attrs":{"d":"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}},[]],["polyline",{"attrs":{"points":"16 17 21 12 16 7"}},[]],["line",{"attrs":{"x1":"21","y1":"12","x2":"9","y2":"12"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-log-out', {
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