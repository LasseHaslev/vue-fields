export default {

    props: {

        /*
         * Model to update
         */
        model: {
            default: null,
            required: true,
            twoWay: true,
        },

        /*
         * Options for each item
         */
        options: {
            type: Object,
            default: null,
        },

        /*
         * Is field disabled
         */
        disabled: {
            type: Boolean,
            default: false,
        },

    }

}
