import React from 'react';
// import ReactDom from 'react-dom'
import { Layout, Icon, } from 'antd';
import Header from './Shared/Header/Header';
import { Home } from './Shared/Pages/Home/Home'
import 'antd/dist/antd.css';
import './App.css';



const { Content, Footer } = Layout;

function App() {
  return (

    <Layout style={{ minHeight: "100vh" }}>
      <Header />

      <Content style={{ padding: '0 50px' }}>
        <Home />
       

      </Content>
      <Footer style={{ textAlign: 'center' }}> <Icon type="copyright" /> 2019 Created by TAG </Footer>
    </Layout>


  );
}




export default App;
