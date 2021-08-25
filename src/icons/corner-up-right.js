const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-corner-up-right"}},[["polyline",{"attrs":{"points":"15 14 20 9 15 4"}},[]],["path",{"attrs":{"d":"M4 20v-7a4 4 0 0 1 4-4h12"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-corner-up-right', {
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