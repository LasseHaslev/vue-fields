module.exports = {

    template: require( './slider.template.html' ),

    props: {

        id: {
            type:String,
            default:'',
        },

        model: {
            twoWay:true,
            // type:String,
            default:0,
        },

        min: {
            type:Number,
            default:0,
        },

        max: {
            type:Number,
            default:100,
        },

        step: {
            type:Number,
            default:1,
        },

        disabled: {
            type: Boolean,
            default: false,
        }

    },

}
