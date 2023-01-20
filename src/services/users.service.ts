import { UsersDal } from "../dal/users.dal";

export class UsersService {
  
  public async login() {
    const dal = new UsersDal();
    const res = await dal.findAll();
    return res;
  }

  public async createRestaurant(restaurant: any) {
    const dal = new UsersDal();
    const res = dal.createUser(restaurant);
    return res;
  }
}
