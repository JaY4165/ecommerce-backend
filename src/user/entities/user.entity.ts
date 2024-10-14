import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

export enum Role {
	ADMIN = "admin",
	CUSTOMER = "customer",
}

@Schema()
export class User {
	// @Prop()
	// id: mongoose.Schema.Types.ObjectId;

	// @Prop()
	// userName: string;

	@Prop({ required: true })
	email: string;

	@Prop({ required: true })
	password: string;

	// @Prop()
	// address: string;

	// @Prop()
	// phone: string;

	// @Prop()
	// role: Role;

	@Prop()
	createdAt: Date;

	@Prop()
	updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
