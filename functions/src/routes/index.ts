const express = require("express");
const chefsRoutes = require("./chefs.routes");
const restaurantsRoutes = require("./restaurants.routes");
const usersRoutes = require('./users.routes');
const dishesRoutes = require('./dishes.routes');
const router = express.Router();

router.use("/api/chefs", chefsRoutes);
router.use("/api/restaurants", restaurantsRoutes);
router.use("/api/users",usersRoutes);
router.use("/api/dishes",dishesRoutes);

module.exports = router;
