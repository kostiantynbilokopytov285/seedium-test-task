'use client'

import { Checkbox, Form, Typography } from 'antd'
import Link from 'next/link'

import Flex from '@/modules/common/components/flex'
import {
  TERMS_OF_SERVICE_LINK,
  PRIVACY_POLICY_LINK
} from '@/modules/common/constants'
import ROUTES from '@/modules/common/routes'

import {
  StyledButton,
  StyledFormWrapper,
  StyledInput,
  StyledFormItem
} from './SignUpForm.styles'
import useSignUpForm from './useSignUpForm'

const { Paragraph } = Typography

const SignUpForm = () => {
  const { handleSubmit } = useSignUpForm()

  return (
    <StyledFormWrapper>
      <Form layout="vertical" requiredMark={false} onFinish={handleSubmit}>
        <Flex $flexDirection="column" $gap="32px" $width="100%">
          <Flex $justifyContent="space-between" $gap="32px">
            <StyledFormItem
              label="First Name"
              name="firstName"
              rules={[
                { required: true, message: 'Please input your first name' }
              ]}
            >
              <StyledInput type="text" name="firstName" placeholder="Jane" />
            </StyledFormItem>
            <StyledFormItem
              label="Last Name"
              name="lastName"
              rules={[
                { required: true, message: 'Please input your last name' }
              ]}
            >
              <StyledInput type="text" name="lastName" placeholder="Doe" />
            </StyledFormItem>
          </Flex>
          <Flex $flexDirection="column" $gap="32px">
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email' }]}
            >
              <StyledInput
                type="email"
                name="email"
                placeholder="Jane@gmail.com"
              />
            </Form.Item>
            <Form.Item
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
                placeholder="*********"
              />
            </Form.Item>
          </Flex>
        </Flex>
        <Form.Item name="remember" valuePropName="checked">
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
        <StyledButton htmlType="submit">Sign Up</StyledButton>
        <Paragraph>
          Already have an account? <Link href={ROUTES.LOGIN}>Log in</Link>
        </Paragraph>
      </Form>
    </StyledFormWrapper>
  )
}

export default SignUpForm
