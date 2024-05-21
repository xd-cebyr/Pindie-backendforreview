const usersRouter = require("express").Router();

const {
  sendUserDeleted,
  sendUserUpdated,
  sendUserCreated,
  sendAllUsers,
  sendUserById,
  sendMe,
} = require("../controllers/users");
const {
  checkEmptyNameAndEmailAndPassword,
  hashPassword,
  checkEmptyNameAndEmail,
  checkIsUserExists,
  deleteUser,
  updateUser,
  createUser,
  findAllUsers,
  findUserById,
} = require("../middlewares/users");
const { checkAuth } = require("../middlewares/auth.js");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/me", checkAuth, sendMe);
usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
);
usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);
module.exports = usersRouter;
