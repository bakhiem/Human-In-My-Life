
<template>
  <div class="custom-header" v-show="!isHide">
    <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
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
// import typeText from "./header";

const listHide = ["/login", "/create"];
export default {
  name: "Header",
  data() {
    return {
      aText: [
        "Câu chuyện về những người xung quanh cuộc sống của mình",
        "Để ta bước vào thế giới của nhau, để hiểu và trân quý nhau hơn..."
      ],
      iSpeed: 80, // time delay of print out
      iIndex: 0, // start printing array at this posision
      iArrLength: 55, // the length of the text array
      iScrollAt: 20, // start scrolling up at this many lines

      iTextPos: 0, // initialise text position
      sContents: "", // initialise contents variable
      iRow: "", // initialise current row
      isHide: true
    };
  },
  created() {
    this.isHide = this.hideMenu();
  },
  methods: {
    hideMenu() {
      return listHide.includes(this.$router.currentRoute.path);
    },
    typeText() {
      this.sContents = " ";
      this.iRow = Math.max(0, this.iIndex - this.iScrollAt);
      var destination = document.getElementById("typedtext");

      while (this.iRow < this.iIndex) {
        this.sContents += this.aText[this.iRow++] + "<br />";
      }
      if (destination) {
        destination.innerHTML =
          this.sContents +
          this.aText[this.iIndex].substring(0, this.iTextPos) +
          "_";
      }
      if (this.iTextPos++ == this.iArrLength) {
        this.iTextPos = 0;
        this.iIndex++;
        if (this.iIndex != this.aText.length) {
          this.iArrLength = this.aText[this.iIndex].length;
          setTimeout(this.typeText.bind(this), 400);
        }
      } else {
        setTimeout(this.typeText.bind(this), this.iSpeed);
      }
    },
    scrollFunc() {
      window.addEventListener("scroll", function() {
        const mainNav = document.querySelector("#mainNav");
        if (this.scrollY - mainNav.offsetTop > 540) {
          if(this.oldScroll > this.scrollY){
            mainNav.classList.add("show-nav");
          } else {
             mainNav.classList.remove("show-nav");
          }
        } else {
          mainNav.classList.remove("show-nav");
        }
        this.oldScroll = this.scrollY;
      });
    }
  },
  mounted: function() {
    this.typeText();
    this.scrollFunc()
  },
  watch: {
    $route() {
      this.isHide = this.hideMenu();
    }
  }
};
</script>
