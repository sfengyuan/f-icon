const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-instagram"}},[["rect",{"attrs":{"x":"2","y":"2","width":"20","height":"20","rx":"5","ry":"5"}},[]],["path",{"attrs":{"d":"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}},[]],["line",{"attrs":{"x1":"17.5","y1":"6.5","x2":"17.51","y2":"6.5"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-instagram', {
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