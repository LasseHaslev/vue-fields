<template>
    <input class="ColorSlider" type="range" v-model="rgbValue" :min="0" :max="255" step="1">
</template>
<script>

export default {

    props: {

        model: {
            twoWay: true,
        },

        type: {
            type: String,
            default: 'rgb',
        },

    },

    data: function() {
        return {
            rgbValue: 0,
        };
    },

    computed: {

        value: {
            get: function() {
                console.log('Called get: ' + this.model);
                return this.componentToHex( this.model );
            },
            set: function( value ) {
                console.log('Called set: ' + value);
                this.$set( 'model', value );
            },
        },

    },

    ready: function() {
        this.setRgbValue();
    },

    watch: {
        'rgbValue': function() {
            switch (this.type) {
                case 'hex':
                    this.$set('model', this.componentToHex( this.rgbValue ) );
                    break;
                
                // RGB
                default:
                    this.$set( 'model', this.rgbValue );
            }
        },

        'model': function() {
            this.setRgbValue();
        },
    },

    methods: {

        setRgbValue: function() {
            switch (this.type) {
                case 'hex':
                    this.$set( 'rgbValue', this.hexToRgb( this.model ) );
                    break;
                // RGB
                default:
                this.$set( 'rgbValue', this.model );

            }
        },

        componentToHex: function( rgbValue ) {
            var hex = rgbValue.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        },

        hexToRgb: function(hex) {
            return parseInt(hex, 16);
        },

    },

}

</script>
