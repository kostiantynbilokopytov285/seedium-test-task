import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

import { compare } from 'bcrypt'
import { sql } from '@vercel/postgres'

const handler = NextAuth({
  session: { strategy: 'jwt' },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    CredentialsProvider({
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials, req) {
        const response = await sql`
            SELECT * FROM users WHERE email=${credentials?.email}`

        const user = response.rows[0]

        const isPasswordValid = await compare(
          credentials?.password ?? '',
          user.password
        )

        if (isPasswordValid)
          return {
            id: user.id,
            email: user.email
          }

        return null
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }
