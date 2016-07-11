module.exports = {

    template: require( './Grayscale.template.html' ),

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

        'color-slider': require( '../ColorSlider/ColorSlider' ),

    },

}
