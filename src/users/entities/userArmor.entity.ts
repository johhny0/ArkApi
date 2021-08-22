import { Armor } from 'src/armors/entities/armor.entity';
import {
  Entity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';

@Entity('usersArmors')
export class UserArmor {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  done: boolean;

  @ManyToOne(() => User, (e) => e.userArmors)
  user: User;

  @ManyToOne(() => Armor, (e) => e.userArmors)
  armor: Armor;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
