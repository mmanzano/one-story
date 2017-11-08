<template>
    <div>
        <h2 class="subtitle">
            Upload your story writing something daily for a month
        </h2>

        <div v-if="error" v-text="error"></div>
        <div v-if="!authUser">
            <no-ssr>
                <vue-passport-login
                        v-bind="{ apiUrl, clientId, secret, loginRoute, userRoute }"
                        @success="handleLogin"
                        @failed="handleErrors"
                ></vue-passport-login>
            </no-ssr>
        </div>
        <div v-else>
            <h2>Welcome {{ authUser.name }}</h2>
            <month-selector/>

            <div class="field">
                <div class="control">
                    <nuxt-link
                            class="button is-success"
                            to="/story"
                    >
                        <span class="icon is-small">
                           <i class="material-icons">done</i>
                        </span>
                        <span>Create or continue your Story</span>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'
  import MonthSelector from '../components/MonthSelector'
  import NoSsr from '../.nuxt/components/no-ssr'

  export default {
    components: {
      NoSsr,
      MonthSelector
    },
    data () {
      return {
        authUser: false,
        error: false,
        apiUrl: process.env.API_AUTH_URL,
        clientId: process.env.PASSPORT_CLIENT_ID,
        secret: process.env.PASSPORT_SECRET,
        loginRoute: 'oauth/token',
        userRoute: 'api/user'
      }
    },
    created () {
      console.log(process.env.API_AUTH_URL)
    },
    methods: {
      handleLogin (payload) {
        console.log(payload.authUser, payload.headers)
        this.error = false
        this.authUser = payload.authUser.data
        this.setAuthorization(payload.headers.Authorization)
        this.setAuthUser(payload.authUser.data)
      },
      handleErrors (errors) {
        this.error = 'Sorry, we have some problems. Maybe User or Password is wrong.'
      },
      ...mapMutations([
        'setAuthorization',
        'setAuthUser'
      ])
    },
    computed: {
      ...mapState([
        'bearerToken'
      ])
    }
  }
</script>