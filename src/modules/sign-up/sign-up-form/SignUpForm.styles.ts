import styled from 'styled-components'
import { Form, Button, Input } from 'antd'

export const StyledFormWrapper = styled.div`
  background-color: #ffffff;
  padding: 0 0 37px 0;
  max-width: 472px;
`

export const StyledForm = styled(Form)`
  &.ant-form-item .ant-form-item-explain-error {
    color: #e11d48;
    font-family: var(--font-cabin);
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
  }
`

export const StyledInput = styled(Input)`
  &.ant-input-outlined {
    border: none;
    border-bottom: 1px solid #4c4d4f;
    border-radius: 0;
    padding: 0 0 8px 0;
    width: 100%;
  }

  &.ant-input-outlined:hover {
    border: none;
    border-bottom: 1px solid #4c4d4f;
    border-radius: 0;
    padding: 0 0 8px 0;
  }

  &.ant-input-outlined:focus {
    background: none;
    border-bottom: 1px solid #4c4d4f;
    border-radius: 0;
    box-shadow: none;
  }

  &.ant-input-outlined.ant-input-status-error:not(.ant-input-disabled):focus {
    border-radius: 0;
    background: none;
    box-shadow: none;
  }

  &.ant-input-outlined.ant-input-status-error:not(.ant-input-disabled):focus {
    border-bottom: 1px solid #e11d48;
  }

  &.ant-input-outlined.ant-input-status-error:not(.ant-input-disabled) {
    border: none;
    border-bottom: 1px solid #e11d48;
  }
`

export const StyledButton = styled(Button)`
  &.ant-btn-default {
    all: unset;
    background: #000000;
    font-family: var(--font-cabin);
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    text-align: center;
    color: #ffffff;
    width: 100%;
    border-radius: 24px;
    padding: 13px 0;
    margin: 0 0 8px 0;
  }

  &.ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover  {
    all: unset;
    background: #000000;
    font-family:var(--font-cabin) 
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    text-align: center;
    color: #ffffff;
    width: 100%;
    border-radius: 24px;
    padding: 13px 0;
  }
`

export const StyledFormItem = styled(Form.Item)`
  &.ant-form-item {
    width: 100%;
  }
`
