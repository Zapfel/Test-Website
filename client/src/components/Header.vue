<template>
  <v-toolbar fixed dark color="primary">
    <v-toolbar-title class="mr-4">
      Test Website
    </v-toolbar-title>

    <!-- TO DO -->
    <!--<v-toolbar-items>
      <v-btn flat>
        Browse
      </v-btn>
    </v-toolbar-items> -->


  <v-spacer></v-spacer>

    <v-toolbar-items>
        <router-link to="register"> <!-- for router-link make sure in router/index.js there exists a page -->
          <v-btn flat>
            Sign Up
          </v-btn>
        </router-link>
<!-- Include router-link once page is developed -->
<!-- TODO: Stack these buttons --> 
        <router-link to="Login">
          <v-btn flat>
            Login
          </v-btn>
        </router-link> 

 
    </v-toolbar-items>

  </v-toolbar>
</template>



<script>
export default {
}
</script>

<style scoped>
</style>
