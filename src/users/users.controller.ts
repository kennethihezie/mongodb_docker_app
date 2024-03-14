import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { UserDto } from './model/dto/user.dto';
import { UsersService } from './users.service';
import { updateUserDto } from './model/dto/update_user.dto';


@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Post()
    async createUser(@Body() userDto: UserDto) {
        return this.userService.createUser(userDto)
    }

    @Patch('/:id')
    async updateUser(@Param('id') userId: string, @Body() updateUserDto: updateUserDto) {
        return this.userService.updateUser(userId, updateUserDto)
    }

    @Get('/:id')
    async findUserById(@Param('id') userId: string){
        return this.userService.findUserById(userId)
    }

    @Get()
    async getAllUsers() {
        return this.userService.getAllUsers()
    }

    @Delete('/:id')
    async deleteUser(@Param('id') userId: string){
        return this.userService.deleteUser(userId)
    }
}
