/*
 *
 * UserStared
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import PagedContents from 'components/PagedContents'
import ThreadSelector from 'components/ThreadSelector'
import { makeDebugger, storePlug, THREAD } from 'utils'
import { ThreadWrapper } from './styles'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:UserStared')

class UserStaredContainer extends React.Component {
  componentDidMount() {
    const { userStared } = this.props
    logic.init(userStared)
  }

  render() {
    const { userStared } = this.props
    const {
      pagedData,
      curView,
      curThread,
      viewingUser,
      accountInfo,
    } = userStared

    const { totalCount } = pagedData

    return (
      <React.Fragment>
        <ThreadWrapper>
          <ThreadSelector
            active={curThread}
            onSelect={logic.onThreadChange}
            totalCount={totalCount}
            lookLike="box"
            options={[THREAD.POST, THREAD.JOB, THREAD.VIDEO]}
          />
        </ThreadWrapper>

        <PagedContents
          data={pagedData}
          thread={curThread}
          curView={curView}
          accountInfo={accountInfo}
          emptyPrefix={`未找到 ${viewingUser.nickname} 喜欢的`}
          onPageChange={logic.reload}
          onPreview={logic.onPreview}
        />
      </React.Fragment>
    )
  }
}

export default inject(storePlug('userStared'))(observer(UserStaredContainer))
