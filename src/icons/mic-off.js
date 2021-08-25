const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-mic-off"}},[["line",{"attrs":{"x1":"1","y1":"1","x2":"23","y2":"23"}},[]],["path",{"attrs":{"d":"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"}},[]],["path",{"attrs":{"d":"M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"}},[]],["line",{"attrs":{"x1":"12","y1":"19","x2":"12","y2":"23"}},[]],["line",{"attrs":{"x1":"8","y1":"23","x2":"16","y2":"23"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-mic-off', {
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