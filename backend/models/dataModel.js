const mongoose = require('mongoose');

const amazonDataSchema = new mongoose.Schema({},{collection:'products'});

amazonDataSchema.method("toJson", function() {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    console.log(object);
    return object;
});

const amazonData = mongoose.model('products', amazonDataSchema);

module.exports = amazonData;