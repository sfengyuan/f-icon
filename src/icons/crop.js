const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-crop"}},[["path",{"attrs":{"d":"M6.13 1L6 16a2 2 0 0 0 2 2h15"}},[]],["path",{"attrs":{"d":"M1 6.13L16 6a2 2 0 0 1 2 2v15"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-crop', {
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