const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-cpu"}},[["rect",{"attrs":{"x":"4","y":"4","width":"16","height":"16","rx":"2","ry":"2"}},[]],["rect",{"attrs":{"x":"9","y":"9","width":"6","height":"6"}},[]],["line",{"attrs":{"x1":"9","y1":"1","x2":"9","y2":"4"}},[]],["line",{"attrs":{"x1":"15","y1":"1","x2":"15","y2":"4"}},[]],["line",{"attrs":{"x1":"9","y1":"20","x2":"9","y2":"23"}},[]],["line",{"attrs":{"x1":"15","y1":"20","x2":"15","y2":"23"}},[]],["line",{"attrs":{"x1":"20","y1":"9","x2":"23","y2":"9"}},[]],["line",{"attrs":{"x1":"20","y1":"14","x2":"23","y2":"14"}},[]],["line",{"attrs":{"x1":"1","y1":"9","x2":"4","y2":"9"}},[]],["line",{"attrs":{"x1":"1","y1":"14","x2":"4","y2":"14"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-cpu', {
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