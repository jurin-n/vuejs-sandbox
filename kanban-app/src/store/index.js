import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutaions from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  actions,
  mutaions,
  strict: process.env.NODE_ENV !== 'production'
})
