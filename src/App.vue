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

        <h3>Slug</h3>
        <p>Slug watches another text field and creates a slug based on the pattern. Slug has for now two logics "case" and "dash". When slug field is written into, we cut the connection to the leader.</p>
        <p>Try to write in the input below:</p>
        <input type="text" v-model="slugFrom">
        <div style="display:flex;">
            <div style="width: 50%; margin-right:16px;">
                <h4>Case</h4>
                <slug :from="slugFrom" :model.sync="slug"></slug>
            </div>
            <div style="width: 50%">
                <h4>Dash</h4>
                <slug :from="slugFrom" type="dash" :model.sync="''"></slug>
            </div>
        </div>

        <h3>Coordinates</h3>
        <pre>Value: {{ coordinates | json }}</pre>
        <coordinates :model.sync="coordinates">
            <div style="height:200px;background-color:#CCC;"></div>
        </coordinates>

        <h3>Image picker</h3>
        Image picker is based on <a href="https://github.com/lassehasleV/vue-imagepicker">@lassehaslev/vue-imagepicker</a>. All properties to the imagepicker goes through :options parameters.
        <pre>Value: {{ image | json }}</pre>
        <div style="width: 33%">
            <image-picker :model.sync="image" :options="{
            'images': [
                {
                    id: 1,
                    path: 'http://placehold.it/400x400',
                },
                {
                    id: 2,
                    path: 'http://placehold.it/800x400',
                },
                {
                    id: 3,
                    path: 'http://placehold.it/400x400',
                },
                {
                    id: 4,
                    path: 'http://placehold.it/200x400',
                },
            ]
            }"></image-picker>
        </div>
    </div>
</template>

<script>
import ColorPicker from './Inputs/Color/ColorPicker.vue';
import GrayscalePicker from './Inputs/Color/GrayscalePicker.vue';
import Slug from './Inputs/Slug.vue';
import Coordinates from './Inputs/Coordinates.vue';
import ImagePicker from './Inputs/ImagePicker.vue';
export default {
    
    data() {
        return {

            colorPicker: '#005599',
            grayscalePicker: '#555555',
            slugFrom: 'Hello world',
            slug: null,

            coordinates: {
                x: 0,
                y: 0,
            },

            image: null,

        }
    },

    components: {

        ColorPicker,
        GrayscalePicker,
        Slug,
        Coordinates,
        ImagePicker,

    }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
