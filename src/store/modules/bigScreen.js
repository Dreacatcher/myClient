'use strict'
import fetch from 'fetch'
// import Url from 'url'
const state = {
  bigScreenLists: []
}
const getters = {
}
const mutations = {
  setBigScreenData(state, payload) {
    state.bigScreenLists = payload.bigScreenLists
  }
}
const actions = {
  getBigScreenData({ commit }, payload) {
    let _param = {
    }
    // fetch.httpRequestPost('http://222.85.178.219:6565/operation_data/service/O-DATA', _param, function (
    fetch.httpRequestPost('http://www.zaichengdu.com/operation_data/service/O-DATA', _param, function (
      responseData
    ) {
      if (
        responseData.data &&
        responseData.data.body
      ) {
        commit({
          type: 'setBigScreenData',
          bigScreenLists: responseData.data.body
        })
      } else {
        if (responseData.data.head.rtnCode === '999999') {
          console.log('报了一串999999')
        } else {
          commit({
            type: 'setMatterMatLists',
            MatterMatLists: []
          })
        }
      }
    })
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
