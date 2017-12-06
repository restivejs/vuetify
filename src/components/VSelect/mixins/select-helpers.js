// Helpers
import { getObjectValueByPath } from '../../../util/helpers'

/**
 * Select helpers
 *
 * @mixin
 *
 * Helper methods for the
 * v-select component
 */
export default {
  methods: {
    getText (item) {
      return this.getPropertyFromItem(item, this.itemText)
    },
    getValue (item) {
      return this.getPropertyFromItem(item, this.itemValue)
    },
    getKey (item, index) {
      if (this.itemKey) {
        return this.getPropertyFromItem(item, this.itemKey)
      } else {
        const value = this.getValue(item)
        return typeof value === 'object' ? index : value
      }
    },
    getPropertyFromItem (item, field) {
      if (item !== Object(item)) return item

      const value = getObjectValueByPath(item, field)

      return typeof value === 'undefined' ? item : value
    }
  }
}
