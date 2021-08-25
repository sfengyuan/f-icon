const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-chevrons-up"}},[["polyline",{"attrs":{"points":"17 11 12 6 7 11"}},[]],["polyline",{"attrs":{"points":"17 18 12 13 7 18"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-chevrons-up', {
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