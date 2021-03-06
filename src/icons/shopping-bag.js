const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-shopping-bag"}},[["path",{"attrs":{"d":"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}},[]],["line",{"attrs":{"x1":"3","y1":"6","x2":"21","y2":"6"}},[]],["path",{"attrs":{"d":"M16 10a4 4 0 0 1-8 0"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-shopping-bag', {
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