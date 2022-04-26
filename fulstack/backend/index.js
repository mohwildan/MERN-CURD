import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import userRoute from './route/UserRoute.js'

const app = express()



// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://localhost:27017/fullstack_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});
app.use(cors())
app.use(express.json())
app.use(userRoute)



app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(5000, () => console.log('server conect on 5000'))