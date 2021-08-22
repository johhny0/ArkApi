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
import { UserArmor } from './userArmor.entity';
import { UserBosses } from './userBosses.entity';
import { UserDino } from './userDinos.entity';
import { UserWeapon } from './userWeapon.entity';

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

  @OneToMany(() => UserArmor, (userArmor) => userArmor.user)
  @JoinTable({ name: 'usersArmors' })
  userArmors: UserArmor[];

  @OneToMany(() => UserBosses, (userBoss) => userBoss.user)
  @JoinTable({ name: 'userBosses' })
  userBosses: UserBosses[];

  @OneToMany(() => UserDino, (userDino) => userDino.user)
  @JoinTable({ name: 'usersDinos' })
  userDinos: UserDino[];
}
