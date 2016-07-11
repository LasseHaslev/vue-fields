<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <color-picker></color-picker>
  </div>
</template>

<script>
import ColorPicker from './Inputs/Color/ColorPicker.vue';
export default {
    data () {
        return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello Vue!'
        }
    },

    components: {

        ColorPicker,

    }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
