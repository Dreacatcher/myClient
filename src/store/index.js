/*
 * @Author: lucm
 * @Date: 2017-06-08 11:06:27
 * @Last Modified by: lucm
 * @Last Modified time: 2017-08-22 15:03:25
 */
import Vue from 'vue'
import Vuex from 'vuex'
import bigScreenStore from 'bigScreenStore'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    bigScreenStore
  }
})
