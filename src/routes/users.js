const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const validation = require("./validation");
const User = require("../../src/db/models").User;


router.get("/users/sign_up", userController.signUp);
router.post("/users/sign_up", validation.validateUsers, userController.create);
router.get("/users/sign_in", userController.signInForm);
router.post("/users/sign_in", validation.validateUsers, userController.signIn);
router.get("/users/sign_out", userController.signOut);
//router.get("/users/:id/", userController.show);
//router.get("/users/upgrade", userController.upgrade);
//router.post("/users/:id/upgrade", userController.upgrade);
//router.get("/users/downgrade", userController.downgrade);
router.post("/users/:id/downgrade", userController.downgrade);
router.get("/users/payment", userController.payment);
router.get("/users/paymentDecline", userController.paymentDecline);
router.get("/users/standard_role", userController.standard_role);
router.get("/users/collaborations", userController.showCollaborations);

module.exports = router;








