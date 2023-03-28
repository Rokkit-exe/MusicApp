require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.connect(process.env.DATABASE_CONNECTION)

mongoose.connection.on('error', (error) => console.error('MongoDB error: ', error))

mongoose.connection.once('open', () => console.log("Connected"))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    next();
});

app.use(express.json())

const songsRouter = require('./routes/songs')

app.use('/songs', songsRouter)

app.listen(8000, () => console.log("server started (port 8000)"))