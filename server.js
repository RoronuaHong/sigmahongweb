const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8000;

const routes = require('./routes/api');

mongoose.connect(process.env.MONGOOB_URI || 'mongodb+srv://slimhong:a1234560@cluster0.tp4ak.mongodb.net/users?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true 
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!');
});

mongoose.connection.on('error', (error) => {
    console.log('Error!', error);
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);

app.use(express.static('client/build'));
// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
// }

app.listen(PORT, ()=> {
    console.log(`Server Listening on port ${PORT}`);
});
