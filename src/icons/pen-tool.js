const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-pen-tool"}},[["path",{"attrs":{"d":"M12 19l7-7 3 3-7 7-3-3z"}},[]],["path",{"attrs":{"d":"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"}},[]],["path",{"attrs":{"d":"M2 2l7.586 7.586"}},[]],["circle",{"attrs":{"cx":"11","cy":"11","r":"2"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-pen-tool', {
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