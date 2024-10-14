import { Injectable } from "@nestjs/common";
import { CreateAuthDto } from "./dto/create-auth.dto";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
	constructor(private readonly userService: UserService) {}

	async create(createAuthDto: CreateAuthDto) {
		const user = await this.userService.create(createAuthDto);
		return user;
	}
}
