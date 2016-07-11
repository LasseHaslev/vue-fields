module.exports = {

    template: require( './ColorPicker.template.html' ),

    props: {
        model: {
            type: String,
            default: '#000000',
        },

        disabled: {
            type: Boolean,
            default: false,
        }
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

    partials: {

        'picker': require( './Picker.template.html' ),

    },

    components: {

        'modal': require( '../../../../../../modal/modal' ),

        'slider': require( '../ColorSlider/ColorSlider' ),

    },

}
