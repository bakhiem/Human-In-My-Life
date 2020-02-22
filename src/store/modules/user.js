const user = {
    state: {
      info: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
      token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : {},
    },
}
export default user