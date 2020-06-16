<template>
  <!-- Main content -->
  <section class="content">
    <div class="container-fluid">
      <!-- Small boxes (Stat box) -->
      <div class="row">
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
                <tr v-for="(order, index) in getOrders" :key="index">
                  <td>#</td>
                  <td>
                    <a>{{order.title}}</a>
                    <br />
                    <small>Deadline: {{order.deadline}}</small>
                  </td>

                  <td>
                    <a>{{order.type}}</a>
                  </td>

                  <td>
                    <a>{{order.pages}} Page(s)</a>
                  </td>
                  <td class="project_progress">
                    <div class="progress progress-sm">
                      <div
                        class="progress-bar bg-green"
                        :class="{'bg-blue' : '{{order.status == available}}'}"
                        role="progressbar"
                        aria-volumenow="57"
                        aria-volumemin="0"
                        aria-volumemax="100"
                        style="width: 57%"
                      ></div>
                    </div>
                    <small>{{order.status}}</small>
                  </td>
                  <td class="project-actions text-right">
                    <router-link
                      class="btn btn-primary btn-sm"
                      :to="'/customer/orders/view/' + order._id"
                    >
                      <i class="fas fa-folder"></i>
                      View
                    </router-link>
                    <a class="btn btn-info btn-sm" href="#">
                      <i class="fas fa-pencil-alt"></i>
                      Edit
                    </a>
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
          count: "150",
          bg: "bg-info",
          link: "/",
          icon: "ion ion-bag"
        },
        {
          title: "Bounce Rate",
          count: "53%",
          bg: "bg-success",
          link: "/",
          icon: "ion ion-stats-bars"
        },
        {
          title: "User Registrations",
          count: "40",
          bg: "bg-warning",
          link: "/",
          icon: "ion ion-person-add"
        },
        {
          title: "Unique Visitors",
          count: "50",
          bg: "bg-danger",
          link: "/",
          icon: "ion ion-pie-graph"
        }
      ]
    };
  },

  methods: {
    ...mapActions(["setOrders"])
  },

  computed: {
    ...mapGetters(["getUser", "getOrders"])
  },

  async created() {
    await this.setOrders();
    console.log(this.getOrders);
  },

  components: {
    smallStartBox
  }
};
</script>
