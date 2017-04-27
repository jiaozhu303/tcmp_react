/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'
const FormItem = Form.Item
import './index.scss'

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values)
    //   }
    // })
    this.props.isShow();
    console.log(this.props);
  }

  render () {
    const {getFieldDecorator} = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className='login-form'>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{required: true, message: 'Please input your username!'}]
          })(
            <Input prefix={<Icon type='user' style={{fontSize: 16}}/>} placeholder='Username'/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{required: true, message: 'Please input your Password!'}]
          })(
            <Input prefix={<Icon type='lock' style={{fontSize: 16}}/>} type='password' placeholder='Password'/>
          )}
        </FormItem>
        <FormItem>

          <Button type='primary' htmlType='submit'  className='login-form-button'>
            Log in
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(Login)
