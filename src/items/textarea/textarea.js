module.exports = {

    template: require( './textarea.template.html' ),

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
