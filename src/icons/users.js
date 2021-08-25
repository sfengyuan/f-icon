const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-users"}},[["path",{"attrs":{"d":"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},[]],["circle",{"attrs":{"cx":"9","cy":"7","r":"4"}},[]],["path",{"attrs":{"d":"M23 21v-2a4 4 0 0 0-3-3.87"}},[]],["path",{"attrs":{"d":"M16 3.13a4 4 0 0 1 0 7.75"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-users', {
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