'use client'

import { signOut } from 'next-auth/react'

const Logout = () => {
  return (
    <span
      onClick={() => {
        signOut()
      }}
    >
      lgout
    </span>
  )
}

export default Logout
