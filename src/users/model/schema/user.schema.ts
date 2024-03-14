import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, now } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema({
  timestamps: true
})
export class User {
  @Prop()
  fullName: string

  @Prop({ unique: true })
  email: string

  @Prop()
  gender: string
}

export const UserSchema = SchemaFactory.createForClass(User)