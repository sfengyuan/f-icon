const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-minimize-2"}},[["polyline",{"attrs":{"points":"4 14 10 14 10 20"}},[]],["polyline",{"attrs":{"points":"20 10 14 10 14 4"}},[]],["line",{"attrs":{"x1":"14","y1":"10","x2":"21","y2":"3"}},[]],["line",{"attrs":{"x1":"3","y1":"21","x2":"10","y2":"14"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-minimize-2', {
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