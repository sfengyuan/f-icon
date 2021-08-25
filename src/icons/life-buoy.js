const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-life-buoy"}},[["circle",{"attrs":{"cx":"12","cy":"12","r":"10"}},[]],["circle",{"attrs":{"cx":"12","cy":"12","r":"4"}},[]],["line",{"attrs":{"x1":"4.93","y1":"4.93","x2":"9.17","y2":"9.17"}},[]],["line",{"attrs":{"x1":"14.83","y1":"14.83","x2":"19.07","y2":"19.07"}},[]],["line",{"attrs":{"x1":"14.83","y1":"9.17","x2":"19.07","y2":"4.93"}},[]],["line",{"attrs":{"x1":"14.83","y1":"9.17","x2":"18.36","y2":"5.64"}},[]],["line",{"attrs":{"x1":"4.93","y1":"19.07","x2":"9.17","y2":"14.83"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-life-buoy', {
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