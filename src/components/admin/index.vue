<template>
  <!-- Main content -->
  <section class="content">
    <div class="container-fluid">
      <!-- Small boxes (Stat box) -->
      <div class="row mt-4">
        <div v-for="(cards, index) in dashboardItems" :key="index" class="col-lg-3 col-6">
          <smallStartBox
            :title="cards.title"
            :bg="cards.bg"
            :icon="cards.icon"
            :count="cards.count"
            :link="cards.link"
          ></smallStartBox>
          <!-- small box -->
          <!-- <div class="small-box bg-info">
            <div class="inner">
              <h3>150</h3>

              <p>New Orders</p>
            </div>
            <div class="icon">
              <i class="ion ion-bag"></i>
            </div>
            <a href="#" class="small-box-footer">
              More info
              <i class="fas fa-arrow-circle-right"></i>
            </a>
          </div>-->
        </div>
        <!-- ./col -->
      </div>
      <!-- /.row -->
      <section class="content">
        <!-- Default box -->
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Projects</h3>

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
              <button
                type="button"
                class="btn btn-tool"
                data-card-widget="remove"
                data-toggle="tooltip"
                title="Remove"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
          <div class="card-body p-0">
            <table class="table table-striped projects">
              <thead>
                <tr>
                  <th style="width: 1%">#</th>
                  <th style="width: 20%">Title</th>
                  <th style="width: 20%">Type</th>
                  <th>Pages</th>
                  <th style="width: 8%" class="text-center">Status</th>
                  <th style="width: 30%">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(order, index) in getAdminOrders" :key="index">
                  <td>#</td>
                  <td>
                    <a>{{ order.title }}</a>
                    <br />
                    <small>Deadline: {{ order.deadline }}</small>
                  </td>

                  <td>
                    <a>{{ order.type }}</a>
                  </td>

                  <td>
                    <a>{{ order.pages }} Page(s)</a>
                  </td>
                  <td class="project_progress">
                    <div class="progress progress-sm">
                      <div
                        class="progress-bar"
                        :class="{
													'bg-yellow': '{{order.status === available}}',
													'bg-blue': '{{order.status === pending}}',
												}"
                        role="progressbar"
                        aria-volumenow="57"
                        aria-volumemin="0"
                        aria-volumemax="100"
                        style="width: 57%"
                      ></div>
                    </div>
                    <small>{{ order.status }}</small>
                  </td>
                  <td class="project-actions text-right">
                    <router-link
                      class="btn btn-primary btn-sm"
                      :to="'/admin/orders/view/' + order._id"
                    >
                      <i class="fas fa-folder"></i>
                      View
                    </router-link>

                    <a class="btn btn-danger btn-sm" href="#">
                      <i class="fas fa-trash"></i>
                      Delete
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->
      </section>
    </div>
    <!-- /.container-fluid -->
  </section>
  <!-- /.content -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import smallStartBox from "../shared/components/small-start-box";
export default {
  name: "DashboardComponent",
  data() {
    return {
      dashboardItems: [
        {
          title: "New Orders",
          count: "0",
          bg: "bg-info",
          link: "/",
          icon: "ion ion-bag"
        },
        {
          title: "Completed Orders",
          count: "0",
          bg: "bg-success",
          link: "/",
          icon: "ion ion-stats-bars"
        },
        {
          title: "Waiting Approval",
          count: "0",
          bg: "bg-warning",
          link: "/",
          icon: "ion ion-stats-bars"
        },
        {
          title: "Customers",
          count: "0",
          bg: "bg-danger",
          link: "/",
          icon: "ion ion-pie-graph"
        }
      ]
    };
  },

  methods: {
    ...mapActions(["adminSetOrders", "adminSetCustomers"]),
    countOrders() {
      let newOrders = 0;
      let completed = 0;
      let waiting = 0;

      this.getAdminOrders.forEach(order => {
        if (order.status === "pending") newOrders++;
        if (order.status === "completed") completed++;
        if (order.status === "waiting") waiting++;
      });

      this.dashboardItems[0].count = newOrders.toString();
      this.dashboardItems[1].count = completed.toString();
      this.dashboardItems[2].count = waiting.toString();
      this.dashboardItems[3].count = this.adminGetCustomers.length.toString();
    }
  },

  computed: {
    ...mapGetters(["getUser", "getAdminOrders", "adminGetCustomers"])
  },

  async created() {
    await this.adminSetOrders();
    await this.adminSetCustomers();
    this.countOrders();
  },

  components: {
    smallStartBox
  }
};
</script>
