import { Layout, Card, Input, Button, Typography, Divider,Form} from 'antd';
import { UseUsers } from '../../providers/authProvider';
import { useEffect} from 'react';
import { IUSER } from '../../providers/authProvider/context';
const { Content } = Layout;
const { Title} = Typography;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};


const SignUpPage = () => {
  const {createUser,UserCreated}=UseUsers();
  useEffect(()=>{
    if(UserCreated!=null){
      console.log(UserCreated,"from sign up page");
    }
  },[UserCreated])
  const onFinished=(values:IUSER)=>{
    console.log(values,"from the sign-up page");
    if(createUser){
      createUser(values)

    }
  }  
  const [form] = Form.useForm();
  const variant = Form.useWatch('variant', form);
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#f0f2f5'
      }}>
      <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card style={{  width: 400,
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            background: 'white',
            textAlign: 'center', }}>
      <Form
      {...formItemLayout}
      form={form}
      variant={variant || 'filled'}
      style={{ maxWidth: 600 }}
      initialValues={{ variant: 'filled' }}
      onFinish={onFinished}
    >
      <Title level={3}>Get Ready To Sign-Up</Title>
      <Divider></Divider>
      <Form.Item
        label="Firstname"
        name="Firstname"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Input style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Lastname"
        name="Lastname"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Input style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Email"
        name="Email"
        rules={[{ required: true, message: 'Please input!' }]}
        
      >
        <Input
        allowClear/>
      </Form.Item>
      <Form.Item
        label="Username"
        name="CreatedUsername"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Input
        allowClear />
      </Form.Item>

      <Form.Item
        label="Password"
        name="CreatedPassword"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input  type="password" placeholder="Password" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="ConfrimPassword"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input  type="password" placeholder="Confrim password" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
         </Card>
      </Content>
      </div>
  );
};

export default SignUpPage;
