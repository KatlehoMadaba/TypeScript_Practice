
import type { FormProps } from 'antd';
import {Card,Button, Checkbox, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Login = () => {
const navigate=useNavigate();
const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    //if the user inputs admin details
    if(values.username === 'admin' && values.password === 'admin'){
        localStorage.setItem('auth_token','dummy_token_admin')
        localStorage.setItem('user_role','admin')
        message.success('Login successful!');
        navigate('/admin')
    }else if(values.username === 'client' && values.password === 'client'){ //if the user inputs admin details
        localStorage.setItem('auth_token','dummy_token_client')
        localStorage.setItem('user_role','client')
        message.success('Login successful!');
        navigate('/client')
    }else{
        message.error('Invalid credentials')
    }
    // console.log('Success:', values);
  };
  return(
    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      minHeight:'100vh',
      background:'#f0f2f5'
    }}
    >
<Card style={{width:400,padding:'24px'}}>
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}//dont really under stand is it like form submit ?
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    >
    <Form.Item<FieldType>
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
      >
      <Input 
      placeholder='username(client/admin)'
      />
    </Form.Item>

    <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        >
      <Input.Password />
    </Form.Item>

    <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Login
      </Button>
    </Form.Item>
  </Form>
    </Card>
    </div>

  );
};

export default Login;



    {/* <Card style={{  width: 400,
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            background: 'white',
            textAlign: 'center', }}>
          <Title level={3}>Sign in to Your App</Title>

          <Button type="default" icon={<GoogleOutlined />} block style={{ marginBottom: '10px' }}>
            Continue with Google
          </Button>

          <Divider>or</Divider>

          

          <Button type="primary" block style={{ backgroundColor: 'black', borderColor: 'black' }}>
            Log in
          </Button>

          <Text style={{ display: 'block', marginTop: '10px' }}>
            <a href="#">Forgot password?</a>
          </Text>
          <Text style={{ display: 'block', marginTop: '10px' }}>
            No account? <a href="#">Create one</a>
          </Text>
        */}