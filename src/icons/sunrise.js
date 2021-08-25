const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-sunrise"}},[["path",{"attrs":{"d":"M17 18a5 5 0 0 0-10 0"}},[]],["line",{"attrs":{"x1":"12","y1":"2","x2":"12","y2":"9"}},[]],["line",{"attrs":{"x1":"4.22","y1":"10.22","x2":"5.64","y2":"11.64"}},[]],["line",{"attrs":{"x1":"1","y1":"18","x2":"3","y2":"18"}},[]],["line",{"attrs":{"x1":"21","y1":"18","x2":"23","y2":"18"}},[]],["line",{"attrs":{"x1":"18.36","y1":"11.64","x2":"19.78","y2":"10.22"}},[]],["line",{"attrs":{"x1":"23","y1":"22","x2":"1","y2":"22"}},[]],["polyline",{"attrs":{"points":"8 6 12 2 16 6"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-sunrise', {
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