import Chefs from "../db/models/chefs";
import Restaurants from "../db/models/restaurants";

export class RestaurantsDal {
  public async getPopularRestaurants() {
    return Restaurants.find();
  }

  public async createRestaurant(restaurant: any) {
    restaurant = new Restaurants({
      id: restaurant.id,
      name: restaurant.name,
      image: restaurant.image,
      chefID: restaurant.chefID,
      visits: restaurant.visits,
      dateAdded: restaurant.dateAdded,
      workHours: restaurant.workHours
    });
    const response = await Restaurants.create(restaurant);
    return response;
  }

  public findAll() {
    return Restaurants.find();
  }

  public async getRestaurantById(restaurantID: number) {
    const data = await Restaurants.aggregate([
      {
        $match: {
          id: restaurantID
        }
      },

    ]);
    return data;
  }

}
