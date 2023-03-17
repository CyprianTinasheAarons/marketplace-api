import {
  Controller,
  Request,
  Post,
  Get,
  Body,
  UseGuards,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Res() response, @Body() body: any) {
    const user = await this.authService.login(body);
    if (!user) {
      return response.status(HttpStatus.NOT_FOUND).json({
        message: 'Error logging in',
      });
    }
  }

  @Post('register')
  async register(@Res() response, @Body() createUserDto: CreateUserDto) {
    const newUser = await this.authService.register(createUserDto);
    if (!newUser) {
      return response.status(HttpStatus.NOT_FOUND).json({
        message: 'Error registering user',
      });
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  //Web3
  @Post('/web3/requestmessage')
  async requestMessage(@Res() response, @Body() body: any) {
    const message = await this.authService.requestMessage(body);
    if (!message) {
      return response.status(HttpStatus.NOT_FOUND).json({
        message: 'Error requesting message',
      });
    } else {
      return response.status(HttpStatus.OK).json({
        message: 'Message requested',
        data: message,
      });
    }
  }

  @Post('/web3/verify')
  async verify(@Res() response, @Body() body: any) {
    const { token, user } = await this.authService.verify(body);
    if (!user) {
      return response.status(HttpStatus.NOT_FOUND).json({
        message: 'Error verifying user',
      });
    } else {
      response.cookie('moralis-session-token', token, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
      });
      return response.status(HttpStatus.OK).json({
        message: 'User verified',
        user: user,
      });
    }
  }

  @Post('/web3/signup')
  async signup(@Res() response, @Body() body: any) {
    const user = await this.authService.registerWeb3User(body);
    if (!user) {
      return response.status(HttpStatus.NOT_FOUND).json({
        message: 'Error signing up user',
      });
    } else {
      return response.status(HttpStatus.OK).json({
        message: 'User signed up',
        user: user,
      });
    }
  }

  @Get('/web3/authenticate')
  async authenticate(@Res() response, @Request() req) {
    const data = await this.authService.authenticate(req);
    if (!data) {
      return response.status(HttpStatus.NOT_FOUND).json({
        message: 'Error authenticating user',
      });
    } else {
      return response.status(HttpStatus.OK).json({
        message: 'User authenticated',
        data: data,
      });
    }
  }

  @Get('/web3/logout')
  logout(@Res() response) {
    response.clearCookie('moralis-session-token');
    return response.status(HttpStatus.OK).json({
      message: 'Logout successful',
    });
  }
}
