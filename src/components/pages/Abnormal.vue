<template>
    <div>
        <!-- <loading :active.sync="isLoading"></loading> -->
        <table class="table mt-4">
            <thead class="thead-dark">
                <tr style="color:red;">
                    <th width="50" style="font-size:2em">區域</th>
                    <th width="10" style="font-size:2em">點位名稱</th>
                    <th width="100" style="font-size:2em">發生時間</th>
                    <th width="120" style="font-size:2em">異常問題</th>
                    <th width="10" style="font-size:2em">其他</th>
                </tr>  
            </thead>
            <tbody>
                <tr>
                <th scope="row">虎尾</th>
                <td>科虎二路與科雲南路</td>
                <td>2018/05/17 17:42:02</td>
                <td>Battery Low Alarm</td>
                <td>###</td>
                </tr>
                <tr>
                <th scope="row">中興</th>
                <td>光明一路與大埤街路口</td>
                <td>2019/01/24 16:41:14</td>
                <td>Battery Low Alarm</td>
                <td>###</td>
                </tr>
                <tr>
                <th scope="row">中興</th>
                <td>中興路省14乙(內轆橋)</td>
                <td>2019/01/24 09:03:29</td>
                <td>ID1 Communication error</td>
                <td>###</td>
                </tr>
            </tbody>
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
