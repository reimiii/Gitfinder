import { useEffect, useState } from 'react'
import { Astolfo, UserItem } from '../index'

function UserResults() {
  const [ users, setUsers ] = useState([])
  const [ astolfo, setAstolfo ] = useState(true)


  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    })

    const data = await response.json()
    setUsers(data);
    // console.log(data)
    setAstolfo(false)
  }

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