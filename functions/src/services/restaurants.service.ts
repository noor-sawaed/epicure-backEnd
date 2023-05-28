const { RestaurantsDal } = require("../dal/restaurants.dal");

interface IRestaurant extends Document {
  workHours: IWorkHours;
  id: number;
  name: string;
  image: string;
  chefID: number;
  visits: number;
  dateAdded: number;
}
interface IDay {
  open: string;
  close: string;
}

interface IWorkHours {
  Sunday: IDay;
  Monday: IDay;
  Tuesday: IDay;
  Wednesday: IDay;
  Thursday: IDay;
  Friday: IDay;
  Saturday: IDay;
}
export class RestaurantsService {
  public async getPopularRestaurants() {
    const dal = new RestaurantsDal();
    const res = await dal.getPopularRestaurants();
    const filteredRestaurants = res.sort((res1:IRestaurant, res2:IRestaurant) => (res1.visits < res2.visits) ? 1 : (res1.visits > res2.visits) ? -1 : 0);
    return filteredRestaurants.slice(0,3);
  }

  public async getRestaurants() {
    const dal = new RestaurantsDal();
    const res = await dal.findAll();
    return res;
  }

  // public async getRestaurantsByChef()

  public async createRestaurant(restaurant: any) {
    const dal = new RestaurantsDal();
    const res = await dal.createRestaurant(restaurant);
    return res;
  }
  public async getRestaurantById(restaurantId: number) {
    const dal = new RestaurantsDal();
    const res = await dal.getRestaurantById(restaurantId);
    return res;
  }

  
}
