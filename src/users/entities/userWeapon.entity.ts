import { Weapon } from 'src/weapons/entities/weapon.entity';
import {
  Entity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';

@Entity('usersWeapons')
export class UserWeapon {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  done: boolean;

  @ManyToOne(() => User, (e) => e.userWeapons)
  user: User;

  @ManyToOne(() => Weapon, (e) => e.userWeapons)
  weapon: Weapon;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
