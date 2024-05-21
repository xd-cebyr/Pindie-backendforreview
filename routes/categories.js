const categoriesRouter = require("express").Router();

const {
  sendCategoryDeleted,
  sendCategoryUpdated,
  sendCategoryCreated,
  sendAllCategories,
  sendCategoryById,
} = require("../controllers/categories");

const {
  checkEmptyName,
  checkIsCategoryExists,
  deleteCategory,
  updateCategory,
  createCategory,
  findAllCategories,
  findCategoryById,
} = require("../middlewares/categories");
const { checkAuth } = require("../middlewares/auth.js");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  checkAuth,
  createCategory,
  sendCategoryCreated
);
categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  checkAuth,
  updateCategory,
  sendCategoryUpdated
);
categoriesRouter.delete(
  "/categories/:id",
  checkAuth,
  deleteCategory,
  sendCategoryDeleted
);
module.exports = categoriesRouter;
