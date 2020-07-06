<template>
  <!-- Main content -->
  <section class="content">
    <div class="container-fluid">
      <!-- /.row -->
      <section class="content mt-5">
        <!-- Default box -->
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Projects in {{ orderStatus }}</h3>
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
                  <template v-if="order.status === orderStatus">
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
                          class="progress-bar bg-green"
                          :class="{
														'bg-blue': '{{order.status == available}}',
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

                      <button class="btn btn-danger btn-sm" @click="delOrder(order._id)">
                        <i class="fas fa-trash"></i>
                        Delete
                      </button>
                    </td>
                  </template>

                  <!-- <template v-else>
                    <td colspan="6" class="text-center">
                      <p v>There are no orders in {{orderStatus}} at the moment</p>
                    </td>
                  </template>-->
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
  name: "Orders",
  data() {
    return {
      orderStatus: null
    };
  },

  methods: {
    ...mapActions(["adminSetOrders", "AdminDeleteOrder"]),
    delOrder(id) {
      this.$confirm({
        title: "Delete Order",
        message: `Are you sure you want to delete this order?`,
        button: {
          no: "No",
          yes: "Yes"
        },
        /**
         * Callback Function
         * @param {Boolean} confirm
         */
        callback: confirm => {
          if (confirm) {
            this.deleteOrder(id);
          }
        }
      });
    }
  },

  computed: {
    ...mapGetters(["getUser", "getAdminOrders"])
  },

  async created() {
    this.orderStatus = this.$router.currentRoute.name;
    await this.adminSetOrders();
  },

  watch: {
    $route() {
      this.orderStatus = this.$router.currentRoute.name;
    }
  }
};
</script>
