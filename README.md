# @lassehaslev/vue-fields
> Input fields to use with vuejs

Vue input fields contains special input fields to use width [ vuejs ]( http://vuejs.org/ ).

## Installation
Run ```npm install @lassehaslev/vue-fields --save``` in your project folder

## Usage
The input fields in this package should be used the same way as you would use normal inputfields with [vuejs](http://vuejs.org/).
Main concept is that you give a :model="" with the data the same way you would use v-model="" on a normal input element.

Some inputs like the image-picker needs extra options to be configured. For those objects we use the :options="" attribute on the element with the settings to make the object work.

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
