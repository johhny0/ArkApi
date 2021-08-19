import { Inject, Injectable } from '@nestjs/common';
import { hash } from 'bcryptjs';
import { Repository } from 'typeorm';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private repository: Repository<User>,
  ) {}

  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  findAll() {
    return this.users;
  }

  // findOne(id: string) {
  //   return `This action returns a #${id} user`;
  // }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  // update(id: string, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  async setPassword(password: string) {
    return await hash(password, 8);
  }

  private readonly users: User[] = [
    {
      id: '1',
      username: 'john',
      password: 'changeme',
    },
    {
      id: '2',
      username: 'maria',
      password: 'guess',
    },
  ];

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
