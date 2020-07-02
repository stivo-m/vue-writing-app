<template>
  <div class="wrapper">
    <Navbar />
    <Sidenav />
    <div class="content-wrapper"></div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../../components/shared/Footer";
import Navbar from "../../../components/shared/Navbar";
import Sidenav from "../../../components/shared/Sidenav";
export default {
  data() {
    return {
      orderStatus: null
    };
  },

  components: {
    Navbar,
    Sidenav,
    Footer
  }
};
</script>
