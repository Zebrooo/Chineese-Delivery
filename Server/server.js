require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const  apiAuthRouter  = require('./routes/apiAuthRouter');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/api/auth', apiAuthRouter)

app.listen(PORT, () => {
  console.log('server start on Port', PORT);
});
