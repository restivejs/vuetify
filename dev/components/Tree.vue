<template>
  <v-list-group v-if="isNode" sub-group>
    <v-list-tile slot="activator">
      <v-list-tile-content>
        <v-list-tile-title>{{ model.text }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <tree v-for="(item, index) in model.children" :key="index" :model="item"></tree>
  </v-list-group>
  <v-list-tile v-else>
    <v-list-tile-action>
      <v-icon v-if="model.icon">{{ model.icon }}</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{ model.text }}</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
  export default {
    props: {
      model: Object,
      root: Boolean
    },
    data() {
      return {
        open: true
      }
    },
    computed: {
      isNode() {
        return this.model.children &&
          this.model.children.length
      }
    },
    methods: {
      toggle() {
        if (this.isNode) {
          this.open = !this.open
        }
      }
    }
  }
</script>
