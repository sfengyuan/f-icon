const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-frown"}},[["circle",{"attrs":{"cx":"12","cy":"12","r":"10"}},[]],["path",{"attrs":{"d":"M16 16s-1.5-2-4-2-4 2-4 2"}},[]],["line",{"attrs":{"x1":"9","y1":"9","x2":"9.01","y2":"9"}},[]],["line",{"attrs":{"x1":"15","y1":"9","x2":"15.01","y2":"9"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-frown', {
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