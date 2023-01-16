import { Controller, Delete, Get, HttpException, Post, Put, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { UsersService } from './users.service';

@Controller('users')
@UseFilters(HttpExceptionFilter)
export class UsersController {
    constructor (private readonly usersService : UsersService) {}

    @Get()
    allAllUser() {
        throw new HttpException("api is broken", 401)
        return "all user";
    }

    @Get(":id")
    getOneUser() {
        return "one user";
    }

    @Post()
    createUser() {
        return "create user"
    }

    @Put()
    updateUser() {
        return "update user"
    }

    @Delete()
    deleteUser() {
        return "delete user"
    }
}
