import { Dino } from 'src/dinos/entities/dino.entity';
import {
  Entity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';

@Entity('usersDinos')
export class UserDino {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  done: boolean;

  @ManyToOne(() => User, (e) => e.userDinos)
  user: User;

  @ManyToOne(() => Dino, (e) => e.userDinos)
  dino: Dino;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
