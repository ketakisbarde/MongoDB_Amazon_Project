const mongoose = require('mongoose');

const amazonDataSchema = new mongoose.Schema({},{strict : false});

// console.log(amazonDataSchema);

amazonDataSchema.method("toJson", function() {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    console.log(object);
    return object;
});

const amazonData = mongoose.model('products', amazonDataSchema);
// console.log(amazonData);

module.exports = amazonData;