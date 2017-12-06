<template>
  <template v-for="(item, i) in items">
    <v-list-group v-if="item.children" v-bind:key="item.text" :prepend-icon="item.action" no-action>
      <v-list-tile slot="activator">
        <v-list-tile-content>
          <v-list-tile-title>{{ item.text }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <template v-for="(child, n) in item.children">
        <v-list-group v-if="child.children" v-bind:key="child.text" :prepend-icon="child.action" sub-group>
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>{{ child.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <template v-for="(sub, n) in child.children">
            <v-list-group v-if="sub.children" v-bind:key="sub.text" :prepend-icon="sub.action" sub-group>
              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title>{{ sub.text }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile v-for="c in sub.children" v-bind:key="c.text" @click="">
                <v-list-tile-content>
                  <v-list-tile-title>{{ c.text }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
          </template>
        </v-list-group>
        <v-list-tile v-else @click="">
          <v-list-tile-content>
            <v-list-tile-title>{{ child.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list-group>
    <v-list-tile v-else @click="">
      <v-list-tile-action>
        <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ item.text }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </template>
</template>