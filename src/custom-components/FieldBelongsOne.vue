<template>
  <v-select
    :label="label"
    autocomplete
    :loading="loading"
    v-model="selected"
    item-key="id"
    :search-input.sync="search"
    @focus="loadOnce"
    @input="emitInput"
    :item-text="itemText"
    :items="items"
  ></v-select>
</template>
<script>
export default {
  data () {
    return {
      selected: null,
      search: '',
      loading: false,
      items: []
    }
  },
  props: {
    itemText: {
      type: String,
      default () {
        return 'name'
      }
    },
    value: Object,
    label: String,
    model: String
  },
  created () {
    if (this.value) {
      this.selected = JSON.parse(JSON.stringify(this.value))
      this.items = JSON.parse(JSON.stringify([this.value]))
    }
  },
  watch: {
    value (val) {
      if (this.changeByThis) {
        this.changeByThis = false
        return
      }
      if (val) {
        this.selected = val
        if (this.items.length === 0) {
          this.items = [val]
        }
      }
    },
    search (val) {
      val && this.debounceLoad()
    }
  },
  methods: {
    emitInput (selected) {
      if (selected !== this.value) {
        this.changeByThis = true
        this.$emit('input', { id: selected.id })
      }
    },
    loadOnce () {
      if (this.items.length < 1) {
        this.$nextTick(() => {
          this.debounceLoad()
        })
      }
    },
    debounceLoad () {
      setTimeout(() => {
        this.items = [{ id: '1', name: 'user1' }, { id: '2', name: 'user2' }, { id: '3', name: 'user3' }]
      }, 300)
    }
  }
}
</script>
