import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ErrorMessage, ErrorService } from 'src/errors/error.service';
import { User } from './entities/user.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
// import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private errorService: ErrorService,
  ) {}

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<User | ErrorMessage> {
    try {
      return await this.usersService.create(createUserDto);
    } catch (error) {
      return this.errorService.makeErrorMessage(error);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<User[] | ErrorMessage> {
    try {
      return await this.usersService.findAll();
    } catch (error) {
      return this.errorService.makeErrorMessage(error);
    }
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.usersService.remove(id);
    } catch (error) {
      return this.errorService.makeErrorMessage(error);
    }
  }
}
