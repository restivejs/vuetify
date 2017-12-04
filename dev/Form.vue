<template>
<v-app>
  <v-card flat>
    <v-card-text>
      <v-container fluid>
        <v-layout>
          <v-flex>
            <field-many2many v-model="item.users"/>
            <field-belongs-one v-model="item.user" @input="val => item.userId = val.id"/>
            <pre>
              {{item}}
            </pre>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</v-app>
</template>

<script>
import FieldMany2many from './FieldMany2many.vue'
import FieldBelongsOne from './FieldBelongsOne.vue'

export default {
  components: {
    FieldMany2many,
    FieldBelongsOne
  },
  data () {
    return {
      loading: false,
      item: {
        user: null,
        users: []
      }
    }
  },
  created () {
    setTimeout(() => {
      this.item = {
        user: { id: '1', name: 'user1' },
        userId: '1',
        users: [ { id: '1', name: 'user1' } ]
      }
    }, 500)
  }
}
</script>
