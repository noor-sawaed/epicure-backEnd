import { Router } from "express";
import { UsersController } from "../controllers/usersController";

const router = Router();

// router.get("/login", UsersController.login);
router.post("/createUser", UsersController.createUser);

export default router;
