import { UserBosses } from 'src/users/entities/userBosses.entity';
import { Column, Entity, JoinTable, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'bosses' })
export class Boss {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(() => UserBosses, (usersBoss) => usersBoss.boss)
  @JoinTable({ name: 'usersBosses' })
  userBosses: UserBosses[];
}
