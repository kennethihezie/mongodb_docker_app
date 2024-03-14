import { PartialType } from "@nestjs/mapped-types";
import { User } from "../schema/user.schema";
import { UserDto } from "./user.dto";

export class updateUserDto extends PartialType(UserDto) {}