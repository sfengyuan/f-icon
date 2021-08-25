const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-pie-chart"}},[["path",{"attrs":{"d":"M21.21 15.89A10 10 0 1 1 8 2.83"}},[]],["path",{"attrs":{"d":"M22 12A10 10 0 0 0 12 2v10z"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-pie-chart', {
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