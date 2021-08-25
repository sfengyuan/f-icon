const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-compass"}},[["circle",{"attrs":{"cx":"12","cy":"12","r":"10"}},[]],["polygon",{"attrs":{"points":"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-compass', {
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