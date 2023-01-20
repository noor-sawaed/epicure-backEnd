import { RestaurantsDal } from "../dal/restaurants.dal";

export class RestaurantsService {
  public async getPopularRestaurants() {
    const dal = new RestaurantsDal();
    const res = await dal.getPopularRestaurants();
    const filteredRestaurants = res.sort((res1, res2) => (res1.visits < res2.visits) ? 1 : (res1.visits > res2.visits) ? -1 : 0);
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
    const res = dal.createRestaurant(restaurant);
    return res;
  }
  public async getRestaurantById(restaurantId: number) {
    const dal = new RestaurantsDal();
    const res = dal.getRestaurantById(restaurantId);
    return res;
  }

  
}
