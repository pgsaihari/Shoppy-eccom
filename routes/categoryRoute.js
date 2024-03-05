const express = require("express");
const { isAdmin, requireSignIn } = require("../middlewares/authMiddleware");
const {
  createCategoryController,
  updateCategoryController,
  getCategoriesController,
  singleCategoryController,deleteCategoryController
} = require("../controllers/categoryController");

const router = express.Router();

// routes
// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//   get all categories
router.get("/get-category", getCategoriesController);
// single category
router.get("/single-category/:slug",singleCategoryController)
// delete category
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController)
module.exports = router;
