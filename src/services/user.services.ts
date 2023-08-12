import UserDAO from "../daos/mongo/user.dao";
import { User } from "../interfaces/entyties";
import CustomError from "../utils/customError";

export default class UserServices {
	private userDAO: UserDAO = new UserDAO();

	protected async getUsers() {
		try {
			const users = await this.userDAO.get();
			return users;
		} catch (error) {
			throw new CustomError();
		}
	}

	protected async getUserById(idUser: string) {
		try {
			const user = await this.userDAO.getById(idUser);
			return user;
		} catch (error) {
			throw new CustomError();
		}
	}

	protected async createUser(user: User) {
		try {
			const newUser = await this.userDAO.create(user);
			return newUser;
		} catch (error) {
			throw new CustomError();
		}
	}
}
