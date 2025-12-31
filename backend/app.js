import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import "dotenv/config"
import Bookroute from "./routes/Bookroute.js"
import userRoute from "./routes/userRoute.js"

const app = express()

app.use(express.json())
app.use(cors())

const URL = process.env.MONGOURL


mongoose.connect(URL)
.then(()=> console.log('db is connected successfully'))
.catch((error) => console.log('some error occurs',error))

// define routes

app.use('/books',Bookroute)
app.use('/user',userRoute)

const PORT = process.env.PORT;

app.listen(PORT,()=>{
  console.log(`server is running on PORT : ${PORT}`);
  
})