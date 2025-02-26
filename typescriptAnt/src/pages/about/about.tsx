import { Typography,Space } from 'antd';
const { Title, Paragraph } = Typography;
const AboutPage = () => {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Typography>
        <Title level={2}>The about Overview</Title>
        <Paragraph>
          Welcome to your adminPage. Here's what's happening today.
        </Paragraph>
      </Typography>

    </Space>
  );
};

export default AboutPage;
