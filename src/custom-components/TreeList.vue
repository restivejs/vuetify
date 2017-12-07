<template>
  <v-list-group v-if="isNode" v-bind="{ 'sub-group': !root }">
    <v-list-tile slot="activator" ripple>
      <v-list-tile-content>
        <v-list-tile-title>{{ model.text }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-tree-list v-for="(item, index) in model.children" :key="index" :model="item" :parent="model"></v-tree-list>
  </v-list-group>
  <v-list-tile v-bind="{
    to: !model.target ? model.href : null,
    href: model.target && model.href
  }" :disabled="model.disabled" :target="model.target" v-else ripple>
    <v-list-tile-action>
      <v-icon v-if="model.icon">{{ model.icon }}</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{ model.text }}</v-list-tile-title>
    </v-list-tile-content>
    <v-chip v-if="model.badge" color="red lighten-1" text-color="white" small disabled>{{ model.badge }}</v-chip>
  </v-list-tile>
</template>

<script>
  export default {
    props: {
      model: Object,
      parent: Object,
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