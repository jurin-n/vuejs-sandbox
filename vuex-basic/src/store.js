import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//ストアの定義
const store = new Vuex.Store({
    state: {
        tasks: [
            {
                id: 1,
                name: '牛乳を買う',
                done: true
            },
            {
                id: 2,
                name: 'Vue.jsの本を買う',
                done: false
            }
        ]
    }
})

//ストアをエクスポート
export default store