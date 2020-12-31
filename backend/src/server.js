require('dotenv/config');
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');


class App {
	constructor() {
		this.server = express();

		this.database();
		this.middlewares();
		this.routes();
	}

	database() {
		mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true
		});
	}

	middlewares() {
		this.server.use(express.json());
		this.server.use(cors());
		this.server.use('/pictures', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));
		
	}

	routes() {
		this.server.use('/api', require('./routes'));
	}
}

module.exports = new App().server;
