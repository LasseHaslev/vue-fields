<template>
    <component v-if="type=='color'" is="color-picker" :model.sync="model"></component>
    <component v-if="type=='grayscale'" is="grayscale-picker" :model.sync="model"></component>
    <component v-if="type=='slug'" :options="options" is="slug" :model.sync="model"></component>
    <component v-if="type=='coordinates'" is="coordinates" :model.sync="model"><slot></slot></component>
    <component v-if="type=='image-picker'" :options="options" is="image-picker" :model.sync="model"><slot></slot></component>
</template>

<script>
import InputMixin from './Mixins/Input';

import ColorPicker from './Inputs/Color/ColorPicker.vue';
import GrayscalePicker from './Inputs/Color/GrayscalePicker.vue';

import Coordinates from './Inputs/Coordinates.vue';
import ImagePicker from './Inputs/ImagePicker.vue';
import Slug from './Inputs/Slug.vue';

export default {

    mixins: [ InputMixin ],

    props: {

        type: {
            type: String,
            default: null,
        },

    },

    components: {
        ColorPicker,
        GrayscalePicker,
        Coordinates,
        ImagePicker,
        Slug,
    },

}
</script>
