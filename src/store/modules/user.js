const user = {
    state: {
      info: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
      token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : {},
      role: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).role : null,
    },
    mutation: {
      SET_USER: (state, user) => {
        console.log(user)
        state.user = user
        localStorage.setItem('user', JSON.stringify(user))
      }
    },
    action: {
      setUser: ({commit}, user) => {
        commit('SET_USER', user)
      }
    }
}
export default user