<template>
    <div class="field">
        <div class="control">
            <div class="select is-primary">
                <select v-model="month">
                    <option
                            v-for="month in months"
                            :value="month"
                            :key="month.id"
                            v-text="month.name"
                    >
                    </option>
                </select>
            </div>
        </div>
    </div>
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