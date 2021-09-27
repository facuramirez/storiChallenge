var mongoose = require('mongoose');
const app = require('./app');
const PORT = '3001';

var URI = 'mongodb://localhost:27017/stori';
mongoose.connect(URI)
.then( () => {
    console.log('Connected to STORI DB...');
    
    // Create Server
    app.listen(PORT, () => {
        console.log('Server is running on port', PORT);
    })
})
.catch( (err) => {
    console.log(err);
})