import { Request, Response } from "express";
import { DishesService } from "../services/dishes.service"; //!need to change

export class DishesController {
  public static async getDishes(req: Request, res: Response) {
    try {
      const service = new DishesService();
      const dishes = await service.getDishes();
      return res.send(dishes);
    } catch (error) {
      return res.send(error);
    }
  }

  public static async getDish(req: Request, res: Response) {
    try {
      const service = new DishesService();
      const {dishID} = req.query;
      const dish = await service.getDish(Number(dishID));
      return res.send(dish);
    } catch (error) {
      return res.send(error);
    }
  }

  public static async createDish(req: Request, res: Response) {
    try {
      const params = req.body;
      const service = new DishesService();
      const chef = await service.createDish(params);
      return res.status(200).send("Chef successfully created");
    } catch (error) {
      return res.send(error);
    }
  }

  public static async getDishesByRestaurantID(req: Request, res: Response) {
    try {
      const params = req.body;
      const service = new DishesService();
      const dishes = await service.getDishesByRestaurantID(params.restaurantId);
      return res.send(dishes);
    } catch (error) {
      return res.send(error);
    }
  }
}
