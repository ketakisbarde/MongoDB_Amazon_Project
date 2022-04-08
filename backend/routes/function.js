const router = require('express').Router();
const { application } = require('express');
// const {request} = require('express');
let amazonData = require('../models/dataModel');

// router.get('/', function(req, res){
//     res.send("Hello");
// })

// This is the first end point that handle http get request
// router.get()
// router.route('/').get((req, res) => {
//     // res.send("CONNECTED TO GET ROUTE");
//     //Mongoose method to get list of all data from database 
//     amazonData.find().limit(10)
//     .then(data => res.json(data))
//     .catch(err => res.status(400).json('Error: ' +err));
// })

// router.route('/:id').get((req, res) => {
//     amazonData.findById(req.params.id)
//     .then(data => {
//         // console.log(data);
//         res.json(data)
//     })
//     .catch(err => res.json(400).json('Error: ' +err));

// })

router.route('/search/:description').get((req, res) => {
    amazonData.find({$or: [{name:{$regex: new RegExp(req.params.description, 'i')}}, {categories:{$regex: new RegExp(req.params.description, 'i')}}]})
    .then(data => {
        res.json(data)
    })
    .catch(err => res.json(400).json('Error: ' +err));
})

router.route('geoSearch/:longitude/:latitude').get((req, res) => {
    var long = req.params.longitude;
    var lat = req.params.latitude;
    amazonData.find({
        geoLoc: {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: [long, lat]
                },
                $maxDistance: 500
            }
        }
    })
    .then(data => {
        res.json(data)
    })
    .catch(err => res.json(400).json('Error: ' +err));
})

// router.route('/searchPage/:categories').get((req, res) => {
//     amazonData.find({"categories":{$regex: new RegExp(req.params.categories, 'i')}})
//     .then(data => {
//         res.json(data)
//     })
//     .catch(err => res.json(400).json('Error: ' +err));
// })

//Exporting the router
module.exports = router;