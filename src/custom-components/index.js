import VRelativeBar from './RelativeBar'
import VTreeList from './TreeList'

const components = {
  VRelativeBar,
  VTreeList
}

export function install (Vue) {
  Object.keys(components).forEach((key) => {
    const component = components[key]
    Vue.component(component.name || key, component)
  })
}
