const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-toggle-right"}},[["rect",{"attrs":{"x":"1","y":"5","width":"22","height":"14","rx":"7","ry":"7"}},[]],["circle",{"attrs":{"cx":"16","cy":"12","r":"3"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-toggle-right', {
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