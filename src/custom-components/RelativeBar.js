export default {
  name: 'v-relative-bar',

  props: {
    top: Boolean
  },

  computed: {
    classes () {
      return {
        'content--is-booted': this.isBooted
      }
    },
    styles () {
      const {
        bar, top, right, footer, bottom, left
      } = this.$vuetify.application

      var styles = {
        width: `calc(100% - ${left + right}px)`,
        position: 'fixed'
      }

      if (this.top) {
        styles.top = `${top + bar}px`
        styles.left = `${left}px`
      } else {
        styles.bottom = `${footer + bottom}px`
        styles.right = `${right}px`
      }

      return styles
    }
  },

  render (h) {
    return h('div', {
      style: this.styles
    }, this.$slots.default)
  }
}
