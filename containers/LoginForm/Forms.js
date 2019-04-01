import React from 'react'

// import { ICON_CMD } from '../../config'
import FormItem from 'components/FormItem'
import VerificationCodeInput from './VerificationCodeInput'

import { Wrapper, Divider, FormTitle, Label, LabelHint } from './styles/forms'

import { inputOnChange } from './logic'

const Forms = ({ data: { accountName, password } }) => (
  <Wrapper>
    <FormTitle>
      <Label>手机号</Label>
      <LabelHint>--</LabelHint>
    </FormTitle>
    <FormItem
      size="default"
      value={accountName}
      onChange={inputOnChange.bind(this, 'accountName')}
      bottom="0"
    />
    <Divider />

    <VerificationCodeInput />
    <Divider />

    <FormTitle>
      <Label>密码</Label>
      <LabelHint>忘记密码?</LabelHint>
    </FormTitle>
    <FormItem
      size="default"
      contentType="password"
      value={password}
      onChange={inputOnChange.bind(this, 'password')}
      bottom="0"
    />
  </Wrapper>
)

export default Forms
