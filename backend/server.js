const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//This configures to have environment variable and .env files
require('dotenv').config();

//This creates an express server and initializes the port where the server will be
const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection extablished successfully!");
})

app.use(cors());
//This allows to parse json
app.use(express.json());

//It starts the server and listen on port 5000
app.listen(port, () => {
    
    console.log('Server is running on port:' +port);
});