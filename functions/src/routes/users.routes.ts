import { Router } from "express";
const { UsersController } = require("../controllers/usersController");

const router = Router();

// router.get("/login", UsersController.login);
router.post("/createUser", UsersController.createUser);

// export default router;
module.exports = router;