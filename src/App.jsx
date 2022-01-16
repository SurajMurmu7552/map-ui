import React, { useState } from 'react';
import { Layout, Menu, Typography, Row, Col } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import FormInput from './components/FormInput';

import 'antd/dist/antd.css';
import './App.css';
import ViewMap from './components/ViewMap';
import RegionInfo from './components/RegionInfo';

const { Header, Footer, Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

function App() {
  const [collapsed, setCollapsed] = useState(true);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="App">
      <Header className="App-header">
        <Row justify="space-between" align="middle">
          <Col span={4}>
            <Title level={3} style={{ color: '#fff', margin: '0' }}>
              Map UI
            </Title>
          </Col>
          <Col span={4}>
            <Menu mode="horizontal" theme="dark">
              <Menu.Item key="1">Login/Logout</Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                Profile
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
      <Layout className="App-hero">
        <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
          <Menu mode="inline">
            <Menu.Item
              key="1"
              onClick={toggle}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            >
              Menu
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="3" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="4" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Content className="hero-content">
          <div className="content-float">
            <FormInput />
            <RegionInfo />
          </div>
          <ViewMap />
        </Content>
      </Layout>
      <Footer className="App-footer">
        <Paragraph style={{ margin: '0' }}>Made with &#10084;</Paragraph>
      </Footer>
    </Layout>
  );
}

export default App;
