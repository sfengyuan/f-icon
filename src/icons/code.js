const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-code"}},[["polyline",{"attrs":{"points":"16 18 22 12 16 6"}},[]],["polyline",{"attrs":{"points":"8 6 2 12 8 18"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-code', {
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