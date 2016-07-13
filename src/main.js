import Vue from 'vue'
import App from './App.vue'
import { FieldsInstall } from './InputField'

Vue.use( FieldsInstall );

new Vue({
  el: 'body',
  components: { App }
})
