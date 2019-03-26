<template>
    <div class="container-fluid">
      <div class="row justify-content-start">
        <div class="col-ng-4">
          <div class="card rounded-0">
              <div class="card" style="width: 400px height: 500px;">
                  <img src="../../assets/tiger.png" alt="">
                  <router-link  class="btn btn-info nav-link" to="Products">虎尾</router-link>
            </div>
          </div>
        </div>
          <div class="col-ng-4">
            <div class="card rounded-0">
              <div class="card" style="width: width: 400px height: 500px;">
                  <img src="../../assets/gun.png" alt="">
                  <router-link  class="btn btn-danger nav-link" to="Products">中興</router-link>
            </div>
          </div>
        </div>
          <div class="col-ng-4">
            <div class="card rounded-0">
              <div class="card " style="width: width: 400px height: 500px;">
                  <img src="../../assets/clock.png" alt="">
                  <router-link  class="btn btn-seuccess nav-link" to="Products">二林</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
