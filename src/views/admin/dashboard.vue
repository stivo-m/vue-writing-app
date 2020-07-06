<template>
  <div class="wrapper">
    <Navbar />
    <Sidenav />
    <div class="content-wrapper">
      <DashboardComponent />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../components/admin/shared/Footer";
import Navbar from "../../components/admin/shared/Navbar";
import Sidenav from "../../components/admin/shared/Sidenav";
import DashboardComponent from "../../components/admin/index";
export default {
  components: {
    Navbar,
    Sidenav,
    Footer,
    DashboardComponent
  }
};
</script>
