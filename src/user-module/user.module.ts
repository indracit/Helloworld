/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {LoggerMiddleware} from './middlewares/index'
@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer:MiddlewareConsumer){
    consumer
    .apply(LoggerMiddleware)
    .exclude(
      {path:'users',method:RequestMethod.GET},
      'users/(.*)',
    )
    .forRoutes(UserController)
  }
}
