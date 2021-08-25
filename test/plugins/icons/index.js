const fullMap = {"activity":[["y",{"points":"22 12 18 12 15 21 9 3 6 12 2 12"}]],"airplay":[["p",{"d":"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"}],["g",{"points":"12 15 17 21 7 21 12 15"}]],"alert-circle":[["c",{"cx":"12","cy":"12","r":"10"}],["l",{"x1":"12","y1":"8","x2":"12","y2":"12"}],["l",{"x1":"12","y1":"16","x2":"12.01","y2":"16"}]]}
const tagMap = {
  p: 'path',
  r: 'rect',
  c: 'circle',
  e: 'ellipse',
  l: 'line',
  g: 'polygon',
  y: 'polyline'
}

const svgAttrs = {
  "xmlns": "http://www.w3.org/2000/svg",
  "width": "24",
  "height": "24",
  "viewBox": "0 0 24 24",
  "fill": "none",
  "stroke": "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-activity"
}

export default {
  install (Vue, options) {
    Vue.component('f-icon', {
      props: {
        name: { type: String, required: true }
      },
      render (h) {
        const r = (child) => {
          const [tag, attrs, children] = child
          return h(tagMap[tag], { attrs }, children ? r(children) : [])
        }
        if (!fullMap[this.name]) {
          console.error(`No icon named "${this.name}"`)
          if (Vue.config.devtools) {
            return h('span', {attrs: {style: 'background: red; color: white'}}, [`ICON ERROR: "${this.name}" not found.`])
          }
          return h('span', {class: 'f-icon'}, [])
        }
        return h(
          'svg',
          {attrs: { ...svgAttrs, class: `feather f-icon feather-${this.name}` }},
          fullMap[this.name].map(r)
        )
      }
    })
  }
}
