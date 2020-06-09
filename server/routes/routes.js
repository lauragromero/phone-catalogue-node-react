const phoneRoutes = require("./phones.js");

const appRouter = (app, fs) => {
  phoneRoutes(app, fs);
};

module.exports = appRouter;