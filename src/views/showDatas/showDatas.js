
import Vue from 'vue'
import ShowDatas from './showDatas.vue'
import store from 'store'
// new Vue({
//   render: h => h(App)
// }).$mount('#home2')
/* eslint-disable no-new */
new Vue({
  el: '#showDatas',
  store,
  template: '<ShowDatas/>',
  components: { ShowDatas }
})
