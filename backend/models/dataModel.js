const mongoose = require('mongoose');

const amazonData = new mongoose.Schema({},{collection:'products'});

amazonData.method("toJson", function() {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    console.log(object);
    return object;
});