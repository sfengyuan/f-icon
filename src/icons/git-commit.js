const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-git-commit"}},[["circle",{"attrs":{"cx":"12","cy":"12","r":"4"}},[]],["line",{"attrs":{"x1":"1.05","y1":"12","x2":"7","y2":"12"}},[]],["line",{"attrs":{"x1":"17.01","y1":"12","x2":"22.96","y2":"12"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-git-commit', {
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