<template>
  <!-- Main content -->
  <section class="content">
    <form @submit="onSubmit">
      <div class="row mt-2">
        <div class="col 12">
          <div class="callout callout-info">
            <h5>
              <i class="fas fa-info mr-5"></i>
              Total Cost
              <b>${{cost}}</b>
            </h5>

            <h5 v-if="getOrderErrors">
              <hr />
              <div v-for="(error, index) in getOrderErrors" :key="index">
                <p class="text-danger">
                  <i class="fas fa-bell mr-2"></i>
                  {{error}}
                </p>
              </div>
            </h5>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">General Details</h3>

              <div class="card-tools">
                <button
                  type="button"
                  class="btn btn-tool"
                  data-card-widget="collapse"
                  data-toggle="tooltip"
                  title="Collapse"
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label for="title">Title</label>
                <input
                  required
                  type="text"
                  name="title"
                  v-model="title"
                  class="form-control required"
                />
              </div>
              <div class="form-group">
                <label for="topic">Your Topic</label>
                <input type="text" required name="topic" v-model="topic" class="form-control" />
              </div>

              <div class="form-group">
                <label for="sources">Number of Sources</label>
                <input type="number" required name="sources" v-model="sources" class="form-control" />
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
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <div class="col-md-6">
          <div class="card card-secondary">
            <div class="card-header">
              <h3 class="card-title">Additioanl Information</h3>

              <div class="card-tools">
                <button
                  type="button"
                  class="btn btn-tool"
                  data-card-widget="collapse"
                  data-toggle="tooltip"
                  title="Collapse"
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label for="type">Type of Paper</label>
                <select
                  class="form-control custom-select"
                  name="type"
                  required
                  @change="getTypeOfPaper($event)"
                >
                  <option selected>Academic Paper \ Essay</option>
                  <option>Research Paper</option>
                  <option>Research Proposal</option>
                  <option>Powerpoint Presentation</option>
                  <option>Essay Outline</option>
                  <option>Thesis</option>
                </select>
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
                <label for="description">Assignment Description</label>
                <textarea
                  name="description"
                  v-model="description"
                  required
                  class="form-control"
                  rows="5"
                ></textarea>
              </div>

              <div class="form-group">
                <label for="orderFiles">File input</label>
                <div class="input-group">
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" id="orderFiles" />
                    <label class="custom-file-label" for="orderFiles">Choose files</label>
                  </div>
                  <div class="input-group-append">
                    <span class="input-group-text" id>Upload</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="float-right">
            <a href="#" class="btn btn-secondary mr-3">Cancel</a>
            <button type="submit" class="btn btn-success">Proceed ${{cost}}</button>
          </div>
        </div>
      </div>
    </form>
  </section>
  <!-- /.content -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "newOrder",
  data() {
    return {
      title: "",
      topic: "",
      sources: 0,
      pages: 1,
      description: "",
      spacing: "Double (275 Words / Page)",
      type: "Academic Paper / Essay",
      deadline: "4 Hours",
      cost: 0
    };
  },
  created() {
    this.updatePrice();
  },

  mounted() {
    this.updatePrice();
  },

  computed: {
    ...mapGetters(["getOrderErrors"])
  },
  methods: {
    ...mapActions(["addOrder"]),
    getSpacing(e) {
      const selected =
        e.target.options[e.target.options.selectedIndex].innerText;
      this.spacing = selected;
      this.updatePrice();
    },
    getTypeOfPaper(e) {
      const selected =
        e.target.options[e.target.options.selectedIndex].innerText;
      this.type = selected;
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
    },

    onSubmit(e) {
      e.preventDefault();

      //validate
      if (this.pages == 0 || this.pages < -1) {
        // pages must not be less than 1
        const error = "Pages Should be 1 or more";
        console.log(error);
        return;
      }

      //temporary order
      const tempOrder = {
        title: this.title,
        topic: this.topic,
        sources: this.sources,
        pages: this.pages,
        instructions: this.description,
        spacing: this.spacing,
        type: this.type,
        deadline: this.deadline,
        cost: this.cost
      };

      this.addOrder(tempOrder)
        .then(order => {
          if (order) {
            this.$router.push("/customer/orders/invoice/" + order._id);
          } else {
            console.log("Order is Empty");
          }
        })
        .catch(err => {
          console.log("ERROR: " + err);
        });
    }
  }
};
</script>