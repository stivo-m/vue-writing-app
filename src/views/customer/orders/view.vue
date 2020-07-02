<template>
  <div class="wrapper">
    <Navbar />
    <Sidenav />
    <div class="content-wrapper">
      <ViewComponent />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../../components/shared/Footer";
import Navbar from "../../../components/shared/Navbar";
import Sidenav from "../../../components/shared/Sidenav";
import ViewComponent from "../../../components/customer/view";
export default {
  name: "ViewPage",
  components: {
    Navbar,
    Sidenav,
    Footer,
    ViewComponent
  }
};
</script>
