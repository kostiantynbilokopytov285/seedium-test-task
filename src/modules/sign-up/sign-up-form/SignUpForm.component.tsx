'use client'

import { Button, Checkbox, Form, Input, Typography } from 'antd'
import Link from 'next/link'

import Flex from '@/modules/common/components/flex'
import {
  TERMS_OF_SERVICE_LINK,
  PRIVACY_POLICY_LINK
} from '@/modules/common/constants'
import ROUTES from '@/modules/common/routes'

import { StyledFormWrapper } from './SignUpForm.styles'
import useSignUpForm from './useSignUpForm'

const { Paragraph } = Typography

const SignUpForm = () => {
  const { handleSubmit } = useSignUpForm()

  return (
    <StyledFormWrapper>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Flex>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input type="text" name="firstName" />
          </Form.Item>
          <Form.Item label="Last Name" name="lastName">
            <Input type="text" name="lastName" />
          </Form.Item>
        </Flex>
        <Flex $flexDirection="column">
          <Form.Item label="Email" name="email">
            <Input type="email" name="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input type="password" name="password" />
          </Form.Item>
        </Flex>
        <Form.Item name="remember" valuePropName="checked" required>
          <Checkbox>Subscribe to our monthly newsletter</Checkbox>
        </Form.Item>
        <Paragraph>
          By clicking below you agree to our{' '}
          <Link
            href={TERMS_OF_SERVICE_LINK}
            rel="noopener noreferrer"
            target="_blank"
          >
            Terms of Service
          </Link>{' '}
          and
          <Link
            href={PRIVACY_POLICY_LINK}
            rel="noopener noreferrer"
            target="_blank"
          >
            {' '}
            Privacy Policy
          </Link>
        </Paragraph>
        <Button htmlType="submit">Sign Up</Button>
        <Paragraph>
          Already have an account? <Link href={ROUTES.LOGIN}>Log in</Link>
        </Paragraph>
      </Form>
    </StyledFormWrapper>
  )
}

export default SignUpForm
