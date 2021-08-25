const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-pause"}},[["rect",{"attrs":{"x":"6","y":"4","width":"4","height":"16"}},[]],["rect",{"attrs":{"x":"14","y":"4","width":"4","height":"16"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-pause', {
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