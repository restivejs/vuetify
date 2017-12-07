<template>
  <v-select
    :label="label"
    autocomplete
    :loading="loading"
    multiple
    @input="emitInput"
    @focus="loadOnce()"
    :item-text="itemText"
    item-key="id"
    multiple
    chips
    :items="items"
    :search-input.sync="search"
    v-model="selected"
  >
    <template slot="selection" slot-scope="data">
      <v-chip
        close
        @input="data.parent.selectItem(data.item)"
        :selected="data.selected"
        class="chip--select-multi"
        :key="data.item.id"
      >
        {{ data.item.name }}
      </v-chip>
    </template>
  </v-select>
</template>
<script>
export default {
  data () {
    return {
      selected: [],
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
    value: Array,
    label: String,
    model: String
  },
  created () {
    if (this.value.length > 0 && this.selected.length === 0) {
      this.selected = JSON.parse(JSON.stringify(this.value))
      this.items = JSON.parse(JSON.stringify(this.value))
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
        this.items = val
      }
    },
    search (val) {
      val && this.debounceLoad()
    }
  },
  methods: {
    emitInput (selected) {
      this.changeByThis = true
      this.$emit('input', selected.map(item => {
        if (item.id) {
          return { id: item.id }
        } else {
          return { name: item }
        }
      }))
    },
    loadOnce () {
      if (this.items.length === this.selected.length) {
        this.debounceLoad()
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
