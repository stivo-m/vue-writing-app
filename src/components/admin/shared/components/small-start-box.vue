<template>
  <!-- small box -->
  <div class="small-box" :class="bg">
    <div class="inner">
      <h3>{{count}}</h3>

      <p>{{title}}</p>
    </div>
    <div class="icon">
      <i :class="icon"></i>
    </div>
    <router-link :to="link" class="small-box-footer">
      View more
      <i class="fas fa-arrow-circle-right"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "smallStartBox",
  props: {
    title: String,
    count: String,
    bg: String,
    link: String,
    icon: String
  }
};
</script>