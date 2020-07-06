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
          <strong v-if="user">{{ user.name }}</strong>
          <br />Phone: (555) 539-1037
          <br />
          <span v-if="user">Email: {{ user.email }}</span>
        </address>
      </div>
      <!-- /.col -->
      <div class="col-sm-4 invoice-col">
        <b>Invoice #007612</b>
        <br />
        <br />
        <b v-if="order">Order ID:</b>
        {{ order._id }}
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
              <td>{{ order.title }}</td>
              <td>{{ order.pages }} Page(s)</td>
              <td v-if="user">{{ user.email }}</td>
              <td>{{ order.instructions }}</td>
              <td>${{ order.cost }}</td>
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
                <td v-if="order">${{ order.cost }}</td>
              </tr>

              <tr>
                <th>Total:</th>
                <td v-if="order">${{ order.cost }}</td>
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
          <div class="stripe-checkout" v-if="order.pay_status != 'succeeded'">
            <p>Pay With Stripe</p>
            <stripe-elements
              ref="elementsRef"
              :pk="publishableKey"
              :amount="parseInt(order.cost)"
              locale="eng"
              @token="tokenCreated"
              @loading="loading = $event"
            ></stripe-elements>
            <button class="btn btn-info mr-3 float-right" @click="submit">Pay ${{ order.cost }}</button>
          </div>

          <div class="row" v-if="getOrderErrors">
            <p v-for="(err, i) in getOrderErrors" :key="i">{{ err }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import { StripeElements } from "vue-stripe-checkout";
const baseUrl = "http://localhost:8080/#/customer/orders/pay/";

export default {
  name: "Invoice",

  data() {
    return {
      order: {},
      user: this.getUser,

      loading: false,
      publishableKey:
        "pk_test_51GulIbBJQCOzVUPo1wi9vSTHnZDYmuJzBCWfCID547QwCMKWsh8tWeVWmDDNRG7rWABkth0UQyqMfRnh2qx6diGM0027ljwiI8",
      token: null,
      charge: null,
      amount: 1000
    };
  },
  components: {
    StripeElements
  },
  computed: {
    ...mapGetters(["getUser", "getOrderErrors"])
  },
  methods: {
    ...mapActions(["getUserDetails", "getOrderById", "payForOrder"]),
    submit() {
      this.$refs.elementsRef.submit();
      console.log("submitted");
    },
    tokenCreated(token) {
      this.token = token;
      // for additional charge objects go to https://stripe.com/docs/api/charges/object
      this.charge = {
        source: token.id,
        amount: Math.floor(parseInt(this.order.cost)) * 100, // the amount you want to charge the customer in cents. $100 is 1000 (it is strongly recommended you use a product id and quantity and get calculate this on the backend to avoid people manipulating the cost)
        description: this.order._id // optional description that will show up on stripe when looking at payments
      };
      this.sendTokenToServer(this.charge);
    },
    sendTokenToServer(charge) {
      this.payForOrder(charge).then(outcome => {
        alert(outcome.text);
        this.$router.push("/customer/orders/view/" + outcome.order);
      });
      // Send to charge to your backend server to be processed
      // Documentation here: https://stripe.com/docs/api/charges/create
    }
  },
  async created() {
    this.user = await this.getUserDetails();
    this.order = await this.getOrderById(this.$router.currentRoute.params.id);
    // this.items.sku = await this.order.sku;
  }
};
</script>

<style scoped>
.stripe-checkout {
  min-width: 380px;
  max-width: 380px;
  width: 380px;
  margin: 1rem 2rem;
}

.StripeElement[data-v-02a0436f] {
  box-sizing: border-box;
  height: 40px;
  padding: 10px 12px;
  border: 1px solid #7d7d7d00;
  border-radius: 4px;
  background-color: #f2f2f2;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}
</style>
