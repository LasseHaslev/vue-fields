<style lang="stylus">
.Coordinates
    position:relative
    &__item
        position:absolute
        padding: 6px;
        background-color: rgba( 255,255,255,.8 )
        border-radius: 50%
</style>

<template>
<div class="Coordinates">
    <slot></slot>
    <i :center-x="x" :center-y="y" class="Coordinates__item" draggable="true" :style="{
            top: positionY + '%',
            left: positionX + '%',
            'margin-left': pointItemOffset.x + 'px',
            'margin-top': pointItemOffset.y + 'px',
        }">test</i>
</div>
</template>

<script>
export default {

    props: {

        x: {
            type: Number,
            default: 0,
        },
        y: {
            type: Number,
            default: 0,
        },

    },

    data() {
        return {
            pointItem: null,

            pointItemOffset: {
                x: -10,
                y: -13,
            }
        };
    },

    computed: {

        positionX() {
            return this.valueToPercentage( this.x ) * 100;
        },
        positionY() {
            return this.valueToPercentage( this.y ) * 100;
        },

    },

    ready() {
        var pointItem = this.$el.querySelector( '.Coordinates__item' );
        this.$set( 'pointItem', pointItem );
        this.pointItem.addEventListener( 'dragend', this.setPosition, false );
    },

    destroy() {
        this.pointItem.removeEventListener( 'dragend', this.setPosition, false );
    },

    methods: {
        setPosition( evt ) {
            // console.log(evt);
            var newPositionX = this.$el.clientWidth * this.valueToPercentage( this.x ) + evt.offsetX;
            var newPositionY = this.$el.clientHeight * this.valueToPercentage( this.y ) + evt.offsetY;

            // newPositionX += this.pointItemOffset.x * 2;
            newPositionY += this.pointItemOffset.y * 2;

            var percentageX = newPositionX / this.$el.clientWidth;
            var percentageY = newPositionY / this.$el.clientHeight;

            // console.log([ this.$el.clientWidth, newPositionX, percentageX ]);

            this.$set( 'x', this.clampValue( this.percentageToValue( percentageX ), -1, 1 ) );
            this.$set( 'y', this.clampValue( this.percentageToValue( percentageY ), -1, 1 ) );
        },

        // calculate -1 to 0 | 0 to .5 | 1 to 1
        valueToPercentage( value ) {
            return ( value + 1 ) * .5;
        },

        // calculate 0 to -1 | .5 to 0 | 1 to 1
        percentageToValue( percentage ) {
            return 2 * percentage -1;
        },

        clampValue( value, min, max ) {
            return Math.min(Math.max(value, min), max);
        },
    }

}
</script>
