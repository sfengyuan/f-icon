const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-sun"}},[["circle",{"attrs":{"cx":"12","cy":"12","r":"5"}},[]],["line",{"attrs":{"x1":"12","y1":"1","x2":"12","y2":"3"}},[]],["line",{"attrs":{"x1":"12","y1":"21","x2":"12","y2":"23"}},[]],["line",{"attrs":{"x1":"4.22","y1":"4.22","x2":"5.64","y2":"5.64"}},[]],["line",{"attrs":{"x1":"18.36","y1":"18.36","x2":"19.78","y2":"19.78"}},[]],["line",{"attrs":{"x1":"1","y1":"12","x2":"3","y2":"12"}},[]],["line",{"attrs":{"x1":"21","y1":"12","x2":"23","y2":"12"}},[]],["line",{"attrs":{"x1":"4.22","y1":"19.78","x2":"5.64","y2":"18.36"}},[]],["line",{"attrs":{"x1":"18.36","y1":"5.64","x2":"19.78","y2":"4.22"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-sun', {
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