const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-server"}},[["rect",{"attrs":{"x":"2","y":"2","width":"20","height":"8","rx":"2","ry":"2"}},[]],["rect",{"attrs":{"x":"2","y":"14","width":"20","height":"8","rx":"2","ry":"2"}},[]],["line",{"attrs":{"x1":"6","y1":"6","x2":"6.01","y2":"6"}},[]],["line",{"attrs":{"x1":"6","y1":"18","x2":"6.01","y2":"18"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-server', {
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