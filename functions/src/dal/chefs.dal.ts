const Chefs = require("../db/models/chefs");

export class ChefsDal {
  public createChef(chef: any) {
    chef = new Chefs({
      chefID: chef.chefID,
      name: chef.name,
      age: chef.age,
      about: chef.about,
    });

    chef.save(function (err: any, results: any) {
      if (err) {
        throw err;
      }
      return results;
    });
  }

  public async updateChef(chef: any) {
    const data = await Chefs.findOne({
      $or: [
        { name: `${chef.name}` }, { chefID: chef.chefID }
      ]
    }).updateOne({ $set: { age: chef.age, about: chef.about, } });
    return data;
  }

  public findAll(query: any = null) {
    return Chefs.find(query);
  }

  public async getChef(param: { [key: string]: any }) {
    const data = await Chefs.aggregate([
      {
        $match: {
          $or: [
            { chefID: param.chefID }, { name: `${param.name}` }
          ]
        }
      },

    ]);
    return data;
  }
}
