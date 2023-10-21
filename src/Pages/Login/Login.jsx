import React from 'react';
import { Col, Row } from 'antd';
import './Login.css';
import loginbanner from '../../assets/login-banners.jpg';
import { Button, Checkbox, Form, Input } from 'antd';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    DownOutlined,
} from '@ant-design/icons';
import { Footer } from 'antd/es/layout/layout';

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


const Login = () => {
    return (
        <div>
            <Row justify="center" align="middle" style={{ height: '100vh', padding: '20px' }}>
                <Col xs={0} sm={0} md={12} lg={12} xl={12} className='login-banner'>
                    <img src={loginbanner} alt="loginbanner" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={7} className='login-form'>
                    <h1>Vehicle Tracking System</h1>
                    <p>Login to continue</p>

                    <Form
                        layout='vertical'
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input suffix={<UserOutlined />} placeholder='name@example.com' />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password placeholder='*************' />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" shape="round" >LOGIN</Button>
                        </Form.Item>
                    </Form>
                </Col>


            </Row>

            <Footer style={{ position: 'fixed', bottom: '0', left: '0', right: '0' }}>
                <p>Copyright ©2023 All right reserved</p>
                <p>Care & created by ISPL™</p>
            </Footer>
        </div>



    )
}

export default Login