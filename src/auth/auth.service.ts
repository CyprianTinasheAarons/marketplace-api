import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { NotificationsService } from '../notifications/notifications.service';
import { JwtService } from '@nestjs/jwt';
import { HashService } from './hash.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import Moralis from 'moralis';

const config = {
  domain: 'moralis.io',
  statement: 'Please sign this message to confirm your identity.',
  uri: 'https://moralis.io',
  timeout: 60,
};

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private hashService: HashService,
    private notificationsService: NotificationsService,
  ) {}

  async getProfile(userId: string) {
    const user = await this.usersService.findOne(userId);
    return user;
  }

  //Admin authentication

  async login(user: any) {
    const payload = {
      username: user.username,
      password: user.password,
      sub: user.userId,
    };
    //check if user exists
    const userData = await this.usersService.findOneByEmail(user.username);

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
    //check if user exists
    const user = await this.usersService.findOneByEmail(createUserDto.email);

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
    await this.usersService.create(createUserDto);
    await this.notificationsService.sendEmail(
      createUserDto.email,
      'Welcome to the Marketplace!',
      'You are now registered!',
    );

    return {
      message: 'User created successfully',
      user: createUserDto,
    };
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(username);
    if (user && (await this.hashService.comparePassword(pass, user.password))) {
      return user;
    }
    return null;
  }

  //Web3 Auth
  async requestMessage(web3Auth: {
    address: string;
    chain: string;
    network: any;
  }): Promise<any> {
    const { address, chain, network } = web3Auth;

    try {
      const message = await Moralis.Auth.requestMessage({
        address,
        chain,
        network,
        ...config,
      });

      return message;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async verify(web3Auth: { message: string; signature: string }): Promise<any> {
    const { message, signature } = web3Auth;

    try {
      const { address, profileId } = (
        await Moralis.Auth.verify({
          message,
          signature,
          networkType: 'evm',
        })
      ).raw;

      const user = { address, profileId, signature };
      const token = this.jwtService.sign(user);

      return { token, user };
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async authenticate(request: any): Promise<any> {
    const token = request.cookies.jwt;
    if (!token) {
      return null;
    }

    try {
      const data = await this.jwtService.verifyAsync(token);
      return data;
    } catch (error) {
      return error;
    }
  }

  async registerWeb3User(createUserDto: CreateUserDto) {
    //check if user exists
    const user = await this.usersService.findOneByWalletAddress(
      createUserDto.walletAddress,
    );

    //if user exists, throw error
    if (user) {
      throw new Error('User already exists');
    }

    //create user
    return await this.usersService.create(createUserDto);
  }
}
