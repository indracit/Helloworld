/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interface/user';

@Injectable()
export class UserService {

    public users: User[] =[];

  async getUsers(): Promise<User[]> {
    return this.users;
  }

  getUser(email : string): User{
    const userData =  this.users.filter((val) => val.email==email);
    if(userData && Array.isArray(userData) && userData.length > 0){
        return userData[0]
    }
    throw new NotFoundException('user not found')
  }
 
  addUser(user : User): User {
    this.users.push(user);
    return user;
  }

  deleteUser (email: string) : User[] {
   return  this.users = this.users.filter((val) => val.email!=email);
  }
}
