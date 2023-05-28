import { Router } from "express";
const { DishesController } = require("../controllers/dishesController");

const router = Router();

router.get("/getDishes", DishesController.getDishes);
router.get("/getDish", DishesController.getDish);
router.post("/createDishes", DishesController.createDish);
router.get("/getDishesByRestaurantID", DishesController.getDishesByRestaurantID);

// export default router;
module.exports = router;