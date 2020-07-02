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
import Footer from "../../../components/shared/Footer";
import Navbar from "../../../components/shared/Navbar";
import Sidenav from "../../../components/shared/Sidenav";
import OrdersView from "../../../components/customer/orders";
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
