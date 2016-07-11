module.exports = {

    template: require( './form-item.template.html' ),

    props: {

        required: {
            type: Boolean,
            default: false,
        },

        disabled: {
            type: Boolean,
            default: false,
        },

        id: {
            type: String,
            default: null,
        },

        name: {
            type: String,
            default: null,
        },

        item: {
            type: Object,
            default: null,
        },

        type: {
            type: String,
            default: 'text',
        },

        model: {
            // type: Object,
            default: null,
            twoWay: true,
        },

        // Slug field
        from: {
            type: String,
            // default: 'text',
            default: 'text',
        },

        'slug-type': {
            type: String,
            default: 'case',
        },

        // Select field
        // options: {
            // type: Array,
            // // default: function() {
                // // return [];
            // // },
        // }
    },

    computed: {

        requiredString: function() {
            // return 'test';
            var requiredString = this.required ? '*' : '';
            return this.name + requiredString;
        },

    },

    components: {

        'form-response': require( '../form-response/form-response' ),

        // Form elements
        'input-text': require( '../items/text/text' ),
        'input-textarea': require( '../items/textarea/textarea' ),
        'input-select': require( '../items/select/select' ),
        'input-image': require( '../items/image/image' ),
        'input-slug': require( '../items/slug/slug' ),
        'input-checkbox': require( '../items/checkbox/checkbox' ),
        'input-ad-template': require( '../../../../Modules/Ads/Components/Templates/TemplateSelector/TemplateSelector' ),
    },

}
