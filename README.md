# @lassehaslev/vue-fields
> Input fields to use with vuejs

Vue input fields contains special input fields to use width [ vuejs ]( http://vuejs.org/ ).

## Installation
Run ```npm install @lassehaslev/vue-fields --save``` in your project folder

Install component where register Vue
``` html
import Vue from 'vue'
import { FieldsInstall } from '@lassehaslev/vue-fields'
Vue.use( FieldsInstall );
```

## Usage

#### Styles
Styles can be found compiled in ```dist/Fields.css```. Or you can compile your own from ```src/styles/*```. We use [Stylus](http://stylus-lang.com/) to compile the styles.

#### Code
To start using the field make use of it in your components
``` js
import InputField from '@lassehaslev/vue-fields';
export default {
    template: '<input-field :model=""></input-field>',
    components: {
        InputField,
    }
}
```
The input fields in this package should be used the same way as you would use normal inputfields with [vuejs](http://vuejs.org/).
Main concept is that you give a :model="" with the data the same way you would use v-model="" on a normal input element.

Some inputs like the image-picker needs extra options to be configured. For those objects we use the :options="" attribute on the element with the settings to make the object work.

``` html
<input-field type="%inputType%" :options="%options%" :model.sync="%Value to be updated%"></input-field>
```


#### Color picker
``` html
<input-field type="color" :model.sync="'#005599'"></input-field>
```

#### Grayscale picker
``` html
<input-field type="color" :model.sync="'#555555'"></input-field>
```

#### Slug
Slug creates sluggable string based on another string.
Slug has two types ```case``` and ```dash```.
``` html
<input-field type="slug" :options="{ type='case', from: anotherString }" :model.sync="'#555555'"></input-field>
```

#### Coordinates
Coordinates gets coordinates from -1 to 1 in both x and y axes.  
``` html
<input-field type="coordinates" :model.sync="{ x:0,y:0 }">
    <div style="height:200px;background-color:#CCC;"></div>
</input-field>
```

#### Image picker
Image picker is based on [@lassehaslev/vue-imagepicker](https://github.com/lassehasleV/vue-imagepicker). All properties to the imagepicker goes through :options parameters.

I strongly advice you to read [@lassehaslev/vue-imagepicker](https://github.com/lassehasleV/vue-imagepicker) documentation before starting using this input type.
``` html
<input-field type="image-picker" :model.sync="image" :options="{
    'images': [
        {
            id: 1,
            path: 'http://placehold.it/400x400',
        },
        {
            id: 2,
            path: 'http://placehold.it/800x400',
        },
    ]
}"></input-field>
```

## Development
#### Quick start
Clones repository and install dependencies
``` bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/LasseHaslev/vue-fields/master/install.sh)"
```

#### Next time
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For more information see the [docs for vueify](https://github.com/vuejs/vueify).
