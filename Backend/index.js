import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import AllRoutes  from './Router/index.js'
import mongoose from 'mongoose'




const app=express()
app.use(express.json())
app.use(cors())
dotenv.config()

app.get('/',((req,res)=>{
    res.send("welcome....")
}))



app.use('/api/v1',AllRoutes)




mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("Database connect");
})

app.listen(8000,(()=>{console.log("running on port 8000")}))

