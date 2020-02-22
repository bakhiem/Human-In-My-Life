
<template>
  <div class="custom-header">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand" href="/startbootstrap-clean-blog-jekyll/"></a>
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/startbootstrap-clean-blog-jekyll/">Trang chủ</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/startbootstrap-clean-blog-jekyll/about"
              >Những người thân thương</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/startbootstrap-clean-blog-jekyll/posts">Trên đường tôi đi</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/startbootstrap-clean-blog-jekyll/contact"
              >Câu chuyện của tôi</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <header>
      <div class="wrapper">
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-9 col-md-12 mx-auto">
              <div class="page-heading">
                <h1 class="text-center">Humans In My Life</h1>

                <span class="subheading ml-5" id="typedtext"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import typeText from "./header";
export default {
  name: "Header",
  methods: {
    writeLetter() {
    }
  },
  mounted: function() {
     typeText();
  }
};
</script>
