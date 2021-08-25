const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-cloud-drizzle"}},[["line",{"attrs":{"x1":"8","y1":"19","x2":"8","y2":"21"}},[]],["line",{"attrs":{"x1":"8","y1":"13","x2":"8","y2":"15"}},[]],["line",{"attrs":{"x1":"16","y1":"19","x2":"16","y2":"21"}},[]],["line",{"attrs":{"x1":"16","y1":"13","x2":"16","y2":"15"}},[]],["line",{"attrs":{"x1":"12","y1":"21","x2":"12","y2":"23"}},[]],["line",{"attrs":{"x1":"12","y1":"15","x2":"12","y2":"17"}},[]],["path",{"attrs":{"d":"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-cloud-drizzle', {
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