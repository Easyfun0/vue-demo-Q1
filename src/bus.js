import Vue from 'vue'

Vue.prototype.$bus = new Vue()

/* vm.$bus.$emit('message:push', message, status)
 message(String)
 status(String)
*/
