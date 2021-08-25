const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-send"}},[["line",{"attrs":{"x1":"22","y1":"2","x2":"11","y2":"13"}},[]],["polygon",{"attrs":{"points":"22 2 15 22 11 13 2 9 22 2"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-send', {
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