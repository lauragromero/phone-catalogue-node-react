const phoneRoutes = require("./phonesController.js");

const appRouter = (app, fs) => {
  phoneRoutes(app, fs);

  
};

module.exports = appRouter;