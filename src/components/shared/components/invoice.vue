<template>
  <div class="invoice p-3 mb-3">
    <!-- title row -->
    <div class="row">
      <div class="col-12">
        <h4>
          <i class="fas fa-globe"></i> Curtsy Writings
          <small class="float-right">Date: 2/10/2014</small>
        </h4>
      </div>
      <!-- /.col -->
    </div>
    <!-- info row -->
    <div class="row invoice-info">
      <div class="col-sm-4 invoice-col">
        From
        <address>
          <strong>Curtsy Writings.</strong>
          <br />Phone: (804) 123-5432
          <br />Email: info@almasaeedstudio.com
        </address>
      </div>
      <!-- /.col -->
      <div class="col-sm-4 invoice-col">
        To
        <address>
          <strong v-if="user">{{user.name}}</strong>
          <br />Phone: (555) 539-1037
          <br />
          <span v-if="user">Email: {{user.email}}</span>
        </address>
      </div>
      <!-- /.col -->
      <div class="col-sm-4 invoice-col">
        <b>Invoice #007612</b>
        <br />
        <br />
        <b v-if="order">Order ID:</b>
        {{order._id}}
        <br />
        <b>Payment Due:</b>
        2/22/2014
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->

    <!-- Table row -->
    <div class="row">
      <div class="col-12 table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Pages</th>
              <th>Customer Email</th>
              <th>Instructions</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="order">
              <td>{{order.title}}</td>
              <td>{{order.pages}} Page(s)</td>
              <td v-if="user">{{user.email}}</td>
              <td>{{order.instructions}}</td>
              <td>${{order.cost}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->

    <div class="row">
      <!-- accepted payments column -->
      <div class="col-6">
        <p class="lead">Payment Methods:</p>
        <!-- <img src="../../dist/img/credit/visa.png" alt="Visa" />
        <img src="../../dist/img/credit/mastercard.png" alt="Mastercard" />
        <img src="../../dist/img/credit/american-express.png" alt="American Express" />
        <img src="../../dist/img/credit/paypal2.png" alt="Paypal" />-->

        <p
          class="text-muted well well-sm shadow-none"
          style="margin-top: 10px;"
        >Available Payment Methods</p>
      </div>
      <!-- /.col -->
      <div class="col-6">
        <p class="lead">Amount Due 2/22/2014</p>

        <div class="table-responsive">
          <table class="table">
            <tbody>
              <tr>
                <th style="width:50%">Subtotal:</th>
                <td v-if="order">${{order.cost}}</td>
              </tr>

              <tr>
                <th>Total:</th>
                <td v-if="order">${{order.cost}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->

    <!-- this row will not appear when printing -->
    <div class="row no-print">
      <div class="col-12">
        <!-- <a href="invoice-print.html" target="_blank" class="btn btn-default">
          <i class="fas fa-print"></i> Print
        </a>-->
        <div class="float-right">
          <button type="button" class="btn btn-secondary mr-3">
            <i class="far fa-credit-card"></i> Stripe Payment
          </button>
          <button type="button" class="btn btn-info mr-3">
            <i class="far fa-credit-card"></i> Paypal Payment
          </button>
          <button type="button" class="btn btn-primary mr-3">
            <i class="far fa-credit-card"></i> Payoneer Payment
          </button>
        </div>
        <!-- <button type="button" class="btn btn-primary float-right" style="margin-right: 5px;">
          <i class="fas fa-download"></i> Generate PDF
        </button>-->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Invoice",
  data() {
    return {
      order: {},
      user: this.getUser
    };
  },
  computed: {
    ...mapGetters(["getUser"])
  },
  methods: {
    ...mapActions(["getUserDetails", "getOrderById"])
  },
  async created() {
    this.user = await this.getUserDetails();
    this.order = await this.getOrderById(this.$router.currentRoute.params.id);
  }
};
</script>