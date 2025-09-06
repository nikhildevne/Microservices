import express from "express"

const app = express()

app.listen(3000,()=>{
    console.log('application is runnign on 4000')
})

app.get('/',async(req,res)=>{
    res.send('hello world from second micorservice')
})