import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./entities/user.entity";
import { Model } from "mongoose";

@Injectable()
export class UserService {
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

	async create(createUserDto: CreateUserDto): Promise<User> {
		const createdUser = new this.userModel(createUserDto);
		return await createdUser.save();
	}

	async findByEmail(email: string): Promise<User | null> {
		const user = await this.userModel.findOne({ email }).exec();
		return user;
	}

	async findById(id: string): Promise<User | null> {
		const user = await this.userModel.findById(id).exec();
		return user;
	}
}
