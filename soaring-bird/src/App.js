import React from 'react';
import { Layout } from 'antd';
import AppHeader from './Header';
import ImgCarousel from './ImgCarousel';
import AppFooter from './Footer';
import './index.css'; // Ensure you import the CSS file

const { Content } = Layout;

const App = () => {
  return (
    <Layout className="layout">
      <AppHeader />
      <Content className="site-layout-content">
        <ImgCarousel />
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default App;