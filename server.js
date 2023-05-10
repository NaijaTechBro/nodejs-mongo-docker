require('dotenv').config();

const express = require('express');
const app = express();

// security
const cors = require('cors');


const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');



app.use(cors());
app.use(bodyParser)