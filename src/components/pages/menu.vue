<template>
<div class="hello">

    <ul class="nav justify-content-right">
<!-- <li class="nav-item">
    <router-link class="nav-link"  :to="{name:'地點1'}">地點1</router-link>
</li>
<li class="nav-item">
    <router-link class="nav-link"  :to="{name:'地點2'}">地點2</router-link>
</li>
<li class="nav-item">
    <router-link class="nav-link"  :to="{name:'地點3'}">地點3</router-link>
</li> -->
<!-- <li class="nav-item">
    <a href="#" class="nav-link" @click.prevent="updatePath">切到指定頁</a>
</li> -->
<!-- <li class="nav-item">
    <a href="#" class="nav-link" @click.prevent="beforePath">回到前一頁</a>
</li> -->
</ul>
</div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    updatePath () {
      this.$router.replace('/locations/position2')
    },
    beforePath () {
      this.$router.go(-1)
    }
  }
}
</script>
