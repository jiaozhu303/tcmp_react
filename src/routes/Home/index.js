/* eslint-disable no-unused-vars,max-len */
import React from 'react'
import QueueAnim from 'rc-queue-anim'
import enquire from 'enquire.js'
import { scrollScreen } from 'rc-scroll-anim'

import Content from './Content'

import CoreLayout from '../../layouts/CoreLayout'

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
      <Content id='content_0_0' key='content_0_0' className='banner0' isShow={this.onClick} isMode={this.state.isMode} />
    ]
    const main = [
        <CoreLayout >
            <div>content</div>
        </CoreLayout>
    ]
    return (
      <div className='templates-wrapper'>
        <QueueAnim className='demo-content'
                   animConfig={[
                       { opacity: [1, 0], translateY: [0, 50] },
                       { opacity: [1, 0], translateY: [0, -50] }
                   ]}
        >
          {this.state.show ? login : main}
        </QueueAnim>
      </div>
    )
  }
}
