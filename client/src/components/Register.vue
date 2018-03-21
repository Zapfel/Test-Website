<!-- v-model allows code to interact into the script tags -->
<template>
  <div>

    <h1>Register</h1>

    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email" />

    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password" />

    <br>
    <button @click="register">Register</button>
    <br>

  </div>
</template>

<script>
//imports AuthenticationService File 
import AuthenticationService from '@/services/AuthenticationService'
// data exported from page
// has default setting of email and password
export default {

  methods: {
    async register() {
      console.log('register button was clicked', this.email, this.password);

      //uses the imported AuthenticationService file and injects email
      //and password from html into it
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })

      console.log(`Register contained ${response.data}`)

    }
  },

  data() {
    return {
      email: 'abc',
      password: '123'
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
