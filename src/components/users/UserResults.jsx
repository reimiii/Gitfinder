import { useContext } from 'react'
import { Astolfo, UserItem } from '../index'
import { GithubContext } from '../../context'

function UserResults() {
  const { users, astolfo } = useContext(GithubContext)


  if (!astolfo) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <UserItem key={user.id} orang={user} />
        ))}
      </div>
    )
  } else {
    return <Astolfo />
  }
}

export default UserResults