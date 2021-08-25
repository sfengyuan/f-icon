const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-help-circle"}},[["circle",{"attrs":{"cx":"12","cy":"12","r":"10"}},[]],["path",{"attrs":{"d":"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}},[]],["line",{"attrs":{"x1":"12","y1":"17","x2":"12.01","y2":"17"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-help-circle', {
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