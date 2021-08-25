const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-corner-right-down"}},[["polyline",{"attrs":{"points":"10 15 15 20 20 15"}},[]],["path",{"attrs":{"d":"M4 4h7a4 4 0 0 1 4 4v12"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-corner-right-down', {
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