const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-truck"}},[["rect",{"attrs":{"x":"1","y":"3","width":"15","height":"13"}},[]],["polygon",{"attrs":{"points":"16 8 20 8 23 11 23 16 16 16 16 8"}},[]],["circle",{"attrs":{"cx":"5.5","cy":"18.5","r":"2.5"}},[]],["circle",{"attrs":{"cx":"18.5","cy":"18.5","r":"2.5"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-truck', {
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