<template>
    <div id="app">
        <h1>Vue input fields</h1>
        <p>This package contains input fields for vuejs</p>
        <p>It should be used the same way as nor mal input fields</p>
        <p>Main concept is you give a :model="" with the data the same way you would use v-model="" on normal input element</p>

        <h3>Color picker</h3>
        <pre>Value: {{ colorPicker }}</pre>
        <color-picker :model.sync="colorPicker"></color-picker>

        <h3>Grayscale picker</h3>
        <pre>Value: {{ grayscalePicker }}</pre>
        <grayscale-picker :model.sync="grayscalePicker"></grayscale-picker>
    </div>
</template>

<script>
import ColorPicker from './Inputs/Color/ColorPicker.vue';
import GrayscalePicker from './Inputs/Color/GrayscalePicker.vue';
export default {
    
    data() {
        return {

            colorPicker: '#005599',
            grayscalePicker: '#000000',

        }
    },

    components: {

        ColorPicker,
        GrayscalePicker,

    }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
