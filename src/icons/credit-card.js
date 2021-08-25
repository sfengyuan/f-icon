const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-credit-card"}},[["rect",{"attrs":{"x":"1","y":"4","width":"22","height":"16","rx":"2","ry":"2"}},[]],["line",{"attrs":{"x1":"1","y1":"10","x2":"23","y2":"10"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-credit-card', {
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