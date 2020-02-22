<template>
  <div class="container post mb-5">
    <div class="row post-title justify-content-center">
      <h1 @click="getUserToken">This Is A Standard Format Post.</h1>
    </div>
    <div class="row post-info text-center justify-content-center">
      <div class="col-md-6">
        <div class="entry-date d-inline-block">
          <small class="text-muted">15 tháng 1, 2017</small>
        </div>
        <div class="ml-3 post-type d-inline-block">Những người thân thương</div>
      </div>
    </div>
    <div
      class="row post-content"
    >Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint.</div>
  </div>
</template>
<script>
export default {
  name: "Post",
  methods: {
    getUserToken() {
       console.log(this)
       console.log(this.$store.state.user)
    }
  }
};
</script>
