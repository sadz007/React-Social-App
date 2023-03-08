import express from 'express'
import bodyparser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postRoutes from './routes/post.js'
import userRoutes from './routes/users.js'

mongoose.set('strictQuery', false)



const app = express()
dotenv.config()






// //////////////////////////////////////////////////////////////////

// Body-parser middleware
app.use(bodyparser.urlencoded({ limit:'30mb',extended: true }))
app.use(bodyparser.json({ limit:'30mb',extended: true }))
app.use(cors())



// ROUTES????////
app.use("/posts", postRoutes)
app.use("/user", userRoutes)







const PORT = process.env.PORT 

mongoose.connect (
    process.env.CONNECTION_URL,{
        useNewUrlParser: true, 
        useUnifiedTopology: true,

        
    })
        .then(()=> app.listen(PORT,()=>console.log(`WE ARE Running on port ${PORT}`)))
        .catch((error)=> console.log(`SERVER ERROR:::${error} `))




