const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-anchor"}},[["circle",{"attrs":{"cx":"12","cy":"5","r":"3"}},[]],["line",{"attrs":{"x1":"12","y1":"22","x2":"12","y2":"8"}},[]],["path",{"attrs":{"d":"M5 12H2a10 10 0 0 0 20 0h-3"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-anchor', {
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