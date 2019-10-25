import React from 'react';
// import ReactDom from 'react-dom'
import { Icon, Input, Layout, Typography, Empty, Menu, } from 'antd'
import 'antd/dist/antd.css';
import './App.css';



const { Header, Content, Footer, } = Layout;
const { Title } = Typography;
const { Search } = Input;





function App() {






  return (

    <Layout className="layout">

      <Header>
        <div className="logo" />
        <Title>Movie List App</Title>
      </Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}>
        <Menu.Item key="1">Lista Filme</Menu.Item>
        <Menu.Item key="2">Adauga Film</Menu.Item>
      </Menu>



      <Search placeholder="Search movie" onSearch={value => console.log(value)} enterButton />
      <Content style={{ padding: '0 50px' }}>


        <div style={{ background: '#fff', padding: 24, minHeight: 600 }}><Empty></Empty></div>
      </Content>
      <Footer style={{ textAlign: 'center' }}> <Icon type="copyright" /> 2019 Created by Andrei </Footer>

    </Layout>


  );
}




export default App;
