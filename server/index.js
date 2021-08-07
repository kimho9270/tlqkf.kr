const express = require('express')
const app = express()
const path = require('path');


app.use(express.urlencoded({ extended: true }));

app.use(express.json());




// const mongoose = require('mongoose')
// mongoose.connect(config.mongoURI, {
//   useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
// }).then(() => console.log('MongoDB Connected...'))
//   .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!~~ '))

app.use('/api/register', require('./routes/register'))
app.use('/api/search',require('./routes/search'))


const port = 5000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//app.use(express.static(path.join(__dirname,"../client/build")));

// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
//   });

