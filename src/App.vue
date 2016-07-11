<template>
    <div id="app">
        <h1>Vue input fields</h1>
        <p>This package contains input fields for vuejs</p>
        <p>It should be used the same way as nor mal input fields</p>
        <p>Main concept is you give a :model="" with the data the same way you would use v-model="" on normal input element</p>

        <h3>Color picker</h3>
        <color-picker :model="'#005599'"></color-picker>
    </div>
</template>

<script>
import ColorPicker from './Inputs/Color/ColorPicker.vue';
export default {

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
