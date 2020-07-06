<template>
  <div class="wrapper">
    <Navbar />
    <Sidenav />

    <div class="content-wrapper">
      <ProfileComponent />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../components/admin/shared/Footer";
import Navbar from "../../components/admin/shared/Navbar";
import Sidenav from "../../components/admin/shared/Sidenav";
import ProfileComponent from "../../components/shared/components/profile";
// import Notif from "../../components/shared/notification";
export default {
  components: {
    Navbar,
    Sidenav,
    Footer,
    ProfileComponent
    // Notif,
  }
};
</script>
