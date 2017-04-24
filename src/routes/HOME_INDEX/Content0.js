/* eslint-disable react/no-unused-prop-types */
import React, { PropTypes } from 'react'
import QueueAnim from 'rc-queue-anim'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import Login from './Login'
import log from './assets/logging_logo.png'

class Content extends React.Component {
  constructor (props){
    super(props)
    this.props = props;
  }
  render () {
    const props = { ...this.props }
    delete props.isMode
    return (
      <OverPack
        replay
        playScale={[0.3, 0.1]}
        {...props}
      >
        <QueueAnim
          type={['bottom', 'top']}
          delay={200}
          className={`${props.className}-wrapper`}
          key='text'
          id={`${props.id}-wrapper`}
        >
          <span
            className='title'
            key='title'
            id={`${props.id}-title`}
          >
            <img width='100%' src={log} />
          </span>
          <p
            key='content'
            id={`${props.id}-content`}
          />
          <div className="title">
            <Login></Login>
          </div>

        </QueueAnim>

      </OverPack>
    )

  }
}

Content.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string
}

Content.defaultProps = {
  className: 'banner0'
}

export default Content
