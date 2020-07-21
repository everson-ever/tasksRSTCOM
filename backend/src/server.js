const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const configDatabase = require('./app/config/database');


class App {
	constructor() {
		this.server = express();

		this.database();
		this.middlewares();
		this.routes();
	}

	database() {
		mongoose.connect(configDatabase.uri, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true
		});
	}

	middlewares() {
		this.server.use(express.json());
		this.server.use(cors());
	}

	routes() {
		this.server.use('/api', require('./routes'));
	}
}

module.exports = new App().server;
