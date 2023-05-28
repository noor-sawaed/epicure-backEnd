import { Request, Response } from "express";
const { DishesService } = require("../services/dishes.service"); 

export class DishesController {
  public static async getDishes(req: Request, res: Response) {
    try {
      console.log("1111111")
      const service = new DishesService();
      const dishes = await service.getDishes();
      // const dishes = {name :"someres1"};
      return res.send(dishes);
    } catch (error) {
      console.log("111111 errorrrr",error)
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
      await service.createDish(params);
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
