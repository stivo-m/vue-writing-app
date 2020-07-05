<template>
  <!-- Contact-->
  <section class="page-section" id="contact">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h2 class="mt-0">Curtsy Writing Services</h2>
          <hr class="divider my-4" />

          <div class="holder">
            <div class="calculator">
              <div class="calc">
                <form class="newOrder">
                  <p class="heading">Calculate Average Price</p>
                  <div class="callout callout-danger">
                    <p>
                      <i class="fas fa-info mr-5 blak-text"></i>
                      Total Cost
                      <b>${{ cost }}</b>
                    </p>
                  </div>
                  <div class="form-group">
                    <label for="pages">Number of Pages</label>
                    <input
                      type="number"
                      required
                      name="pages"
                      min="1"
                      @change="updatePages($event)"
                      v-model="pages"
                      value="1"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="deadline">Deadline</label>
                    <select
                      required
                      class="form-control custom-select"
                      name="deadline"
                      @change="getDeadline($event)"
                    >
                      <option selected>4 Hours</option>
                      <option>6 Hours</option>
                      <option>8 Hours</option>
                      <option>12 Hours</option>
                      <option>24 Hours</option>
                      <option>36 Hours</option>
                      <option>48 Hours</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="spacing">Paper Spacing</label>
                    <select
                      required
                      class="form-control custom-select"
                      name="spacing"
                      @change="getSpacing($event)"
                    >
                      <option value="single">Single (500 Words / Page)</option>
                      <option value="double" selected>Double (275 Words / Page)</option>
                    </select>
                  </div>

                  <button class="btn btn-primary btn-xl btn-block text-white">Place Order</button>
                </form>
              </div>
            </div>

            <div class="disclaimer">
              <h3 class="mt-0">Curtsy Writing Essays</h3>
              <p>Curtsy Wrting essays are NOT intended to be forwarded as finalized work as it is only strictly meant to be used for research and study purposes. Curtsy Writing does not endorse or condone any type of plagiarism.</p>
              <hr />
              <h3 class="mt-0 smaller">Accepted Modes of Payments</h3>
              <img src="../../assets/img/payments.svg" />
              <img class="responsive paypal" src="../../assets/img/paypal.png" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <p class="text">
        <span>Curtsy Writings</span> &copy;2020. All Rights Reserved
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      cost: 0,
      pages: 1,
      deadline: "4 Hours",
      spacing: "Double (275 Words / Page)"
    };
  },
  created() {
    this.updatePrice();
  },

  mounted() {
    this.updatePrice();
  },
  methods: {
    getSpacing(e) {
      const selected =
        e.target.options[e.target.options.selectedIndex].innerText;
      this.spacing = selected;
      this.updatePrice();
    },
    getDeadline(e) {
      const selected =
        e.target.options[e.target.options.selectedIndex].innerText;
      this.deadline = selected;
      this.updatePrice();
    },

    updatePages(e) {
      const pages = e.target.value;
      if (pages <= 0) {
        console.log("pages should be more than 1");
        return;
      }
      this.pages = pages;
      this.updatePrice();
    },

    updatePrice() {
      const pages = this.pages;
      const [time, decorator] = this.deadline.split(" ");
      const [space, deco] = this.spacing.split(" (");
      let timeline;

      //all money values are in US $
      const base_cpp = 7.2;

      let totalCost = base_cpp;

      //calculate total cost based on deadline and spacing
      if (space === "Double") {
        totalCost = base_cpp;
      } else if (space === "Single") {
        totalCost += base_cpp;
      }

      if (time <= 4) {
        totalCost += base_cpp;
      } else if (time <= 6) {
        totalCost += 0.75 * base_cpp;
      } else if (time <= 8) {
        totalCost += 0.7 * base_cpp;
      } else if (time <= 12) {
        totalCost += 0.65 * base_cpp;
      } else if (time <= 24) {
        totalCost += 0.55 * base_cpp;
      }
      let cost = totalCost * pages;
      this.cost = cost.toFixed(2);
    }
  }
};
</script>

<style  scoped>
section {
  position: relative;
  background-color: #424242;
}

.footer {
  background-color: #363636;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  text-align: center;
  color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer .text {
  margin-top: 10px;
}

.footer span {
  font-weight: 600;
}

h2,
h3 {
  color: #fff;
  font-weight: 600;
}

p.text-muted {
  color: #eee !important;
}

.smaller {
  font-size: 16px;
  font-weight: 400;
}

.responsive {
  width: 100px;
}

.paypal {
  width: 100px;
  margin: 15px 2px 0 0;
  height: 62px;
  background-color: #5e5e5e;
  padding: 0px 0px;
  border-radius: 5px;
}

.holder {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.disclaimer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.disclaimer p {
  line-height: 2;
  color: #dddbdb;
}

.calc {
  max-width: 350px;
  min-width: 300px;
  margin-top: 1rem;
  border-radius: 10px;
  padding: 2rem 1.5rem;
  height: 500px;
}
.callout.callout-danger {
  border-left-color: #f4623a;
}

label,
p.heading {
  color: white;
}
</style>