import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutaions from './mutations'

Vue.use(Vuex)

// 状態`Auth`と状態`Board`をVuexのstateで一元管理できるよう定義する
const state = {
  auth: { // 状態`Auth`
    token: null,
    userId: null
  },
  board: { // 状態`TaskList`は空で初期化
    lists: []
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutaions,
  strict: process.env.NODE_ENV !== 'production'
})
