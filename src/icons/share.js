const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-share"}},[["path",{"attrs":{"d":"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}},[]],["polyline",{"attrs":{"points":"16 6 12 2 8 6"}},[]],["line",{"attrs":{"x1":"12","y1":"2","x2":"12","y2":"15"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-share', {
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