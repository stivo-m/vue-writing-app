<template>
  <div class="wrapper">
    <Navbar />
    <Sidenav />
    <div class="content-wrapper">
      <newOrder />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../../components/admin/shared/Footer";
import Navbar from "../../../components/admin/shared/Navbar";
import Sidenav from "../../../components/admin/shared/Sidenav";
import newOrder from "../../../components/admin/newOrder";
export default {
  name: "Add",
  components: {
    Navbar,
    Sidenav,
    Footer,
    newOrder
  }
};
</script>
