import { Boss } from 'src/bosses/entity/bosses.entity';
import {
  Entity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';

@Entity('usersBosses')
export class UserBosses {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  done: boolean;

  @ManyToOne(() => User, (e) => e.userBosses)
  user: User;

  @ManyToOne(() => Boss, (e) => e.userBosses)
  boss: Boss;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
