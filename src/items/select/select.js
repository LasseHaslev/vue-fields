// [ ] Create Arrow to show that this is a select box
module.exports = {

    template: require( './select.template.html' ),

    props: {

        // Standard
        id: {
            type:String,
            default:'',
        },

        model: {
            twoWay: true,
            default: null,
        },

        // Custom for this.
        options: {
            type:Array,
            default: function() {
                return [];
            },
        },
        placeholder: {
            type:String,
            default: 'Select an item.',
        },

        name: {
            type: String,
            default: 'name',
        },

        disabled: {
            type: Boolean,
            default: false,
        },

    },

    data: function() {
        return {

            hasFocus: false,

            filterKey: '',

            selectedIndex: null,

        };
    },

    computed: {
        displayText: {

            get: function() {
                if ( this.selectedIndex != null && ! this.hasFocus ) {
                    // console.log(this.selectedIndex);
                    if ( this.model.name ) {
                        return this.model[ this.name ];
                    }
                    // return this.options[ this.selectedIndex ].name;
                    return this.options[ this.selectedIndex ][ this.name ];
                }
                return this.filterKey;
            },
            set: function( value ) {
                this.filterKey = value;
            },
        } ,
    },

    ready: function() {

        // Preselect the first element if no model is set
        if ( ! this.model && this.options.length ) {
            this.select( this.options[0] );
            return;
        }

        // Select the value if model is set
        if ( this.model && this.options.length ) {

            for ( var index in this.options ) {

                var option = this.options[ index ];

                if ( option.value && option.value == this.model ) {

                    this.select( option );
                    return;

                }

            }

        }

        // if ( ! this.model && this.options.length ) {
            // this.$set( 'model', this.options[0] );
        // }

    },

    methods: {

        onFocus: function() {
            this.hasFocus = true;
        },

        onBlur: function() {
            this.hasFocus = false;
            this.filterKey = '';
        },

        select: function( option ) {

            var index = this.options.indexOf( option );
            this.$set( 'selectedIndex', index );

            if ( option.value ) {
                this.$set( 'model', option.value );
                return;
            }
            this.$set( 'model', option );
        },


    },

}
