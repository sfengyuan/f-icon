const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-at-sign"}},[["circle",{"attrs":{"cx":"12","cy":"12","r":"4"}},[]],["path",{"attrs":{"d":"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-at-sign', {
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