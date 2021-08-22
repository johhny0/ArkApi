import { UserDino } from 'src/users/entities/userDinos.entity';
import { Column, Entity, JoinTable, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('dinos')
export class Dino {
  @PrimaryColumn()
  id: string;

  @Column() name: string;
  @Column() diet: string;
  @Column() temperament: string;
  @Column() tameable: boolean;
  @Column() rideable: boolean;
  @Column() breedable: boolean;
  @Column() saddle: string;

  @OneToMany(() => UserDino, (userDino) => userDino.dino)
  @JoinTable({ name: 'usersDinos' })
  userDinos: UserDino[];
}
