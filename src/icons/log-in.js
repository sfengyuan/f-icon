const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-log-in"}},[["path",{"attrs":{"d":"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}},[]],["polyline",{"attrs":{"points":"10 17 15 12 10 7"}},[]],["line",{"attrs":{"x1":"15","y1":"12","x2":"3","y2":"12"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-log-in', {
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