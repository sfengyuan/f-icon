const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-rotate-cw"}},[["polyline",{"attrs":{"points":"23 4 23 10 17 10"}},[]],["path",{"attrs":{"d":"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-rotate-cw', {
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