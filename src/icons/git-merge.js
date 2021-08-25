const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-git-merge"}},[["circle",{"attrs":{"cx":"18","cy":"18","r":"3"}},[]],["circle",{"attrs":{"cx":"6","cy":"6","r":"3"}},[]],["path",{"attrs":{"d":"M6 21V9a9 9 0 0 0 9 9"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-git-merge', {
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