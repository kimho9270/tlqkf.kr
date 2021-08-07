const express = require('express');
const router = express.Router();
const RiotRequest = require('riot-lol-api');
const apiKey = require('../apiKey')
var riotRequest = new RiotRequest(apiKey.apiKey);

router.post('/auth_icon',(req,res)=>{
    const user_name = req.body.user_name
    if(user_name){
        riotRequest.request('kr',
        'summoner',
        encodeURI(`/lol/summoner/v4/summoners/by-name/${user_name}`),
        (err,data) => {
            if(err) return res.json({success:false , err})
            return res.json({success : true , RiotInfo : data})

        })
        
        
    }else{
        
        return res.json({
            success : false
        })
    
    }
})

module.exports = router;