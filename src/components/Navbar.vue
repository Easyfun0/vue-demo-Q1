<template>
        <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#" @click.prevent="updatePath">後台頁面</a>
                  <a class="nav-link text-danger" href="#" mr-auto>水情首頁</a>

            <ul class="navbar-nav px-3">
                <li class="nav-item text-nowrap">
                <a class="nav-link" href="#" @click.prevent="signout">登出</a>
                </li>
            </ul>
        </nav>
</template>

<script>

'use strict'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'test'
    }
  },
  methods: {
    updatePath () {
      this.$router.replace('/admin/Locations')
    },
    signout () {
      const api = `${process.env.APIPATH}/logout`
      const vm = this
      this.$http.post(api).then((response) => {
        console.log(response.data)
        if (response.data.success) {
          vm.$router.push('/logout')
        };
      })
    }
  }
}
</script>
