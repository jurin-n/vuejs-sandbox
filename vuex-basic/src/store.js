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
        ],
        nextTaskId: 3
    },
    mutations: {
        addTask (state, { name }){
            state.tasks.push({
                id: state.nextTaskId,
                name: name,
                done: false
            })
            state.nextTaskId++
        },
        toggleTaskStatus (state, { id }){
            const filtered = state.tasks.filter(task => {
                return task.id === id
            })

            filtered.forEach(task => {
                task.done = !task.done
            })
        }
    }
})

//ストアをエクスポート
export default store