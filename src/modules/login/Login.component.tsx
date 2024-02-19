'use client'

import { Form } from 'antd'
import Link from 'next/link'

import SocialButtons from '@/modules/common/components/social-buttons'
import Flex from '@/modules/common/components/flex'

import ROUTES from '@/modules/common/routes'

import {
  StyledButton,
  StyledInput,
  StyledFormItem,
  StyledParagraph
} from '@/modules/common/styles'

import { StyledFormWrapper, StyledWrapper } from './Login.styles'

import useLogin from './useLogin'

const Login = () => {
  const { handleSubmit } = useLogin()

  return (
    <StyledFormWrapper>
      <SocialButtons />
      <StyledWrapper>
        <Form onFinish={handleSubmit} layout="vertical" requiredMark={false}>
          <StyledFormItem
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email' }]}
          >
            <StyledInput
              type="email"
              name="email"
              placeholder="Jane@gmail.com"
            />
          </StyledFormItem>
          <StyledFormItem
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Please input your password' },
              {
                validator(_, value) {
                  if (!value || value.length > 8) {
                    return Promise.resolve()
                  }
                  return Promise.reject(
                    'Password needs to be at least 8 symbols'
                  )
                }
              }
            ]}
          >
            <StyledInput
              type="password"
              name="password"
              placeholder="********"
            />
          </StyledFormItem>
          <StyledButton htmlType="submit">Login</StyledButton>
        </Form>
        <Flex $margin="auto" $justifyContent="center">
          <StyledParagraph>
            Already have an account? <Link href={ROUTES.SIGN_UP}>Log in</Link>
          </StyledParagraph>
        </Flex>
      </StyledWrapper>
    </StyledFormWrapper>
  )
}

export default Login
