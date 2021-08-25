const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-cloud-snow"}},[["path",{"attrs":{"d":"M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"}},[]],["line",{"attrs":{"x1":"8","y1":"16","x2":"8.01","y2":"16"}},[]],["line",{"attrs":{"x1":"8","y1":"20","x2":"8.01","y2":"20"}},[]],["line",{"attrs":{"x1":"12","y1":"18","x2":"12.01","y2":"18"}},[]],["line",{"attrs":{"x1":"12","y1":"22","x2":"12.01","y2":"22"}},[]],["line",{"attrs":{"x1":"16","y1":"16","x2":"16.01","y2":"16"}},[]],["line",{"attrs":{"x1":"16","y1":"20","x2":"16.01","y2":"20"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-cloud-snow', {
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