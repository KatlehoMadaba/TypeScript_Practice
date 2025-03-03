import { Layout, Card, Input, Button, Typography, Divider } from 'antd';
import { GoogleOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
const { Content } = Layout;
const { Title, Text } = Typography;

const SignUpPage = () => {
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
          <Title level={3}>Sign in to Your App</Title>

          <Button type="default" icon={<GoogleOutlined />} block style={{ marginBottom: '10px' }}>
            Continue with Google
          </Button>

          <Divider>or</Divider>

          <Input
            prefix={<UserOutlined />}
            placeholder="Email"
            style={{ marginBottom: '10px', padding: '10px' }}
          />
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Password"
            style={{ marginBottom: '20px', padding: '10px' }}
          />

          <Button type="primary" block style={{ backgroundColor: 'black', borderColor: 'black' }}>
            Log in
          </Button>

          <Text style={{ display: 'block', marginTop: '10px' }}>
            <a href="#">Forgot password?</a>
          </Text>
          <Text style={{ display: 'block', marginTop: '10px' }}>
            No account? <a href="#">Create one</a>
          </Text>
        </Card>
      </Content>
      </div>
  );
};

export default SignUpPage;
