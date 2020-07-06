<template>
  <!-- Services-->
  <section class="page-section" id="whatweoffer">
    <div class="container">
      <h2 class="text-center mt-0">How It Works</h2>
      <hr class="divider my-4" />
      <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-6">
          <img
            class="img-fluid"
            src="../../assets/img/one.png"
            alt="
          First step to order your paper"
          />
        </div>

        <div class="col-md-6 col-sm-6 col-xs-6 steps">
          <h3 class="title">Step 1</h3>
          <p>Calculate the average price for your paper and register in the system to place your order</p>

          <h3 class="title">Step 2</h3>
          <p>Disburse payments for the paper. 100% Return is guaranteed!</p>

          <h3 class="title">Step 3</h3>
          <p>Relax and let the professional team work on your academic paper</p>
          <h3 class="title">Step 4</h3>
          <p>Get notified when the paper is completed, review it and be happy!</p>
        </div>

        <div class="action">
          <router-link to="/customer" class="btn btn-rounded btn-info btn-xl">Get Started</router-link>
        </div>
      </div>

      <!-- Mobile app feature -->
      <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-6 steps">
          <h2 class="title">Need Convenience?</h2>
          <p>
            You can get our mobile app from the playstore.
            The mobile app adds efficiency to your ordering process, realtime notifications and additional chat features.
          </p>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-6">
          <video
            loop
            autoplay
            class="img-fluid"
            src="../../assets/img/anim.mp4"
            alt="
          First step to order your paper"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  height: auto !important;
  width: 100% !important;
  background-color: #fff;
}

.action {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  margin: 1.5rem 0;
}

.steps {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.steps .title {
  font-weight: 100;
  font-size: 1.6rem;
}

.steps p {
  line-height: 2;
}
</style>
