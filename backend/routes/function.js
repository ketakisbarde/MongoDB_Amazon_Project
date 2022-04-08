const router = require('express').Router();
const { application } = require('express');
// const {request} = require('express');
let amazonData = require('../models/dataModel');

// router.get('/', function(req, res){
//     res.send("Hello");
// })

// This is the first end point that handle http get request
// router.get()
router.route('/').get((req, res) => {
    // res.send("CONNECTED TO GET ROUTE");
    //Mongoose method to get list of all data from database 
    amazonData.find().limit(10)
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' +err));
})

//Exporting the router
module.exports = router;