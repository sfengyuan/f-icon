const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-zoom-in"}},[["circle",{"attrs":{"cx":"11","cy":"11","r":"8"}},[]],["line",{"attrs":{"x1":"21","y1":"21","x2":"16.65","y2":"16.65"}},[]],["line",{"attrs":{"x1":"11","y1":"8","x2":"11","y2":"14"}},[]],["line",{"attrs":{"x1":"8","y1":"11","x2":"14","y2":"11"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-zoom-in', {
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