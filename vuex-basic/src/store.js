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
                labelIds: [1, 2],
                done: true
            },
            {
                id: 2,
                name: 'Vue.jsの本を買う',
                labelIds: [1, 3],
                done: false
            }
        ],
        labels: [
            {
                id: 1,
                text: '買い物'
            },
            {
                id: 2,
                text: '食料'
            },
            {
                id: 3,
                text: '本'
            }
        ],
        nextTaskId: 3,
        nextLabelId: 4,
        filter: null
    },

    getters: {
        filteredTasks (state) {
            //console.log('store -> getters -> filteredTasks ' + state.filter)
            if(!state.filter) {
                return state.tasks
            }

            return state.tasks.filter(task => {
                return task.labelIds.indexOf(state.filter) >= 0
            })
        }
    },

    mutations: {
        addTask (state, { name, labelIds }){
            state.tasks.push({
                id: state.nextTaskId,
                name: name,
                labelIds: labelIds,
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
        },
        addLabel (state, { text }) {
            state.labels.push({
                id: state.nextLabelId,
                text: text
            })
            state.nextLabelId++
        },
        changeFilter (state, { filter }) {
            //console.log('store -> mutations -> changeFilter ')
            //console.log('state.filter = ' + state.filter)
            //console.log('filter = ' + filter)
            state.filter = filter
        },
        restore (state, { tasks, labels, nextTaskId, nextLabelId }) {
            state.tasks = tasks
            state.labels = labels
            state.nextTaskId = nextTaskId
            state.nextLabelId = nextLabelId
        }
    },
    actions: {
        save ({ state }) {
            const data = {
                tasks: state.tasks,
                labels: state.labels,
                nextTaskId: state.nextTaskId,
                nextLabelId: state.nextLabelId
            }
            localStorage.setItem('task-app-data', JSON.stringify(data))
        },
        restore ({ commit }) {
            const data = localStorage.getItem('task-app-data')
            if (data) {
                commit('restore', JSON.parse(data))
            }
        }
    }
})

//ストアをエクスポート
export default store