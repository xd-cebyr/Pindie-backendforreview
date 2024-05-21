const gamesRouter = require("./games");
const authRouter = require("./auth");
const usersRouter = require("./users");
const categoriesRouter = require("./categories");

const apiRouter = require("express").Router();
apiRouter.use("/api", gamesRouter);
apiRouter.use("/api", usersRouter);
apiRouter.use("/api", categoriesRouter);
apiRouter.use("/api", authRouter);

module.exports = apiRouter;
