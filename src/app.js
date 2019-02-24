const express = require('express');

class AppConroller {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use('./routes.js');
  }
}
module.exports = new AppConroller().express;
