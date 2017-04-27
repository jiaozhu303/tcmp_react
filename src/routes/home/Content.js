import React, { PropTypes } from 'react'
import QueueAnim from 'rc-queue-anim'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import Login from './LoginForm'
import log from './assets/logging_logo.png'

class Home extends React.Component {
  constructor (props){
    super(props)
    this.props = props;
  }
  render () {
    const props = { ...this.props }
    delete props.isMode;
    delete props.isShow;
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
          <div className="content">
            <Login isShow={this.props.isShow}></Login>
          </div>

        </QueueAnim>

      </OverPack>
    )

  }
}

Home.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string
}

Home.defaultProps = {
  className: 'banner0'
}

export default Home
