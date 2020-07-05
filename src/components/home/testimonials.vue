<template>
  <section class="page-section">
    <h3 class="text-center">What Our Customer's Say about Us</h3>
    <hr class="divider my-4" />
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <!-- Wrapper for slides -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row">
            <div class="col-md-12">
              <div class="testimony">
                <img
                  class="media-object img-rounded img-responsive user-image"
                  src="http://placehold.it/100"
                />
                <div class="caption">
                  <p class="text-info lead title">I can't wait to test this out.</p>
                  <p class="message">
                    <span class="glyphicon glyphicon-thumbs-up"></span> This is a testimonial window. Feedback of user can be displayed here.
                  </p>
                  <blockquote>
                    <p class="user-name">Abhijit Goswami</p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col-md-12">
              <div class="testimony">
                <img
                  class="media-object img-rounded img-responsive user-image"
                  src="http://placehold.it/100"
                />
                <div class="caption">
                  <p class="text-info lead title">I can't wait to test this out.</p>
                  <p class="message">
                    <span class="glyphicon glyphicon-thumbs-up"></span> This is a testimonial window. Feedback of user can be displayed here.
                  </p>
                  <blockquote>
                    <p class="user-name">Abhijit Goswami</p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Controls -->
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: #eee;
}
.testimony {
  display: flex !important;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.user-image {
  width: 100px;
  height: 100px;
}

.caption {
  margin-left: 1rem;
}

.caption .title {
  font-weight: 600;
  line-height: 1.5;
}

.caption .message {
  font-size: 12px;
  line-height: 1.2;
  font-style: italic;
}

.caption blockquote {
  border-left: 3px solid #f4623a;
  background-color: #eee;
}

.carousel-control-next,
.carousel-control-prev {
  color: #f4623a;
  background-color: rgba(207, 85, 51, 0.548);
}
</style>
