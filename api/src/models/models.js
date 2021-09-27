var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StoriSchema = new Schema({
    email: {
        type: String
    },
    transactions: {
        type: [Object]
    }
})

module.exports = mongoose.model('storifiles', StoriSchema);