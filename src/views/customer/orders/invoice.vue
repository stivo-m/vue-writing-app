<template>
  <div class="wrapper">
    <Navbar />
    <Sidenav />
    <div class="content-wrapper">
      <Invoice />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../../components/shared/Footer";
import Navbar from "../../../components/shared/Navbar";
import Sidenav from "../../../components/shared/Sidenav";
import Invoice from "../../../components/shared/components/invoice";
export default {
  name: "Add",
  components: {
    Navbar,
    Sidenav,
    Footer,
    Invoice
  }
};
</script>
