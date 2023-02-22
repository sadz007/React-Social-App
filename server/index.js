import express from 'express'
import bodyparser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postRoutes from './routes/post.js'

mongoose.set('strictQuery', false)
// mongoose.set('useFindAndModify', false);
// mongoose.set('useFindAndModify', false);


const app = express()
dotenv.config()




// app.use(express.urlencoded({ limit:'30mb',extended: true }));
// app.use(express.json({ limit:'30mb',extended: true }));

// //////////////////////////////////////////////////////////////////

// Body-parser middleware
app.use(bodyparser.urlencoded({ limit:'30mb',extended: true }))
app.use(bodyparser.json({ limit:'30mb',extended: true }))
app.use(cors())

// app.use(express.json());

// ROUTES????////
app.use("/posts", postRoutes)





// mongobdb/atlas/
// const CONNECTION_URL = "mongodb+srv://useruserx:useruserx123@cluster0.uzrkbbi.mongodb.net/?retryWrites=true&w=majority"

const PORT = process.env.PORT 

mongoose.connect (
    process.env.CONNECTION_URL,{
        useNewUrlParser: true, 
        useUnifiedTopology: true,

        
    })
        .then(()=> app.listen(PORT,()=>console.log(`WE ARE Running on port ${PORT}`)))
        .catch((error)=> console.log(`SERVER ERROR:::${error} `))



// avoid and check for Warnings in Console.//
// mongoose.set('FindOneAndModify', false);
// mongoose.set('strictQuery', false)
// mongoose.set('useFindAndModify', false);
// mongoose.set('findOneAndUpdate', false);
