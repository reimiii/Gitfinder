import { createContext, useReducer } from 'react'
import GithubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    astolfo: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  const searchUsers = async (text) => {

    setAstolfo()

    const params = new URLSearchParams({
      q: text,
    })
    
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })

    const { items } = await response.json()

    dispatch({
      type: 'GET_USERS',
      payload: items,
    })
  }

  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' })
  // wow
  const setAstolfo = () => dispatch({ type: 'GET_ASTOLFO' })

  return (
    <GithubContext.Provider value={{
      users: state.users,
      astolfo: state.astolfo,
      searchUsers,
      clearUsers
    }}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext 