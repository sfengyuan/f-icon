const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-disc"}},[["circle",{"attrs":{"cx":"12","cy":"12","r":"10"}},[]],["circle",{"attrs":{"cx":"12","cy":"12","r":"3"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-disc', {
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