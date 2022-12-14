// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const catRouter = require('./controllers/cats')

/////
require('dotenv').config();
const { MONGO_URL, PORT} = process.env

// APP Declared
const app = express();

//MONGOOSE
mongoose.connect(MONGO_URL);
mongoose.connection.on('connected', ()=>{console.log(`Connected`)})
mongoose.connection.on('error', (error) => {console.log(`Error Occured: ${error} §dev§`)})

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/cats', catRouter)



// TEST §dev§ INDEX
app.get('/', (req,res)=>{
    res.send('INDEX PLACEHOLDER §dev§ adjust')
})












app.get('/*', (req,res) => {
    res.status(404).json({Message: 'ERROR'})
})

///////Listener///////
app.listen(PORT || 4000, () => {
    console.log(`Connected on ${PORT}. THIS IS DEV, CHECK FOR §dev§`)
})