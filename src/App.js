import React from 'react';
import { Layout } from 'antd';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from './Header';
import ImgCarousel from './ImgCarousel';
import AppFooter from './Footer';
import Artists from './Artists';
import ArtistPage from './ArtistPage';
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
            <Route path="/artists/:artistName" element={<ArtistPage />} />
          </Routes>
        </Content>
        <AppFooter />
      </Layout>
    </Router>
  );
};

export default App;
