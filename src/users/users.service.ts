import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './model/schema/user.schema';
import { Model } from 'mongoose';
import { UserDto } from './model/dto/user.dto';
import { updateUserDto } from './model/dto/update_user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

    async createUser(userDto: UserDto): Promise<User> {
        return await (new this.userModel(userDto).save())
    }

    async updateUser(userId: string, updateUserDto: updateUserDto): Promise<User> {
        const user = this.userModel.findByIdAndUpdate(userId, updateUserDto, {
            new: true
        })

        if(!user){
            throw new NotFoundException(`User with id: ${userId} does not exist`)
        }

        return user
    }

    async findUserById(userId: string): Promise<User> {
        const user = this.userModel.findById(userId)

        if(!user){
            throw new NotFoundException(`User with id: ${userId} does not exist`)
        }

        return user
    }

    async getAllUsers(): Promise<User[]> {
        const users = await this.userModel.find().exec()
        if(!users || users.length == 0){
            throw new NotFoundException('Users data not found!')
        }

        return users
    }

    async deleteUser(userId: string): Promise<User> {
        const user = this.userModel.findByIdAndDelete(userId)

        if(!user){
            throw new NotFoundException(`User with id: ${userId} does not exist`)
        }

        return user
    }
}
