const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-grid"}},[["rect",{"attrs":{"x":"3","y":"3","width":"7","height":"7"}},[]],["rect",{"attrs":{"x":"14","y":"3","width":"7","height":"7"}},[]],["rect",{"attrs":{"x":"14","y":"14","width":"7","height":"7"}},[]],["rect",{"attrs":{"x":"3","y":"14","width":"7","height":"7"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-grid', {
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