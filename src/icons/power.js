const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-power"}},[["path",{"attrs":{"d":"M18.36 6.64a9 9 0 1 1-12.73 0"}},[]],["line",{"attrs":{"x1":"12","y1":"2","x2":"12","y2":"12"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-power', {
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