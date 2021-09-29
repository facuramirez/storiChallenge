var express = require('express');
var app = express();
var cors = require('cors');
const PORT = 3001;

require('./index');

//Rutas
var routes = require('./src/routes/storiRoutes');

// middlewares
app.use(express.urlencoded({extended:false, limit: '50mb'}));
app.use(express.json());

// cors
app.use(
	cors({
		origin: 'http://localhost:3000',
		credentials: false,
		methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
		allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
	})
);

// rutas
app.use('/api', routes);

// Create Server
app.listen(PORT, () => {
	console.log('Server is running on port', PORT);
})

// export
module.exports = app;