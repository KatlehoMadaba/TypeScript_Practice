import React from 'react';
import { Card, Space } from 'antd';
interface CardsProps{
  children:React.ReactNode;
}
const Cards: React.FC<CardsProps> = (props) => (
  <Space direction="vertical" size={16}>
    <Card title="Login Please"  style={{ width: 300 }}>
    {props.children}
    </Card>
  </Space>
);

export default Cards;