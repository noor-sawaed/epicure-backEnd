const { DishesDal } = require("../dal/dishes.dal");

export class DishesService {

  public async getDishes() {
    console.log("2222222222")
    const dal = new DishesDal();
    const res = await dal.findAll();
    return res;
  }

  public async getDish(dishID: Number) {
    const dal = new DishesDal();
    const res = await dal.getDish(dishID);
    return res;
  }

  public async createDish(dish: any) {
    const dal = new DishesDal();
    const res = dal.createDish(dish);
    return res;
  }
  
  public async getDishesByRestaurantID(restaurantId:Number) {
    const dal = new DishesDal();
    const res = dal.getDishesByRestaurantID(restaurantId);
    return res;
  }
}
