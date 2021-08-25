const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-arrow-down-right"}},[["line",{"attrs":{"x1":"7","y1":"7","x2":"17","y2":"17"}},[]],["polyline",{"attrs":{"points":"17 7 17 17 7 17"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-arrow-down-right', {
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