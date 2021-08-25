const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-voicemail"}},[["circle",{"attrs":{"cx":"5.5","cy":"11.5","r":"4.5"}},[]],["circle",{"attrs":{"cx":"18.5","cy":"11.5","r":"4.5"}},[]],["line",{"attrs":{"x1":"5.5","y1":"16","x2":"18.5","y2":"16"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-voicemail', {
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