import { UserWeapon } from 'src/users/entities/userWeapon.entity';
import { Column, Entity, JoinTable, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('weapons')
export class Weapon {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  category: string;

  @OneToMany(() => UserWeapon, (userWeapon) => userWeapon.weapon)
  @JoinTable({ name: 'usersWeapons' })
  userWeapons: UserWeapon[];
}
