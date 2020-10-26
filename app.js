const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


//Database
const db = require('./config/db');
const { request } = require('http');


//DB Connection Test
db.authenticate().then(() => console.log('Database Connected Successfully...!')).catch((err) => console.log('Error:', err))

const app = express();

app.get('/', (req, res) => {
  res.send('HOME')
})

//Gigs Routes
app.use('/gigs',require('./routes/gigs'))

app.listen(3000, () => {
  console.log('Server running on PORT 3000....!')
})