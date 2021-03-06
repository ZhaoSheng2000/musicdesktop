import React from 'react'
import {Form, Input, Button, Card} from 'antd';
import {PhoneOutlined, LockOutlined} from '@ant-design/icons';

import { reqPhoneLogin } from '../../api/index'

const { ipcRenderer } = window.require('electron');


export default class Login extends React.Component {
    state = {
        type:"手机号"
    };
    componentDidMount() {
        ipcRenderer.send('asynchronous-message', '这是渲染进程发送给胡锦城的消息')   
        ipcRenderer.on('asynchronous-reply', (event, arg) => {
            console.log(arg) 
          })   
  }
    onFinish = (e) => {
        console.log(e)
    };
    render() {
        return (
            <div style={{
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: window.innerHeight,
                // backgroundImage: "url(" + require("./loginbg2.jpg") + ")",
                backgroundImage: "url(https://p1.music.126.net/Oq3EQRMgwK2AYvp3hlXlpQ==/109951165418425655)",
                // backgroundColor: '#161616'
            }}
            >
                <Card
                    title={this.state.type+'登录'}
                    style={{
                        width: 380,
                    }}>
                    <Form
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="phone"
                            rules={[{required: true,  message: '请输入您的手机号！'}]}
                        >
                            <Input prefix={<PhoneOutlined />} placeholder="Phone"/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{required: true, message: '请输入您的密码！'}]}
                        >
                            <Input
                                prefix={<LockOutlined/>}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                登 录
                            </Button>
                            <Button type="link" htmlType="button" onClick={this.onFill}>
                             Fill form
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}