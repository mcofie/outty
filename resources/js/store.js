import {createStore} from 'vuex'
import {CreateEventLineUp} from "./network/Models";
import {formatTime, reverseTimeFormat} from "./helper";

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    count: 0,
    event: CreateEventLineUp,
    proposedEventName: ''
}

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    increment(state) {
        state.count++
    },
    decrement(state) {
        state.count--
    },
    storeEventDetails(state, n) {
        state.event = n
        localStorage.setItem('eventStore', JSON.stringify(state.event))
    },
    storeProposedEventName(state, name) {
        state.proposedEventName = name
    }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
    increment: ({commit}) => commit('increment'),
    decrement: ({commit}) => commit('decrement'),
    incrementIfOdd({commit, state}) {
        if ((state.count + 1) % 2 === 0) {
            commit('increment')
        }
    },
    incrementAsync({commit}) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('increment')
                resolve()
            }, 1000)
        })
    }
}

// getters are functions.
const getters = {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
    proposedEventName: state => state.proposedEventName,
    eventStore: state => {
        let store = JSON.parse(localStorage.getItem('eventStore'))
        if (store) {
            store.lineups.map((lineup) => {
                lineup.start_time = reverseTimeFormat(lineup.start_time)
                lineup.end_time = reverseTimeFormat(lineup.end_time)
            })
        }
        return Object.assign(state.event, store)
    }
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default createStore({
    state,
    getters,
    actions,
    mutations
})
