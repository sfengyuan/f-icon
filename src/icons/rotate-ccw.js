const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-rotate-ccw"}},[["polyline",{"attrs":{"points":"1 4 1 10 7 10"}},[]],["path",{"attrs":{"d":"M3.51 15a9 9 0 1 0 2.13-9.36L1 10"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-rotate-ccw', {
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