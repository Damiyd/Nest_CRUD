import { Controller, Delete, Get, HttpException, Param, ParseIntPipe, Post, Put, UseFilters, UseInterceptors } from '@nestjs/common';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptors';
import { HttpExceptionFilter } from '../common/exceptions/http-exception.filter';
import { UsersService } from './users.service';

@Controller('users')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class UsersController {
    constructor (private readonly usersService : UsersService) {}

    @Get()
    allAllUser() {
        return "all user";
    }

    @Get(":id")
    getOneUser(@Param("id", ParseIntPipe) param: number) {
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
