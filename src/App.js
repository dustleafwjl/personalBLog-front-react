import React from 'react';
import { Layout } from 'antd';

import DLHeader from './layout/DLHeader';

import './App.css';

const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: '#fff' }} >
          <DLHeader></DLHeader>
        </Header>
        <Layout>
          <Content>Content</Content>
          <Sider>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
