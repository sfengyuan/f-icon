const ast = ["svg",{"attrs":{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"feather feather-figma"}},[["path",{"attrs":{"d":"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"}},[]],["path",{"attrs":{"d":"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"}},[]],["path",{"attrs":{"d":"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"}},[]],["path",{"attrs":{"d":"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"}},[]],["path",{"attrs":{"d":"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"}},[]]]]
  export default {
    install (Vue, options) {
      Vue.component('f-figma', {
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