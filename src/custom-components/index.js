import VRelativeBar from './RelativeBar'

const components = {
  VRelativeBar
}

export function install (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(key, VRelativeBar)
  })
}
