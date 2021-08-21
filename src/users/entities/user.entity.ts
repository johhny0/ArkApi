import { Min } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserWeapon } from './usersWeapons.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column({ unique: true })
  @Min(3)
  username: string;

  @Column({ select: false })
  password: string;

  @Column({ unique: true })
  @Min(6)
  email: string;

  @Column()
  lastName: string;

  @Column()
  @Min(3)
  firstName: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedDate: Date;

  @OneToMany(() => UserWeapon, (userWeapon) => userWeapon.user)
  @JoinTable({ name: 'usersWeapons' })
  userWeapons: UserWeapon[];
}
