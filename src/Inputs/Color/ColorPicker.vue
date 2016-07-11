<style lang="stylus">
$color-picker-border = 1px solid #CCC;
.ColorPicker
    &__content
        display:flex
        margin-bottom: 16px
    // @extends .Clearfix
    &__input
        display:block;
        border: $color-picker-border;
        padding: 4px;
    &__display
        width: 50%;
        &__content
            padding: 4px;
            border: $color-picker-border;
    &__controls
        margin: 0 0 0 16px;
        width:50%;

    &__control
        &__label
            display: block
            margin-bottom: 4px
        &__input
            margin-top: 8px
.Button
    display: inline-block;
    text-align: center;
    padding: 6px 12px;
    color: #fff;
    border-radius: 6px;
    text-decoration: none;
    border: 0;
    font-size: .9em;
    cursor: pointer;
    &--primary
        background-color: #0596d5;
    &--default
        background-color: #cacaca;

.Form__control
    display: block;
    width: 100%;
    font-size: .9em;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 9px;
    box-sizing: border-box;
    margin-bottom: 12px;
</style>
<template>
<div>
    <modal v-ref:modal>
        <div class="ColorPicker">
            <div class="ColorPicker__content Clearfix">

                <div class="ColorPicker__display">
                    <div style="" class="ColorPicker__display__content">
                        <div
                            :style="{
                            'background-color': hex
                        }" style="padding-bottom:100%;">
                        </div>
                    </div>
                </div>
                <div class="ColorPicker__controls">
                    <div class="ColorPicker__control">
                        <label class="ColorPicker__control__label" for="slider-red">Red</label>
                        <color-slider type="hex" :model.sync="red"></color-slider>
                    </div>
                    <div class="ColorPicker__control">
                        <label class="ColorPicker__control__label" for="slider-green">Green</label>
                        <color-slider type="hex" :model.sync="green"></color-slider>
                    </div>
                    <div class="ColorPicker__control">
                        <label class="ColorPicker__control__label" for="slider-blue">Blue</label>
                        <color-slider type="hex" :model.sync="blue"></color-slider>
                    </div>
                    <input id="" type="text" name="" v-model="hex" class="Form__control ColorPicker__control__input">
                </div>

            </div>
        </div>
        <a class="Button Button--primary" href="#" @click.prevent="confirm">Confirm</a>
        <a class="Button Button--default" href="#" @click.prevent="cancel">Cancel</a>
    </modal>

    <a href="#" @click.prevent="open()" class="ColorPicker__input">
        <div class="Padding" style="padding: 16px;" :style="{
            'background-color': model
        }">
        </div>
    </a>
</div>
</template>
<script>
import InputMixin from '../../Mixins/Input';
import Modal from 'vue-modal-browserify'
import ColorSlider from './ColorSlider.vue'
export default {

    mixins: [ InputMixin ],

    props: {
        model: {
            type: String,
            default: '#000000',
        },
    },

    data: function() {
        return {

            red: '00',
            green: '00',
            blue: '00',

        };
    },

    computed: {

        hex: {
            get: function() {
                return '#' + this.red + this.green + this.blue;
            },
            set: function( value ) {
                this.setRgb( value );
            },
        } 

    },

    methods: {

        setRgb: function( hex ) {
            var rgb = this.getRgb( hex );
            this.red = rgb.r;
            this.green = rgb.g;
            this.blue = rgb.b;
        },

        getRgb: function( hex ) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: result[1],
                g: result[2],
                b: result[3]
            } : {
                r: '00',
                g: '00',
                b: '00',
            };
        },

        open: function() {
            this.setRgb( this.model );
            this.$refs.modal.open();
        },

        confirm: function() {
            this.$set( 'model', this.hex );
            this.$refs.modal.close();
        },

        cancel: function() {
            this.$refs.modal.close();
        },

    },

    components: {

        Modal,

        ColorSlider,

    },


}
</script>
