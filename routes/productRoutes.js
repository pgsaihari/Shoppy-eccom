const express = require("express");
const { isAdmin, requireSignIn } = require("../middlewares/authMiddleware");
const {
  createProductController,
  getProductsController,
  getSingleProductController,
  productPhotoController,
  deleteProductController,
  updateProductController,
  productFilterController,
  productCountController,
  productListController,
  searchProductController,braintreeTokenController,braintreePaymentsController
} = require("../controllers/productController");
const formidable = require("express-formidable");
const router = express.Router();

// routes
// create exports
// ==========================

router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
// =======================
// getting all products
// =======================

router.get("/get-products", getProductsController);
// ===================

// get single product
router.get("/get-product/:slug", getSingleProductController);

// get photo

router.get("/product-photo/:pid", productPhotoController);

// delete controller

router.delete("/product/:pid", deleteProductController);

// update
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);
// filter product
router.post("/product-filter", productFilterController);

// product count

router.get("/product-count", productCountController);

// product per page

router.get("/product-list/:page", productListController);

// search product

router.get('/search/:keyword',searchProductController)



// payments route

// getting token


router.get('/braintree/token',braintreeTokenController)

// payments
router.post('/braintree/payment',requireSignIn,braintreePaymentsController)

module.exports = router;
