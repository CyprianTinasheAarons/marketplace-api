import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { HashService } from './hash.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private hashService: HashService,
  ) {}

  async getUserByUsername(username: string) {
    return await this.usersService.findOneByUsername(username);
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      password: user.password,
      sub: user.userId,
    };
    //check if user exists
    const userData = await this.usersService.findOneByUsername(user.username);

    //if user does not exist, throw error
    if (!userData) {
      throw new Error('User does not exist');
    }

    //if user exists, check if password is correct
    const isPasswordCorrect = await this.hashService.comparePassword(
      user.password,
      userData.password,
    );

    //if password is incorrect, throw error
    if (!isPasswordCorrect) {
      throw new Error('Password is incorrect');
    }

    //if password is correct, return access token
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(createUserDto: CreateUserDto) {
    console.log('registering user', createUserDto);
    //check if user exists
    const user = await this.usersService.findOneByUsername(
      createUserDto.username,
    );

    //if user exists, throw error
    if (user) {
      throw new Error('User already exists');
    }

    //if user does not exist, create user
    //hash password
    createUserDto.password = await this.hashService.hashPassword(
      createUserDto.password,
    );

    //create user
    return await this.usersService.create(createUserDto);
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (user && (await this.hashService.comparePassword(pass, user.password))) {
      return user;
    }
    return null;
  }
}
