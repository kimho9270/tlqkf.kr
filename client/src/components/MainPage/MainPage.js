import React, { useEffect,useState } from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { Layout } from 'antd';
import { Input, Space,Typography } from 'antd';
const {Title} = Typography
const { Search } = Input;




function MainPage(props) {


    const { Header, Footer, Sider, Content } = Layout;
    const onSearch = value => window.location.href = `/search/${value}`
 
    return (
<div style={{display: 'flex', justifyContent: 'center', alignItems:'center',
            width: '100%', height: '100vh'
      }}>
      <Layout>
      <Header style={{display: 'flex', justifyContent: 'center' , backgroundColor:'white'}}>
        <Title>tlqkf.kr</Title>
      </Header>
      
      <Content style={{display: 'flex', justifyContent: 'center',backgroundColor:'white'
           }}>
             
             
              <Search
      style={{width:'30%'}}
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
    
    </Content>
      
    </Layout>



    </div>
    )
}

export default MainPage
