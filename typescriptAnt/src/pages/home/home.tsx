import { Typography,Space } from 'antd';
const { Title, Paragraph } = Typography;
const HomePage = () => {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Typography>
        <Title level={2}>The Home Overview</Title>
        <Paragraph>
          Welcome to your HomePage. Here's what's happening today.
        </Paragraph>
      </Typography>
    </Space>
  );
};

export default HomePage;
