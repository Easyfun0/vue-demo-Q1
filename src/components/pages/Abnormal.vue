<template>
    <div>
        <!-- <loading :active.sync="isLoading"></loading> -->
        <table class="table mt-4">
            <thead>
                <tr style="color:red;">
                    <th width="50" style="font-size:2em">區域</th>
                    <th width="10" style="font-size:2em">發生時間</th>
                    <th width="100" style="font-size:2em">點位名稱</th>
                    <th width="120" style="font-size:2em">異常問題</th>
                    <th width="10" style="font-size:2em">其他</th>
                </tr>  
            </thead>
        </table>

    </div>
</template>

<script>
export default {
    data () {
        return {
            products: [],
            isloading: false
        }
    },
    methods: {
      getProducts() {
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/products`
      const vm = this
      vm.isLoading = true
      this.$http.get(url).then((response) => {
        vm.products = response.data.products
        console.log(response.data)
        vm.isLoading = false
      })
    },
  },
  created () {
      this.getProducts()
  }
}
</script>
