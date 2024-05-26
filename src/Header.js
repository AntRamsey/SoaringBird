import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ backgroundColor: 'black' }}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/artists">Artists</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;