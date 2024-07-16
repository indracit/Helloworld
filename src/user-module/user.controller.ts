/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/user';
import {  UserParamsDto } from './dto/user.dto';
import { Request, Response } from 'express';
@Controller('users')
export class UserController {
  constructor(private readonly userService:UserService) {}

  @Get()
  async getUsers( @Req() res: Request): Promise<User[]> {
    console.log(res.body);
    return this.userService.getUsers();
  }
  @Get('/:email')
  getUser(@Param() params: UserParamsDto) : User{
    return this.userService.getUser(params.email);
  } 

  @Post()
  @UsePipes(new ValidationPipe())
  postUser(@Body() user:User , @Res() res : Response) {
     this.userService.addUser(user);
     res.status(201).send()
  }

  @Delete('/:email')
  deleteUser(@Param() params: UserParamsDto) : User[]{
    return this.userService.deleteUser(params.email);
  }
}


