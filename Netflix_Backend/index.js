import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import { connectToDB } from './src/db/config.js'
// importing user routes
import router from './src/routes/userRoutes.js'
import moviesRouter from './src/routes/moviesRoutes.js'

const app = express()

// for parsing json data 
app.use(express.json())
// for accessing backend on different port
app.use(cors())

<<<<<<< HEAD
=======
// to serve static files 
app.use('/uploads', express.static('uploads'));

>>>>>>> f28be0b (Clean start without large files)
// path for user routes 
app.use('/api/users', router)

// path for movie routes 
app.use('/api/movies', moviesRouter)

app.get('/', (req, res) => {
    res.send("url is working")
})

app.listen(3000, () => {
    connectToDB()
    console.log("server is running at port 3000")
})