import VRelativeBar from './RelativeBar'
import VTreeList from './TreeList'
import VScrollTop from './ScrollTop'

const components = {
  VRelativeBar,
  VTreeList,
  VScrollTop
}

export function install (Vue) {
  Object.keys(components).forEach((key) => {
    const component = components[key]
    Vue.component(component.name || key, component)
  })
}
