import React,{useEffect, useState} from 'react'
import { Typography,Button,Form,message,Input,Icon,Col,Row,Title,Space, Card } from 'antd'
import axios from 'axios';


import { Layout } from 'antd';
import ReactDOM from 'react-dom';

const async = require('async')








function SearchPage(props) {

    const ColStyle = {
        display:'flex'
        ,
        justifyContent:'center',
        alignItems:'center',
        padding:'5px'
    }
    const [SearchName, setSearchName] = useState(props.match.params.String)
    
    const [Matchs, setMatchs] = useState([])
    const [MoreView, setMoreView] = useState(0)
    const [MatchInfo, setMatchInfo] = useState([])
    const [DbClick, setDbClick] = useState(false)
    const {Title} = Typography

    useEffect(() => {
        
        matchs(SearchName)
        

    },[])

    useEffect(()=> {
        console.log(Matchs)
        
        if(Matchs.length === 3){
        
        Matchs.sort((a,b) => {
            return b.info.gameCreation - a.info.gameCreation 
        })
        Matchs.map((match,i) => {
            let User = match.info.participants
            setMatchInfo(MatchInfo => MatchInfo.concat(
            <Card title='MatchInfo'>
            <Row >
            <Col span={12} style={ColStyle}>{User.map((user,i) => {
                
                if(user.summonerName === SearchName){
                    return (<div>champ:{user.championName} {user.kills}/{user.deaths}/{user.assists}</div>
                            
                        )
                }
                
            })}</Col>




        
            <Row>
            <Col span={12} style={ColStyle}>
            
            <Space direction="vertical" >
            {User.map((user,i) => {
                if(i>=5){
                    return <Col>{user.championName}</Col>
                }
                
               
            })}
            </Space>
            
            </Col>
            
            <Col span={12} style={ColStyle}>
            
            <Space direction="vertical" >
            {User.map((user,i) => {
                if(i<=5){
                    return <Col>{user.championName}</Col>
                }
                
               
            })}
            </Space>
            
            </Col>
            </Row>

            

            </Row>
            </Card>
            )
            )
        })
        
       
        setMatchs([])
        setDbClick(false)
    }
        
    },[Matchs])

    const matchs = (searchName)=> {
        let body = {
            user_name:searchName
        }
        console.log(body.user_name)
        axios.post('/api/register/auth_icon',body)
        .then(response => {
            if(response.data.success){
                

                axios.post('/api/search/search_user',[response.data.RiotInfo,MoreView])
                .then(response => {
                    setMoreView(MoreView => MoreView+3)
                    if(response.data.success){
                        const matchID = response.data.matchID
                         matchID.map( (match_id,i) => {
                             axios.post('/api/search/match', [match_id] )
                            .then(  response => {
                                
                                 setMatchs(Matchs => Matchs.concat(response.data.match))
                                 
                            })
                            
                        })
                        
                              
                    }else{
                        console.log(response.data.success)
                        console.log(response.data.err)
                        alert('실패')
                    }
                })
            }else{
                console.log(response.data.success)
                }
        })
    }
    
    

    
    const onSubmitHandler =  (e) => {
        e.preventDefault()
        
        setDbClick(true)
        let body = {
            user_name:SearchName
        }
        
        axios.post('/api/register/auth_icon',body)
        .then(response => {
            if(response.data.success){
                

                axios.post('/api/search/search_user',[response.data.RiotInfo,MoreView])
                .then(response => {
                    setMoreView(MoreView => MoreView+3)
                    if(response.data.success){
                        const matchID = response.data.matchID
                         matchID.map( (match_id,i) => {
                             axios.post('/api/search/match', [match_id] )
                            .then(  response => {
                                
                                 setMatchs(Matchs => Matchs.concat(response.data.match))
                                 
                            })
                            
                        })
                        
                              
                    }else{
                        console.log(response.data.err)
                        alert('실패')
                    }
                })
            }else{
                console.log(response.data.err)
                }
        })
        
        
        
    }



    
    const { Header, Footer, Sider, Content } = Layout;

    
    return (
        
        
<div style={{display: 'flex', justifyContent: 'center', 
            width: '100%', height: '100vh',backgroundColor:'white'
      }}>
      <Layout style={{backgroundColor:'white'}}>
      <Header style={{display: 'flex', justifyContent: 'center' , backgroundColor:'white'}}>Header</Header>
      <Header style={{backgroundColor:'white',display: 'flex', justifyContent: 'center'}}>{SearchName}</Header>
    <Layout style={{marginLeft:'15rem' , marginRight:'15rem',backgroundColor:'white'}}>
    
    <Sider style={{display:'flex',backgroundColor:'white',justifyContent:'center' }}>Sider</Sider>
    <Content style={{display:'flex',backgroundColor:'white',justifyContent:'center' }}>

    <Space direction="vertical" style={{width:'80%'}}>
      
      {MatchInfo}
    </Space>
    </Content>
      </Layout>
       
      
      
      
      </Layout>
     
      
      </div>
        
            
    )
}

export default SearchPage
