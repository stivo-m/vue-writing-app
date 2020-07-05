<template>
  <!-- Services-->
  <section class="page-section" id="whatweoffer">
    <div class="container">
      <h2 class="text-center mt-0">What We Offer</h2>
      <hr class="divider my-4" />
      <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-6 row">
          <div class="col-md-12 col-sm-12 col-xs-12 col-lg-6">
            <ul>
              <li>Essay</li>
              <li>Presentation or Speech</li>
              <li>Business Plan</li>
              <li>Admission Essay</li>
              <li>Case Study</li>
            </ul>
          </div>

          <div class="col-md-12 col-sm-12 col-xs-12 col-lg-6">
            <ul>
              <li>Reflective Writing</li>
              <li>Creative Writing</li>
              <li>Annotated Bibliography</li>
              <li>Report</li>
              <li>Term Paper</li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-6 row">
          <div class="col-md-12 col-sm-12 col-xs-12 col-lg-6">
            <ul>
              <li>Article Review</li>
              <li>Book Review</li>
              <li>Literature Review</li>
              <li>Research Proposal</li>
              <li>Research Paper</li>
            </ul>
          </div>

          <div class="col-md-12 col-sm-12 col-xs-12 col-lg-6">
            <ul>
              <li>Book / Movie Review</li>
              <li>Editing and Proofreading</li>
              <li>Critical Thinking</li>
              <li>Thesis / Dissertation</li>
              <li>Other</li>
            </ul>
          </div>
        </div>

        <div class="action">
          <router-link to="/customer" class="btn btn-rounded btn-primary btn-xl">Place Order</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  height: auto !important;
  width: 100% !important;
  background-color: #eee;
}

.action {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  margin: 1.5rem 0;
}

ul {
  list-style-type: none;
}

li {
  font-size: 14px;
  line-height: 2.5;
}
</style>
