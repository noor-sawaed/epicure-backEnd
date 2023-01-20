import Users from "../db/models/users";

export class UsersDal {
    public async createUser(user: any) {
        user = new Users({
            fullName: user.fullName,
            userName: user.userName,
            email: user.email,
            HashedPassword: user.hashPassword,
        });
        const response = await Users.create(user);
        const result = await Users.findOne({ name: response.fullName } || { userName: response.userName } || { userName: response.userName }).updateOne({
            $push: { restaurants: response._id },
        });
        return response;
    }
    public async findAll(){
        return Users.find();

    }
}
