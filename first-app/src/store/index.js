//import the createStore object from Vuex
import { createStore } from 'vuex'
// Import axios to make HTTP requests
import axios from 'axios'
export default createStore({
  state: {
    users: [],
    loadState: false
  },
  getters: {
    getUsers: (state) => state.users
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        commit('IS_LOADING', true)
        const data = await axios.get('https://jsonplaceholder.typicode.com/users')
        commit('SET_USERS', data.data)
        commit('IS_LOADING', false)
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  },
  mutations: {
    SET_USERS(state, users) {
      console.log(users)
      state.users = users
    },
    IS_LOADING(state, payload) {
      state.loadState = payload
    }
  }
})
