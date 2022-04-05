const router = require('express').Router();
const {request} = require('express');
let amazonData = require('../models/dataModel.js');

//This is the first end point that handle http get request
router.route('/').get((req, res) => {
    //Mongoose method to get list of all data from database 
    amazonData.find().limit(10)
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' +err));
})

//Exporting the router
module.exports = router;