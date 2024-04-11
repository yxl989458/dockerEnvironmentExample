const express = require('express')
const Mock= require('mockjs')

const ip = require('ip')
const app = express()
const router = express.Router()
//cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With , yourHeaderFeild')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    if (req.method == 'OPTIONS') {
        res.send(200)
    } else {
        next()
    }
})
//prefix
app.use('/api',router)

router.get("/userList",(req,res)=>{
    res.send(Mock.mock({
        msg:'success',
        code:200,
        //生成200个数据
        'data|200':[
            {
                'id|+1':1,
                'name':'@cname',
                'age|18-60':18
            }
        ]
    }))
})

app.listen(process.env.PORT, () => {
    console.log('\x1b[33m%s\x1b[0m',`server listen on port http://${ip.address()}:${process.env.PORT}`);
})