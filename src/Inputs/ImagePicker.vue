<style lang="stylus">
.InputImagePicker
    &__Image__content
        width: 100%;
        background-color: gray
        background-size:contain
        background-position:center center
        background-repeat: no-repeat
        padding-bottom: 100%;
</style>
<template>
    <image-picker :selected="model"
        :models="options.images"
        :url="options.url"
        :multiple="options.multiple"
        v-ref:imagepicker>
        <div class="InputImagePicker">
            <div v-if="model"
                 class="InputImagePicker__Image__content"
                 :style="{
                    'background-image': 'url(' + model.path + ')',
                 }">
                <i v-if="!model" class="fa fa-picture-o center-hard"></i>
            </div>

            <div v-else class="InputImagePicker__Image__content">
                <div class="Button__add__content">
                    <div>
                        <i class="fa fa-picture-o"></i>
                    </div>
                </div>
            </div>
        </div>
    </image-picker>
    <!-- <div v-if="remove" @click="remove( $index )" class="Button Button--danger Button--block Margin__bottom">Delete</div> -->
</template>
<script>
import InputMixin from '../Mixins/Input';
import ImagePicker from '@lassehaslev/vue-imagepicker'
export default {

    mixins: [ InputMixin ],

    computed: {

        imagePath: function() {
            var newPath = window.admin.helpers.image.path( this.model.path, {
                width: 300,
                height: 300,
                resize: true,
            } );
            return newPath;
        }

    },

    ready: function() {

    },

    events: {

        'ImageSelected': function( image ) {
            this.$set( 'model', image );
        },

    },

    components: {
        ImagePicker,
    }

}
</script>
