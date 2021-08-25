const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-trending-up"}},[["polyline",{"attrs":{"points":"23 6 13.5 15.5 8.5 10.5 1 18"}},[]],["polyline",{"attrs":{"points":"17 6 23 6 23 12"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-trending-up', {
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