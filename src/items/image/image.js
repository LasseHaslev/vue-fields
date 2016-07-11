// [ ] Fix when the image gets deselected if a image is already set

var AccountService = require( '../../../../../Modules/Accounts/Services/AccountService' );

module.exports = {
    template: require( './image.template.html' ),

    props: {
        model: null,
    },

    data: function() {

        return {
            account: null,
        };

    },

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

        var props = this.$route.props;
        if ( props ) {
            var slug = props.account;
            AccountService.getFromAccount( slug ).then( function( data ) {
                console.log(data);
            } );
        }

    },

    events: {

        'ImageSelected': function( image ) {
            this.$set( 'model', image );
        },

    },

    components: {
        imagepicker: require('../../../../../Modules/Images/Imagepicker/Imagepicker'),
    }
}
