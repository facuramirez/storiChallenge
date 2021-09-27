var express = require('express');
var app = express();
var cors = require('cors');

//Rutas
var asd = require('./src/routes/storiRoutes');

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
app.use(asd);

// export
module.exports = app;