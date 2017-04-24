/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import enquire from 'enquire.js'
import { scrollScreen } from 'rc-scroll-anim'

import Content0 from './Content0'

import './less/antMotion_style.less'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isMode: false
    }
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
    const children = [
      <Content0 id='content_0_0' key='content_0_0' className="banner0" isMode={this.state.isMode} />
    ]
    return (
      <div className='templates-wrapper'>
        {children}
      </div>
    )
  }
}
