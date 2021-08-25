const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-mouse-pointer"}},[["path",{"attrs":{"d":"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"}},[]],["path",{"attrs":{"d":"M13 13l6 6"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-mouse-pointer', {
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