const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const sai = require('./hello');
const connectToDb=require('./config/db')
const authRoute=require('./routes/authRoute')
const categoryRoute=require('./routes/categoryRoute')
const productRoute=require('./routes/productRoutes')
const cors =require('cors')
const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));


// routes 

app.use('/api/v1/auth',authRoute);
app.use('/api/v1/category',categoryRoute)
app.use('/api/v1/products',productRoute)
app.get('/', (req, res) => {
    res.send('<h1>welcome</h1>');
});

app.listen(process.env.PORT, () => {
    console.log(`Connected to port ${process.env.PORT}`);
});


