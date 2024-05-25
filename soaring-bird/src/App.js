import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from './Header';
import ImgCarousel from './ImgCarousel';
import AppFooter from './Footer';
import Artists from './Artists';
import './index.css';

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout className="layout">
        <AppHeader />
        <Content className="site-layout-content">
          <Routes>
            <Route path="/" element={<ImgCarousel />} />
            <Route path="/artists" element={<Artists />} />
          </Routes>
        </Content>
        <AppFooter />
      </Layout>
    </Router>
  );
};

export default App;