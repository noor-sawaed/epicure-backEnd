import { Router } from "express";
const { RestaurantsController } = require("../controllers/restaurantsController");

const router = Router();

router.get("/getRestaurants", RestaurantsController.getRestaurants);
router.get("/getRestaurantById", RestaurantsController.getRestaurantById);
router.get("/getPopularRestaurants", RestaurantsController.getPopularRestaurants);
router.post("/createRestaurant", RestaurantsController.createRestaurant);

// export default router;
module.exports = router;