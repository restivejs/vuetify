<template>
  <v-layout row wrap fill-height>
    <v-flex xs12 sm3 fill-height v-show="aside">
      <div style="height: 100%" class="white elevation-1">
        <slot name="aside"></slot>
      </div>
    </v-flex>
    <v-flex xs12 v-bind="{ sm9: aside, sm12: !aside }">
      <v-toolbar flat>
        <v-toolbar-side-icon @click.stop="aside = !aside"></v-toolbar-side-icon>
        <v-toolbar-title>Product</v-toolbar-title>
      </v-toolbar>
      <slot></slot>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: {
      aside: {
        type: Boolean,
        default: true
      }
    }
  }
</script>