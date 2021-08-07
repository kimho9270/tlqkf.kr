import React,{useState} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {auth_icon} from '../../_actions/user_action';
import { Typography,Button,Form,message,Input,Icon } from 'antd'


function AuthIcon(props) {
    const dispatch = useDispatch();
    const [UserName, setUserName] = useState("")
    const [RiotInfo, setRiotInfo] = useState()
    const [AuthIcon, setAuthIcon] = useState()
    


    const onUserNameHandler = (event) => {
        setUserName(event.currentTarget.value)
        
    }
    const onSubmitHandler = (event) => {
        event.preventDefault()
        let body = {
            user_name:UserName
        }
        
        dispatch(auth_icon(body))
        .then(response => {
            if(response.payload.success){
                setRiotInfo(response.payload.RiotInfo)
                
            }else{
                alert('유저 정보를 가져올 수 없습니다')
            }

        })
        // axios.get('/api/register/auth_icon',body)
        // .then(response => {
        //     if(response.data.success){
        //         console.log(response.data.success)
        //     }else{
        //         console.log(response.data.success)
        //         }
        // })

        

        
    }
    const onAuthHandler = (event) => {
        
        event.preventDefault()
        console.log('hi')
        let body = {
            user_name:UserName
        }
        axios.post('/api/register/auth_icon',body)
        .then(response => {
            if(response.data.success){
                
                const auth_icon = response.data.RiotInfo
                if(1 === auth_icon.profileIconId){
                    message.success('성공적으로 인증 했습니다')
            
                setTimeout(() => {
                
                props.history.push('/')
            }, 1000)
                }else{
                    alert('인증에 실패했습니다.')
                }
            }
        })
    }



    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems:'center',flexDirection: 'column',
            width: '100%', height: '100vh'
        }}>
        <form style={{display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>유저 이름</label>
                <input name='user_name' type='text' value={UserName} onChange={onUserNameHandler} ></input>
                


                <br></br>
                <button type='submit'>
                유저 아이콘 정보 가져오기
                </button>
            </form>
            <br></br>
            {RiotInfo &&
            <form style={{display: 'flex', flexDirection: 'column'}}
                onSubmit={onAuthHandler}
                >
                <div>
                <label>현재 아이콘</label>
                <img src={`http://ddragon.leagueoflegends.com/cdn/11.15.1/img/profileicon/${RiotInfo.profileIconId}.png`} alt="icon" />
                <br></br>
                <label>변경 해야 할 아이콘</label>
                <img src={`http://ddragon.leagueoflegends.com/cdn/11.15.1/img/profileicon/1.png`}></img>
                <br></br>
                <button type='submit' >인증하기</button>
                </div>
            </form>
        }
        </div>
        
    )
    
}

export default AuthIcon
