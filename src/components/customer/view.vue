<template>
  <section class="content mt-3">
    <!-- Default box -->
    <div class="card">
      <div class="card-header p-2">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link active" href="#details" data-toggle="tab">
              Details
              <i class="fas fa-edit"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#files" data-toggle="tab">
              Files
              <i class="fas fa-copy"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#chats" data-toggle="tab">
              Chats
              <i class="fas fa-comments"></i>
            </a>
          </li>
        </ul>
      </div>
      <!-- /.card-header -->
      <div class="card-body">
        <div class="tab-content">
          <div class="tab-pane active" id="details">
            <!-- Post -->
            <div class="post">
              <table v-if="order">
                <tbody class="table-sm">
                  <tr>
                    <td>
                      <b>Title:</b>
                      {{order.title}}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Type:</b>
                      {{order.type}}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Sources:</b>
                      {{order.sources}} Sources
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Spacing:</b>
                      {{order.spacing}}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Pages:</b>
                      {{order.pages}} Pages
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>Deadline:</b>
                      {{order.deadline}}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>Pay Status:</b>
                      {{order.pay_status === "succeeded" ? "Paid" : "Not Paid"}}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>Amount Paid:</b>
                      ${{order.amount_paid / 100}}
                    </td>
                  </tr>
                </tbody>
              </table>

              <hr />

              <h5 class="muted-text">Instructions</h5>
              <p v-if="order">{{order.instructions}}</p>
            </div>
            <!-- /.post -->
          </div>
          <!-- /.tab-pane -->
          <div class="tab-pane order-1 order-md-2" id="files">
            <div class="customer-files">
              <h5 class="text-muted">Your Files</h5>
              <ul class="list-unstyled">
                <li>
                  <a href class="btn-link text-secondary">
                    <i class="far fa-fw fa-file-word"></i> Functional-requirements.docx
                  </a>
                </li>
                <li>
                  <a href class="btn-link text-secondary">
                    <i class="far fa-fw fa-file-pdf"></i> UAT.pdf
                  </a>
                </li>
                <li>
                  <a href class="btn-link text-secondary">
                    <i class="far fa-fw fa-envelope"></i> Email-from-flatbal.mln
                  </a>
                </li>
                <li>
                  <a href class="btn-link text-secondary">
                    <i class="far fa-fw fa-image"></i> Logo.png
                  </a>
                </li>
                <li>
                  <a href class="btn-link text-secondary">
                    <i class="far fa-fw fa-file-word"></i> Contract-10_12_2014.docx
                  </a>
                </li>
              </ul>
            </div>

            <hr />

            <div class="customer-files">
              <h5 class="text-muted">Writer Files</h5>
              <ul class="list-unstyled">
                <li>
                  <a href class="btn-link text-secondary">
                    <i class="far fa-fw fa-file-word"></i> Functional-requirements.docx
                  </a>
                </li>
                <li>
                  <a href class="btn-link text-secondary">
                    <i class="far fa-fw fa-file-pdf"></i> UAT.pdf
                  </a>
                </li>

                <li>
                  <a href class="btn-link text-secondary">
                    <i class="far fa-fw fa-image"></i> Logo.png
                  </a>
                </li>
                <li>
                  <a href class="btn-link text-secondary">
                    <i class="far fa-fw fa-file-word"></i> Contract-10_12_2014.docx
                  </a>
                </li>
              </ul>
            </div>
            <hr />
            <h5 class="text-muted">Upload Files</h5>
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="customFile" />
              <label class="custom-file-label" for="customFile">Choose file</label>
            </div>
          </div>
          <!-- /.tab-pane -->

          <div class="tab-pane" id="chats">
            <!-- <Chats/> -->
            <div class="row">
              <div class="col-md-4">
                <div class="card">
                  <div class="card-body">
                    <p class="text-muted">
                      B.S. in Computer Science from the University of Tennessee at Knoxville
                      class="text-muted"
                      >B.S. in Computer Science from the University of Tennessee at Knoxville
                    </p>
                    <hr />
                    <p class="text-muted">
                      B.S. in Computer Science from the University of Tennessee at Knoxville
                      class="text-muted"
                      >B.S. in Computer Science from the University of Tennessee at Knoxville
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-8">
                <div class="card card-prirary cardutline direct-chat direct-chat-primary mx-5">
                  <!-- <div class="card card-prirary cardutline direct-chat direct-chat-primary"> -->
                  <!-- <div class="card-header">
                <h3 class="card-title">Direct Chat</h3>

                <div class="card-tools">
                  <span data-toggle="tooltip" title="3 New Messages" class="badge bg-primary">3</span>
                  <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-tool"
                    data-toggle="tooltip"
                    title="Contacts"
                    data-widget="chat-pane-toggle"
                  >
                    <i class="fas fa-comments"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
                  </div>-->
                  <!-- /.card-header -->
                  <div class="card-body px-0 mx-0">
                    <!-- Conversations are loaded here -->
                    <div class="direct-chat-messages">
                      <!-- Message. Default to the left -->
                      <div class="direct-chat-msg">
                        <div class="direct-chat-infos clearfix">
                          <span class="direct-chat-name float-left">Alexander Pierce</span>
                          <span class="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                        </div>
                        <!-- /.direct-chat-infos -->
                        <!-- <img
                      class="direct-chat-img"
                      src="../dist/img/user1-128x128.jpg"
                      alt="Message User Image"
                        />-->
                        <!-- /.direct-chat-img -->
                        <div
                          class="direct-chat-text"
                        >Is this template really for free? That's unbelievable!</div>
                        <!-- /.direct-chat-text -->
                      </div>
                      <!-- /.direct-chat-msg -->

                      <!-- Message to the right -->
                      <div class="direct-chat-msg right">
                        <div class="direct-chat-infos clearfix">
                          <span class="direct-chat-name float-right">Sarah Bullock</span>
                          <span class="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                        </div>
                        <!-- /.direct-chat-infos -->
                        <!-- <img
                      class="direct-chat-img"
                      src="../dist/img/user3-128x128.jpg"
                      alt="Message User Image"
                        />-->
                        <!-- /.direct-chat-img -->
                        <div class="direct-chat-text">You better believe it!</div>
                        <!-- /.direct-chat-text -->
                      </div>
                      <!-- /.direct-chat-msg -->
                    </div>
                    <!--/.direct-chat-messages-->

                    <!-- Contacts are loaded here -->
                    <div class="direct-chat-contacts">
                      <ul class="contacts-list">
                        <li>
                          <a href="#">
                            <!-- <img class="contacts-list-img" src="../dist/img/user1-128x128.jpg" /> -->

                            <div class="contacts-list-info">
                              <span class="contacts-list-name">
                                Count Dracula
                                <small class="contacts-list-date float-right">2/28/2015</small>
                              </span>
                              <span class="contacts-list-msg">How have you been? I was...</span>
                            </div>
                            <!-- /.contacts-list-info -->
                          </a>
                        </li>
                        <!-- End Contact Item -->
                      </ul>
                      <!-- /.contatcts-list -->
                    </div>
                    <!-- /.direct-chat-pane -->
                  </div>
                  <!-- /.card-body -->
                  <div class="card-footer">
                    <form action="#" method="post">
                      <div class="input-group">
                        <input
                          type="text"
                          name="message"
                          placeholder="Type Message ..."
                          class="form-control"
                        />
                        <span class="input-group-append">
                          <button type="submit" class="btn btn-primary">Send</button>
                        </span>
                      </div>
                    </form>
                  </div>
                  <!-- /.card-footer-->
                </div>
              </div>
            </div>
          </div>
          <!-- /.tab-pane -->
        </div>
        <!-- /.tab-content -->
      </div>
      <!-- /.card-body -->
    </div>
    <!-- /.card -->
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ViewComponent",
  data() {
    return {
      order: null
    };
  },

  methods: {
    ...mapActions(["getOrderById"])
  },

  async created() {
    this.order = await this.getOrderById(this.$router.currentRoute.params.id);

    console.log(this.order);
  }
};
</script>