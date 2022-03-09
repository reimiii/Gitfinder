import { createContext, useReducer } from 'react'
import GithubReducer from './GithubReducer'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {

  const initialState = {
    users: [],
    user: {},
    repos: [],
    astolfo: false
  }

  // Get search results from Github API
  const [state, dispatch] = useReducer(GithubReducer, initialState)


  return (
    <GithubContext.Provider value={{
      ...state,
      dispatch,
    }}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext 