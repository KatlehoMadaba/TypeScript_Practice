import { Layout, Typography, Button, Row, Col, Card } from 'antd';
const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
const SplashPage= () => {
  return (
<>
      {/* HEADER */}
      <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#001529', padding: '0 50px' }}>
        <Title level={3} style={{ color: 'white', margin: 0 }}>Libarary</Title>
        <Button type="primary" size="large">Get Started</Button>
      </Header>
      {/* HERO SECTION */}
      <Content style={{ textAlign: 'center', padding: '100px 50px', background: '#f5f5f5' }}>
        <Title level={1}>Welcome to MyApp</Title>
        <Paragraph style={{ fontSize: '18px', maxWidth: '600px', margin: 'auto' }}>
          The best platform to manage your tasks efficiently and boost productivity.
        </Paragraph>
        <Button type="primary" size="large" style={{ marginTop: '20px' }}>Get Started</Button>
      </Content>

      {/* FEATURES SECTION */}
      <Content style={{ padding: '50px', textAlign: 'center' }}>
        <Title level={2}>Why Choose Us?</Title>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <Card bordered={false} style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <Title level={3}>Fast & Secure</Title>
              <Paragraph>Experience top-notch security and blazing fast performance.</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card bordered={false} style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <Title level={3}>User Friendly</Title>
              <Paragraph>Simple and intuitive design for all types of users.</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card bordered={false} style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <Title level={3}>24/7 Support</Title>
              <Paragraph>Our team is always ready to assist you at any time.</Paragraph>
            </Card>
          </Col>
        </Row>
      </Content>

      {/* FOOTER */}
      <Footer style={{ textAlign: 'center', background: '#001529', color: 'white' }}>
        MyApp ©{new Date().getFullYear()} - Built with ❤️ using Ant Design
      </Footer>
      </>
  );
};

export default SplashPage;
