<template>
  <div>
    <Navbar/>
    <Alert></Alert>
    <div class="container-fluid">
      <div class="row">
          <Sidebar></Sidebar>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
          <div class="container">
          <!-- <router-view name="menu"></router-view> -->
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Alert from './AlertMessage'
import Menu from './pages/menu'

export default {
  components: {
    Sidebar,
    Navbar,
    Alert,
    Menu
  }
}
</script>
