const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-unlock"}},[["rect",{"attrs":{"x":"3","y":"11","width":"18","height":"11","rx":"2","ry":"2"}},[]],["path",{"attrs":{"d":"M7 11V7a5 5 0 0 1 9.9-1"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-unlock', {
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