import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

import { SALT_OR_ROUNDS } from '@/modules/common/constants'

const POST = async (request: Request) => {
  try {
    const { email, password } = await request.json()

    const hashedPassword = await hash(password, SALT_OR_ROUNDS)

    const response = await sql`
    INSERT INTO users (email, password)
    VALUES (${email}, ${hashedPassword})
    `
  } catch (e) {}

  return NextResponse.json({ message: 'success ' })
}

export { POST }
