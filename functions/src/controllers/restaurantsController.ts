import { Request, Response } from "express";
const { RestaurantsService } = require("../services/restaurants.service");

export class RestaurantsController {
  public static async getPopularRestaurants(req: Request, res: Response) {
    try {
      const service = new RestaurantsService();
      const restaurants = await service.getPopularRestaurants();
      return res.send(restaurants);
    } catch (error) {
      return res.send(error);
    }
  }

  public static async getRestaurants(req: Request, res: Response) {
    try {
      const service = new RestaurantsService();
      const restaurants = await service.getRestaurants();
      return res.send(restaurants);
    } catch (error) {
      return res.send(error);
    }
  }

  public static async createRestaurant(req: Request, res: Response) {
    try {
      const params = req.body;
      const service = new RestaurantsService();
      const restaurant = await service.createRestaurant(params);
      return res.send(restaurant);
    } catch (error) {
      return res.send(error);
    }
  }

  public static async getRestaurantById(req: Request, res: Response) {
    try {
      const restaurantId = req.body.restaurantId;
      const service = new RestaurantsService();
      const restaurant = await service.getRestaurantById(restaurantId);
      return res.send(restaurant);
    } catch (error) {
      return res.send(error);
    }
  }
}
