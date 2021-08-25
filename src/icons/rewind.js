const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-rewind"}},[["polygon",{"attrs":{"points":"11 19 2 12 11 5 11 19"}},[]],["polygon",{"attrs":{"points":"22 19 13 12 22 5 22 19"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-rewind', {
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