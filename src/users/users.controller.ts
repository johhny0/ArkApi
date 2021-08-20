import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ErrorMessage, ErrorService } from 'src/errors/error.service';
import { User } from './entities/user.entity';
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

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
