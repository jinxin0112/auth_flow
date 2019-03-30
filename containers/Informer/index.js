/*
 *
 * Informer
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import Modal from 'components/Modal'
import { ICON_CMD } from 'config'

import { makeDebugger, storePlug } from 'utils'
import { Wrapper, Title, Icon } from './styles'

import Header from './Header'
import Overview from './Overview'
import Form from './Form'

import * as logic from './logic'
/* eslint-disable-next-line */
const debug = makeDebugger('C:Informer')

class InformerContainer extends React.Component {
  componentDidMount() {
    const { informer } = this.props
    logic.init(informer)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { informer, title, children } = this.props
    const { showModal, curView, viewingData, type, message } = informer

    return (
      <React.Fragment>
        <Modal
          width="500px"
          show={showModal}
          showCloseBtn
          onClose={logic.toggleModal}
        >
          <React.Fragment>
            <Header data={viewingData} />
            {curView === 'form' ? (
              <Form type={type} message={message} />
            ) : (
              <Overview />
            )}
          </React.Fragment>
        </Modal>
        <React.Fragment>
          {children ? (
            <React.Fragment>{children}</React.Fragment>
          ) : (
            <Wrapper onClick={logic.toggleModal}>
              <Icon src={`${ICON_CMD}/flag.svg`} />
              <Title>{title}</Title>
            </Wrapper>
          )}
        </React.Fragment>
      </React.Fragment>
    )
  }
}

InformerContainer.propTypes = {
  // https://www.npmjs.com/package/prop-types
  title: PropTypes.string,
  informer: PropTypes.any.isRequired,
  children: PropTypes.node,
}

InformerContainer.defaultProps = {
  title: '举报内容',
  children: null,
}

export default inject(storePlug('informer'))(observer(InformerContainer))
