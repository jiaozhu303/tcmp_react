/* eslint-disable no-unused-vars,max-len */
import React from 'react'
import QueueAnim from 'rc-queue-anim'
import enquire from 'enquire.js'
import { scrollScreen } from 'rc-scroll-anim'

import Content0 from './Content0'

import './less/antMotion_style.less'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isMode: false,
      show: true
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    this.setState({
      isMode: this.state.isMode,
      show: !this.state.show
    })
  }

  componentDidMount () {
    // 适配手机屏幕;
    this.enquireScreen((isMode) => {
      this.setState({ isMode })
    })
  }

  enquireScreen = (cb) => {
    /* eslint-disable no-unused-expressions */
    enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
      match: () => {
        cb && cb(true)
      },
      unmatch: () => {
        cb && cb()
      }
    })
    /* eslint-enable no-unused-expressions */
  }

  render () {
    const login = [
      <Content0 id='content_0_0' key='content_0_0' className='banner0' isShow={this.onClick} isMode={this.state.isMode} />
    ]
    const main = [

    ]
    return (
      <div className='templates-wrapper'>
        <QueueAnim className='demo-content'>
          {this.state.show ? login : main}
        </QueueAnim>
      </div>
    )
  }
}
