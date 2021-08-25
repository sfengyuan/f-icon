const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-user-plus"}},[["path",{"attrs":{"d":"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},[]],["circle",{"attrs":{"cx":"8.5","cy":"7","r":"4"}},[]],["line",{"attrs":{"x1":"20","y1":"8","x2":"20","y2":"14"}},[]],["line",{"attrs":{"x1":"23","y1":"11","x2":"17","y2":"11"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-user-plus', {
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