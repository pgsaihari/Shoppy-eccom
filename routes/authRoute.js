const express = require("express");
const router = express.Router();
const {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} = require("../controllers/authcontroller");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");

// REGISTER ||POST
router.post("/register", registerController);

// LOGIN ||POST
router.post("/login", loginController);

// test routes
router.get("/test", requireSignIn, isAdmin, testController);
// FORGOT PASSWORD||
router.post("/forgot-password", forgotPasswordController);
// protected route auth ||USER ROUT
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// protected route auth ||ADMIN
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// update profile

router.put("/profile", requireSignIn, updateProfileController);


// router
router.get('/orders',requireSignIn,getOrdersController)

// get all orders
router.get('/all-orders',requireSignIn,isAdmin,getAllOrdersController)
// order status update
router.put('/order-status/:orderId',requireSignIn,isAdmin,orderStatusController)

module.exports = router;
