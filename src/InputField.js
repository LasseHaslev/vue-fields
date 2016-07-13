// Fields
import ColorPicker from './Inputs/Color/ColorPicker.vue';
import GrayscalePicker from './Inputs/Color/GrayscalePicker.vue';
import Slug from './Inputs/Slug.vue';
import Coordinates from './Inputs/Coordinates.vue';
import ImagePicker from './Inputs/ImagePicker.vue';

// Collection of fields
import InputField from './InputField.vue'

// Install script
import { ImagePickerInstall } from '@lassehaslev/vue-imagepicker'
var install = function ( Vue ) {
    Vue.use( ImagePickerInstall );
}

export default InputField;
export {
    install as FieldsInstall,
    ColorPicker,
    GrayscalePicker,
    Slug,
    Coordinates,
    ImagePicker,
}
