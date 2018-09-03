import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Register from '@/components/Register'; // importing register component
import Login from '@/components/Login'; // importing register component


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },

    {
      path: '/register',
      name: 'register',
      component: Register, // need to create a register component
    },

    {
      path: '/Login',
      name: 'Login',
      component: Login, // need to create a register component
    }

  ],
});
