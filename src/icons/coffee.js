const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-coffee"}},[["path",{"attrs":{"d":"M18 8h1a4 4 0 0 1 0 8h-1"}},[]],["path",{"attrs":{"d":"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"}},[]],["line",{"attrs":{"x1":"6","y1":"1","x2":"6","y2":"4"}},[]],["line",{"attrs":{"x1":"10","y1":"1","x2":"10","y2":"4"}},[]],["line",{"attrs":{"x1":"14","y1":"1","x2":"14","y2":"4"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-coffee', {
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