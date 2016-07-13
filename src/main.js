import Vue from 'vue'
import App from './App.vue'
import { ImagePickerInstall } from '@lassehaslev/vue-imagepicker'

Vue.use( ImagePickerInstall );

new Vue({
  el: 'body',
  components: { App }
})
