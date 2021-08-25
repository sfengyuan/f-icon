const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-archive"}},[["polyline",{"attrs":{"points":"21 8 21 21 3 21 3 8"}},[]],["rect",{"attrs":{"x":"1","y":"3","width":"22","height":"5"}},[]],["line",{"attrs":{"x1":"10","y1":"12","x2":"14","y2":"12"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-archive', {
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