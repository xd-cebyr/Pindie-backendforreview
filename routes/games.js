const gamesRouter = require("express").Router();
const {
  sendGameDeleted,
  sendGameUpdated,
  sendGameById,
  sendGameCreated,
  sendAllGames,
} = require("../controllers/games");
const {
  checkIsGameExists,
  checkIfUsersAreSafe,
  checkIfCategoriesAvailable,
  checkEmptyFields,
  deleteGame,
  updateGame,
  findGameById,
  findAllGames,
  createGame,
  checkIsVoteRequest,
} = require("../middlewares/games");
const { checkAuth } = require("../middlewares/auth");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvailable,
  checkEmptyFields,
  checkAuth,
  createGame,
  sendGameCreated
);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvailable,
  checkEmptyFields,
  checkAuth,
  updateGame,
  sendGameUpdated
);
gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted);
module.exports = gamesRouter;
