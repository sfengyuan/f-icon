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
