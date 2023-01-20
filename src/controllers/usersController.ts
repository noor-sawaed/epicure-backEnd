import { Request, Response } from "express";
import { UsersService } from "../services/users.service";

export class UsersController {

//   public static async login(req: Request, res: Response) {
//     const service = new UsersService();
//     const restaurants = await service.getRestaurants();
//     return res.send(restaurants);
//   }

  public static async createUser(req: Request, res: Response) {
    const params = req.body;
    const service = new UsersService();
    const restaurant = await service.createRestaurant(params);
    return res.send(restaurant);
  }
}
