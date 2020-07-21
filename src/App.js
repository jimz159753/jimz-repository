import React from 'react';
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import { Layout } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Navbar />
        <Content>
          <AboutUs />
          <Projects />
          <Services />
        </Content>
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
