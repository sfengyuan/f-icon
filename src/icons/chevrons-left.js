const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-chevrons-left"}},[["polyline",{"attrs":{"points":"11 17 6 12 11 7"}},[]],["polyline",{"attrs":{"points":"18 17 13 12 18 7"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-chevrons-left', {
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