const GithubReducer = (state, action) => {
  switch(action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        astolfo: false
      }
    case 'GET_ASTOLFO':
      return {
        ...state,
        astolfo: true
      }
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
      }
    default:
      return state
  }
}

export default GithubReducer