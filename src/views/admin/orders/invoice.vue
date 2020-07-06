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
import Footer from "../../../components/admin/shared/Footer";
import Navbar from "../../../components/admin/shared/Navbar";
import Sidenav from "../../../components/admin/shared/Sidenav";
import Invoice from "../../../components/admin/shared/components/invoice";
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
