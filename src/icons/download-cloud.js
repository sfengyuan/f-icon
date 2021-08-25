const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-download-cloud"}},[["polyline",{"attrs":{"points":"8 17 12 21 16 17"}},[]],["line",{"attrs":{"x1":"12","y1":"12","x2":"12","y2":"21"}},[]],["path",{"attrs":{"d":"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-download-cloud', {
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