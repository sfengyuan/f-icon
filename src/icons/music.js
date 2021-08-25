const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-music"}},[["path",{"attrs":{"d":"M9 18V5l12-2v13"}},[]],["circle",{"attrs":{"cx":"6","cy":"18","r":"3"}},[]],["circle",{"attrs":{"cx":"18","cy":"16","r":"3"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-music', {
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