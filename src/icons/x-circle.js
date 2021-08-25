const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-x-circle"}},[["circle",{"attrs":{"cx":"12","cy":"12","r":"10"}},[]],["line",{"attrs":{"x1":"15","y1":"9","x2":"9","y2":"15"}},[]],["line",{"attrs":{"x1":"9","y1":"9","x2":"15","y2":"15"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-x-circle', {
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