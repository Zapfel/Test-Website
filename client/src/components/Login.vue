
<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-flex class="text-xs-center">
                  <v-toolbar-title>Login</v-toolbar-title>
                </v-flex>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field name="email" label="email" type="text" v-model="email"></v-text-field>
                  <v-text-field name="password" label="password" id="password" type="password" v-model="password"></v-text-field>
                  <div class="error" v-html="error" />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-flex class="text-xs-center">
                  <v-btn color="primary" @click="Login">Login</v-btn>
                </v-flex>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>


<script>
//imports AuthenticationService File
import AuthenticationService from '@/services/AuthenticationService'
// data exported from page
// has default setting of email and password
export default {

  methods: {
    async Login() {
      console.log('Login button was clicked', this.email, this.password);
      try {
        //uses the imported AuthenticationService file and injects email
        //and password from html into it
        const response = await AuthenticationService.Login({
          email: this.email,
          password: this.password
        })
      } catch(error) {
        this.error = error.response.data.error
      } //end try-catch block

      console.log(`Login contained ${response.data}`)

    } //end Login
  },

  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  }, //end data

// watches and logs to console changes in specified elements value
  watch: {
    email(value) {
      console.log('email has changed', value);
    } // end email
  }, // end watch

  mounted() {
    setTimeout(() => {
      this.email = 'hello world'
    }, 2000)
  }// end mounted
}// end export default
</script>