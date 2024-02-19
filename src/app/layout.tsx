import type { Metadata } from 'next'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { Cabin } from 'next/font/google'
import { isLoggedIn } from '@/utils'
import { getServerSession } from 'next-auth'

import StyledComponentsRegistry from '@/modules/common/components/registry'
import SessionProvider from '@/modules/common/components/session-provider'

import Container from '@/modules/common/components/container'
import Header from '@/modules/common/components/header'

import './globals.css'

export const metadata: Metadata = {
  title: 'AI Ignition',
  description: 'AI Ignition'
}

const cabin = Cabin({ subsets: ['latin'], variable: '--font-cabin' })

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession()

  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={cabin.className}>
          <StyledComponentsRegistry>
            <AntdRegistry>
              <Header isLoggedIn={await isLoggedIn()} />
              <Container>{children}</Container>
            </AntdRegistry>
          </StyledComponentsRegistry>
        </body>
      </SessionProvider>
    </html>
  )
}
