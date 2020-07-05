<template>
  <div class="home" id="page-top">
    <Nav />
    <Hero />
    <div class="page">
      <About />
      <Showcase />
      <WhatWeOffer />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  </div>
</template>

<script>
import Nav from "../components/home/nav";
import Hero from "../components/home/hero";
import About from "../components/home/about";
import Showcase from "../components/home/showcase";
import Testimonials from "../components/home/testimonials";
import WhatWeOffer from "../components/home/whatWeOffer";
import HowItWorks from "../components/home/howItWorks";
import Footer from "../components/home/footer";

let page, navElement;

export default {
  name: "Home",
  components: {
    Nav,
    Hero,
    About,
    Showcase,
    Testimonials,
    WhatWeOffer,
    HowItWorks,
    Footer
  },

  mounted() {
    page = document.querySelector(".page");
    navElement = document.querySelector("#mainNav");
    var navbar = new IntersectionObserver(
      function(entries) {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap
        if (entries[0].isIntersecting === true) {
          navElement.classList.add("navbar-scrolled");
        } else {
          navElement.classList.remove("navbar-scrolled");
        }
      },
      { threshold: [0] }
    );

    navbar.observe(page);
  }
};
</script>
