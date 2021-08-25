const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-upload"}},[["path",{"attrs":{"d":"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},[]],["polyline",{"attrs":{"points":"17 8 12 3 7 8"}},[]],["line",{"attrs":{"x1":"12","y1":"3","x2":"12","y2":"15"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-upload', {
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