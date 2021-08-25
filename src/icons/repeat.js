const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-repeat"}},[["polyline",{"attrs":{"points":"17 1 21 5 17 9"}},[]],["path",{"attrs":{"d":"M3 11V9a4 4 0 0 1 4-4h14"}},[]],["polyline",{"attrs":{"points":"7 23 3 19 7 15"}},[]],["path",{"attrs":{"d":"M21 13v2a4 4 0 0 1-4 4H3"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-repeat', {
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