import { useState, useEffect } from 'react'
import { getAuth } from 'firebase/auth'

function Profile() {
  const [user, setUser] = useState(null)

  const auth = getAuth()
  useEffect(() => {
    console.log(auth.currentUser)
    setUser(auth.currentUser)
  }, [])
  return user ? <h1>{user.displayName}</h1> : <p>'Not Logged In'</p>
}

export default Profile
