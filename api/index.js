var mongoose = require('mongoose');

var URI = 'mongodb://mongo/stori';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( (db) => console.log('DB is connected !'))
.catch(err => console.log(err))
