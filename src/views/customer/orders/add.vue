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
import Footer from "../../../components/shared/Footer";
import Navbar from "../../../components/shared/Navbar";
import Sidenav from "../../../components/shared/Sidenav";
import newOrder from "../../../components/customer/newOrder";
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
