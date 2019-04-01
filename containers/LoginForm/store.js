/*
* LoginForm store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from 'utils'
/* eslint-disable-next-line */
const debug = makeDebugger('S:LoginForm')

const LoginForm = t
  .model('LoginForm', {
    // username or email
    accountName: t.optional(t.string, ''),
    password: t.optional(t.string, ''),
    // phone number's verification code
    verifyCode: t.optional(t.string, ''),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },

    get formData() {
      const { accountName, password } = self

      return { accountName, password }
    },
  }))
  .actions(self => ({
    updateEditing(sobj) {
      return self.markState({ ...sobj })
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default LoginForm
