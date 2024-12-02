const express = require('express')
const userRouter =require('./routes/user.routes')
const connectToDB =require('./config/db')
const dotenv = require('dotenv')
dotenv.config()
connectToDB()
const cookieParser = require('cookie-parser')
const app = express()
const indexRouter = require('./routes/index.routes')



app.set('view engine', 'ejs') // to setup ejs we write this and make a folder named "views" 

app.use(cookieParser())
// to show the data that is entered in the form by any user
app.use(express.json())
app.use(express.urlencoded({extended: true})) 



app.get('/', (req,res) => {  // to render our index.js of "views" folder
    res.render('index')
})

app.use('/', indexRouter)
app.use('/user',userRouter) // to use user.routes.js on our server 



app.listen(3000, () => {
    console.log("Server is running on port 3000")
})