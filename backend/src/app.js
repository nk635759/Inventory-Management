import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app= express()
app.use(cors)
app.use(morgan("dev"))
app.use(express.json({limit:'10mb'}))
app.use(express.urlencoded({extended:false}))


export default app;
