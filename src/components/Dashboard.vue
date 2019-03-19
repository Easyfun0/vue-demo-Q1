<template>
    <div>
<div class="container-fluid">
  <div class="row">
      <Navber/>
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
        <Sideber></Sideber>
    </main>
  </div>
</div>
    </div>
</template>

<script>
import Sideber from './Sidebar'
import Navber from './Navbar'

export default {
    comments: {
      Sideber,
      Navber
    }
  }
</script>
