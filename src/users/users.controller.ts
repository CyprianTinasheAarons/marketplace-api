import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Res() response, @Body() createUserDto: CreateUserDto) {
    const newUser = await this.usersService.create(createUserDto);
    return response.status(HttpStatus.CREATED).json({
      message: 'User created successfully',
      user: newUser,
    });
  }

  @Get()
  async findAll(@Res() response) {
    const users = await this.usersService.findAll();
    return response.status(HttpStatus.OK).json(users);
  }

  @Get(':id')
  async findOne(@Res() response, @Param('id') id: string) {
    const user = await this.usersService.findOne(id);
    if (!user) {
      return response.status(HttpStatus.NOT_FOUND).json({
        message: 'User not found',
      });
    }
    return response.status(HttpStatus.OK).json(user);
  }

  @Put(':id')
  async update(
    @Res() response,
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const updatedUser = await this.usersService.update(id, updateUserDto);
    if (!updatedUser) {
      return response.status(HttpStatus.NOT_FOUND).json({
        message: 'User not found',
      });
    }
    return response.status(HttpStatus.OK).json({
      message: 'User updated successfully',
      user: updatedUser,
    });
  }

  @Delete(':id')
  async remove(@Res() response, @Param('id') id: string) {
    const deletedUser = await this.usersService.remove(id);
    if (!deletedUser) {
      return response.status(HttpStatus.NOT_FOUND).json({
        message: 'User not found',
      });
    }
    return response.status(HttpStatus.OK).json({
      message: 'User deleted successfully',
      user: deletedUser,
    });
  }
}
