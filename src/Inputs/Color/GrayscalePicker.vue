<style lang="stylus">
$color-picker-border = 1px solid #CCC;
.GrayscalePicker
    &__input
        display:block;
        border: $color-picker-border;
        padding: 4px;
        &__content
            padding: 8px 16px 8px;
</style>
<template>
<div @click.prevent="open()" class="GrayscalePicker__input">
    <div class="GrayscalePicker__input__content" :style="{
        'background-color': model
    }">
    </div>
</div>
<color-slider :model.sync="singleColor" type="hex"></color-slider>
</template>

<script>
import ColorSlider from './ColorSlider.vue'
import InputMixin from '../../Mixins/Input';
export default {

    mixins: [ InputMixin ],

    props: {

        id: {
            type: String,
            default: '',
        },

        model: {
            twoWay: true,
            default: '#000000',
        },

    },

    data: function() {
        return {
            singleColor: '00',
        };
    },

    ready: function() {
        this.$set( 'singleColor', this.getHex( this.model ).r );
    },

    watch: {
        'singleColor': function() {
            this.$set( 'model', this.createHex() );
        },
    },

    methods: {

        getHex: function( hex ) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: result[1],
                g: result[2],
                b: result[3]
            } : null;
        },
        createHex: function() {
            return '#' + this.singleColor + this.singleColor + this.singleColor;
        },

    },

    components: {

        ColorSlider,

    },

}
</script>
