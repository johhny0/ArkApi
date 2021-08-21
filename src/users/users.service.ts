import { Inject, Injectable } from '@nestjs/common';
import { compare, hash } from 'bcryptjs';
import { InvalidCredentialsException } from '../errors/exceptions/invalidCredentials.exception';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

interface UserFindOptions {
  showPassword: boolean;
}
@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private repository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const userAlreadyExists = await this.repository.findOne({
      where: {
        username: createUserDto.username,
        email: createUserDto.email,
      },
    });

    if (userAlreadyExists) throw new InvalidCredentialsException();

    createUserDto.password = await this.setPassword(createUserDto.password);
    return await this.repository.save(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return await this.repository.find({
      relations: ['userWeapons', 'userWeapons.weapon'],
    });
  }

  async findById(id: string): Promise<User> {
    return await this.repository.findOne(id);
  }

  async findByUserName(
    username: string,
    options: UserFindOptions = { showPassword: false },
  ): Promise<User | undefined> {
    return await this.repository.findOne({
      where: { username },
      select: options.showPassword ? ['password', 'username'] : null,
    });
  }

  // update(id: string, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  async setPassword(password: string): Promise<string> {
    return await hash(password, 8);
  }

  async checkPassword(user: User, password: string): Promise<boolean> {
    return await compare(user.password, password);
  }

  async remove(id: string) {
    return await this.repository.softDelete(id);
  }
}
