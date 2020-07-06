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
import Footer from "../../../components/admin/shared/Footer";
import Navbar from "../../../components/admin/shared/Navbar";
import Sidenav from "../../../components/admin/shared/Sidenav";
import ViewComponent from "../../../components/admin/view";
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
