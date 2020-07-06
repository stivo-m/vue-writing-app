<template>
  <div class="wrapper">
    <Navbar />
    <Sidenav />
    <div class="content-wrapper">
      <OrdersView />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../../components/admin/shared/Footer";
import Navbar from "../../../components/admin/shared/Navbar";
import Sidenav from "../../../components/admin/shared/Sidenav";
import OrdersView from "../../../components/admin/orders";
export default {
  data() {
    return {
      orderStatus: null
    };
  },

  components: {
    Navbar,
    Sidenav,
    Footer,
    OrdersView
  }
};
</script>
