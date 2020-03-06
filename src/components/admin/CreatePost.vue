<template>
  <div id="app">
    <froala :tag="'textarea'" :config="config" v-model="model"></froala>
  </div>
</template>

<script>

// import VueFroala from 'vue-froala-wysiwyg';

export default {
  name: 'CreatePost',
  data () {
    return {
      config: {
        events: {
          'froalaEditor.initialized': function () {
            console.log('initialized')
          }
        }
      },
      model: 'Edit Your Content Here!'
    }
  },
  watch: {
    model: {
      deep: true,
      immediate: true,
      handler: function(new_) {
        console.log(new_)
      }
    }
  }
}
</script>