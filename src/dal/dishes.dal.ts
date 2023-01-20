import Dishes from "../db/models/dishes";

export class DishesDal {
    public createDish(dish: any) {
        dish = new Dishes({
            dishID: dish.dishID,
            name: dish.name,
            price: dish.price,
            image: dish.image,
            description: dish.description,
            type: dish.type,
            signature: dish.signature,
            restaurantID: dish.restaurantID,
        });

        dish.save(function (err: any, results: any) {
            if (err) {
                throw err;
            }
            return results;
        });
    }

    public findAll(query: any = null) {
        return Dishes.find(query);
    }

    public async getDish(param: { [key: string]: any }) {
        const data = await Dishes.aggregate([
            {
                $match: {
                    $or: [
                        { dishID: param.dishID }, { name: `${param.name}` }
                    ]
                }
            },

        ]);
        return data;
    }

    public async getDishesByRestaurantID(restaurantId: Number) {
        const data = await Dishes.aggregate([
            {
                $match: {
                    restaurantId: restaurantId
                },
            },
        ]);
        return data;
    }
}
