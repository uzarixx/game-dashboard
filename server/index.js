const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5000


const app = express()
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}))
app.use(express.json())
app.use('/auth', authRouter)



const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://root:root@cluster0.ihdeaob.mongodb.net/?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    }catch (e) {
        console.log(e)
    }
}

start()