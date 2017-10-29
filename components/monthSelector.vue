<template>
    <section>
        <b-field label="Select a month">
            <b-select placeholder="Select a month"  v-model="month">
                <option
                        v-for="month in months"
                        :value="month"
                        :key="month.id"
                        v-text="month.name"
                >
                </option>
            </b-select>
        </b-field>

        <div>
            <nuxt-link class="button is-dark" to="/stories">Create a Story
            </nuxt-link>
        </div>
    </section>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'

  export default {
    computed: {
      month: {
        get: function () {
          return this.selectedMonth
        },
        set: function (newSelectedMonth) {
          return this.changeMonth(newSelectedMonth)
        }
      },

      ...mapState([
        'selectedMonth',
        'months'
      ])
    },
    methods: {
      ...mapMutations([
        'changeMonth'
      ])
    }
  }
</script>