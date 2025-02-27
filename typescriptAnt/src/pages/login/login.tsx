
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, message } from 'antd';
import Cards from '../../components/Cards'
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
<Cards>
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
      placeholder='Username(client/admin)'
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
    </Cards>
};

export default Login;