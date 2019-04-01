import React from 'react'

import FormItem from 'components/FormItem'
import { Wrapper, Divider, FormTitle, Label, LabelHint } from './styles/forms'

import { inputOnChange } from './logic'

const Forms = ({ data: { accountName, passport } }) => (
  <Wrapper>
    <FormTitle>
      <Label>用户名或邮箱地址注册</Label>
      <LabelHint>--</LabelHint>
    </FormTitle>
    <FormItem
      size="default"
      value={accountName}
      onChange={inputOnChange.bind(this, 'accountName')}
      bottom="0"
    />

    <Divider />
    <FormTitle>
      <Label>密码</Label>
      <LabelHint>--</LabelHint>
    </FormTitle>
    <FormItem
      size="default"
      contentType="password"
      value={passport}
      onChange={inputOnChange.bind(this, 'passport')}
      bottom="0"
    />
  </Wrapper>
)

export default Forms
