'use client'
import { SessionProvider as Provider } from 'next-auth/react'

const SessionProvider = ({
  children,
  session
}: {
  children: React.ReactNode
  session: any
}): React.ReactNode => {
  return <Provider session={session}>{children}</Provider>
}

export default SessionProvider
