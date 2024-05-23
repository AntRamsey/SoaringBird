
import './App.css';
import { Carousel, Flex, Layout } from 'antd';

const contentStyle = {
  textAlign: 'center',
  minHeight: '36rem',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const { Header, Footer, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};


const footerStyle = {
  textAlign: 'center',
  lineHeight: '40px',
  color: '#fff',
  backgroundColor: '#4096ff',
};

const layoutStyle = {
  overflow: 'hidden',
  width: '100%',
};

const App = () => {
  return (
    <div className="App">

    <Layout style={layoutStyle}>

      <Header style={headerStyle}>Header</Header>

      <Content style={contentStyle}>
        <Carousel arrows infinite={true}>
          <div>
            <img src='/images/alley.jpg'/>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </Content>

      <Footer style={footerStyle}>Footer</Footer>

    </Layout>
    </div>
  );
}

export default App;
