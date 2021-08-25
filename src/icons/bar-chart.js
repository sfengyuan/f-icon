const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-bar-chart"}},[["line",{"attrs":{"x1":"12","y1":"20","x2":"12","y2":"10"}},[]],["line",{"attrs":{"x1":"18","y1":"20","x2":"18","y2":"4"}},[]],["line",{"attrs":{"x1":"6","y1":"20","x2":"6","y2":"16"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-bar-chart', {
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