module.exports = {

    template: require( './text.template.html' ),

    props: {

        id: {
            type:String,
            default:'',
        },

        model: {
            twoWay:true,
            // type:String,
            // default:'',
        },

        disabled: {
            type: Boolean,
            default: false,
        }

    },

}
