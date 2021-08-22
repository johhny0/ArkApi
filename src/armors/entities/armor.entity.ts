import { UserArmor } from 'src/users/entities/userArmor.entity';
import { Column, Entity, JoinTable, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('armors')
export class Armor {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(() => UserArmor, (userArmor) => userArmor.armor)
  @JoinTable({ name: 'usersArmors' })
  userArmors: UserArmor[];
}
