const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')

const userRouter = require('./routes/user')
const cppsryRouter = require('./routes/cppsry')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8080

const URI = process.env.MONGOOB_URI
const connection = mongoose.connection

// Data parsing
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

mongoose.connect(URI || 'mongodb+srv://slimhong:a1234560@cluster0.tp4ak.mongodb.net/users?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true 
})

connection.on('connected', () => {
    console.log('Mongoose is connected!')
})

connection.on('error', (error) => {
    console.log('Error!', error)
})

// HTTP request logger
app.use(morgan('tiny'))
app.use('/user', userRouter)
app.use('/cppsummary', cppsryRouter)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.listen(PORT, ()=> {
    console.log(`Server Listening on port ${PORT}`)
})
